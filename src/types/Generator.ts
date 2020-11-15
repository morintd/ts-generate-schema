export type TsGenerateSchemaArgs = {
  pattern: string;
  to: string;
  export: string;
};

export const defaultArgs: TsGenerateSchemaArgs = {
  pattern: '**/*.response.ts',
  to: 'jsc.ts',
  export: 'export default',
};
