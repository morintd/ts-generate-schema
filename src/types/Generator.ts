export type TsGenerateSchemaArgs = {
  pattern: string;
  to: string;
  export: string;
  out: string;
};

export const defaultArgs: TsGenerateSchemaArgs = {
  pattern: '**/*-response.dto.ts',
  to: 'jsc.ts',
  export: 'export default',
  out: 'schema',
};
