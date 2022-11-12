#!/usr/bin/env node

import yargs from 'yargs';

import { run } from '../ts-generate-schema';
import { defaultArgs } from '../types/Generator';

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
  .describe('export', 'How to export generated json-schema from file').argv;

run({ pattern: args._[0], ...args });
