import * as fs from 'fs';

import ExpectedRawLoginUserResponseSchema from '../example/expected-raw-login-user-response.jsc';
import { run } from '../ts-generate-schema';
import { defaultArgs } from '../types/Generator';

describe('ts-generate-schema', () => {
  const generatedPath = '../example/schema/raw-login-user-response.jsc';

  describe('run', () => {
    it('should generate expected json-schema', async () => {
      try {
        fs.unlinkSync('src/example/schema/raw-login-user-response.jsc.ts');
        await new Promise((resolve, reject) => {
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
      expect(schema.default).toEqual(ExpectedRawLoginUserResponseSchema);
    });

    it('should re-generate if schema exist', async () => {
      await run(defaultArgs);
      const schema = await import(generatedPath);
      expect(schema.default).toEqual(ExpectedRawLoginUserResponseSchema);
    });
  });
});
