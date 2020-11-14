#!/usr/bin/env node

import yargs from 'yargs';

import { run } from '../ts-generate-schema';
import { defaultArgs } from '../types/Generator';

const args = yargs
  .string('from')
  .default('from', defaultArgs.from)
  .describe('from', 'Extension of target typescript definitions')
  .string('to')
  .default('to', defaultArgs.to)
  .describe('to', 'Extension of generated json-schema')
  .string('export')
  .default('export', defaultArgs.export)
  .describe('export', 'How to export generated json-schema from file').argv;

run(args);
