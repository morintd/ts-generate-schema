import * as fs from 'fs';

import ExpectedLoginUserResponseSchema from '../example/expected-login-user-response-dto.jsc';
import { run } from '../ts-generate-schema';
import { defaultArgs } from '../types/Generator';

describe('ts-generate-schema', () => {
  const generatedPath = '../example/schema/login-user-response-dto.jsc';

  describe('run', () => {
    it('should generate expected json-schema', async () => {
      try {
        fs.unlinkSync('src/example/schema/login-user-response-dto.jsc.ts');
        await new Promise<void>((resolve, reject) => {
          fs.rmdir('src/example/schema', (err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      } catch (e) {
        console.info('Schema not found');
      }

      await run(defaultArgs);
      const schema = await import(generatedPath);
      expect(schema.default).toEqual(ExpectedLoginUserResponseSchema);
    });

    it('should re-generate if schema exist', async () => {
      await run(defaultArgs);
      const schema = await import(generatedPath);
      expect(schema.default).toEqual(ExpectedLoginUserResponseSchema);
    });
  });
});
