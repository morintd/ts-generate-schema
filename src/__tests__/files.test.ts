import { getSymbolsWithFilePath } from './../files';

describe('files', () => {
  describe('getSymbolsWithFilePath', () => {
    it('should return symbol/filepath for files found', async () => {
      const [file] = getSymbolsWithFilePath(['src/example/login-user-response.dto.ts']);
      const {
        symbols: [symbol],
      } = await file;
      expect(symbol).toBe('LoginUserResponseDTO');
    });

    it('should rejects with error', async () => {
      return expect(Promise.all(getSymbolsWithFilePath([(undefined as unknown) as string]))).rejects.toEqual(
        new TypeError("Cannot read property 'replace' of undefined"),
      );
    });
  });
});
