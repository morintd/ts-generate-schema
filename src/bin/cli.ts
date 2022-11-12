#!/usr/bin/env node

import yargs from 'yargs';

import { run } from '../ts-generate-schema';
import { defaultArgs, TsGenerateSchemaArgs } from '../types/Generator';

type ArgsType = Omit<TsGenerateSchemaArgs, 'pattern'> & {
  _: string[];
};

const args = yargs
  .usage('Usage: ts-generate-schema <pattern>')
  .demand(1)
  .string('to')
  .default('to', defaultArgs.to)
  .describe('to', 'Extension of generated json-schema')
  .string('out')
  .default('out', defaultArgs.out)
  .describe('out', 'Path to the generated schema directory')
  .string('export')
  .default('export', defaultArgs.export)
  .describe('export', 'How to export generated json-schema from file').argv as ArgsType;

run({ pattern: args._[0], ...args });
