export type TsGenerateSchemaArgs = {
  from: string;
  to: string;
  export: string;
};

export const defaultArgs: TsGenerateSchemaArgs = {
  from: 'response.ts',
  to: 'jsc.ts',
  export: 'export default',
};
