import * as TJS from 'typescript-json-schema';

const settings: TJS.PartialArgs = { required: true, ignoreErrors: true };
const compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

export function getSymbolsWithFilePath(
  files: Array<string>,
): Array<Promise<{ symbols: string[]; file: string; generator: TJS.JsonSchemaGenerator }>> {
  return files.map(
    (file) =>
      new Promise((resolve, reject) => {
        try {
          const program = TJS.getProgramFromFiles([file], compilerOptions, process.cwd());
          const generator = TJS.buildGenerator(program, settings) as TJS.JsonSchemaGenerator;

          const symbols = generator.getMainFileSymbols(program, files);

          resolve({ symbols, file, generator });
        } catch (e) {
          reject(e);
        }
      }),
  );
}
