import * as fs from 'fs';
import * as path from 'path';

import glob from 'glob';
import kebabCase from 'kebab-case';

import { getSymbolsWithFilePath } from './files';
import { TsGenerateSchemaArgs } from './types/Generator';

export function run(args: TsGenerateSchemaArgs) {
  const files = glob.sync(args.pattern);

  const symbolsWithFilePath = getSymbolsWithFilePath(files);

  return Promise.all(symbolsWithFilePath).then((entries) => {
    entries.forEach(({ symbols, file, generator }) => {
      const directory = path.dirname(file);
      symbols.forEach((symbol) => {
        const filePath = path.resolve(directory, 'schema', `${kebabCase(symbol).substring(1)}.${args.to}`);
        const schema = generator.getSchemaForSymbol(symbol);
        const fileContents = `${args.export} ${JSON.stringify(schema, null, 2)}`;

        if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath));

        console.info(filePath);
        fs.writeFileSync(filePath, fileContents);
      });
    });
  });
}
