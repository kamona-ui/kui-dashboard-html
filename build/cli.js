#!/usr/bin/env node
const { Command } = require('commander')
const { version, name } = require('../package.json')
const buildHtml = require('./html')
const serve = require('./serve')

const program = new Command(name)

program.version(version)

program
  .command('html')
  .option('-r, --root <root>', 'Root of `Edge` files', 'src/edge')
  .option('-i, --input <input...>', 'Input patterns', ['**/*.edge'])
  .option('-o, --output <output>', 'Output directory', 'public')
  .option('-d, --data-path <data>', 'Global data `relative to root`', 'data/data.js')
  .option('-w, --watch', 'Watch files')
  .option('-a, --all-in-output', 'Reserve nested structure', false)
  .option('-s, --skip <skip...>', 'Patterns to skip', ['**/layouts/**', '**/components/**', '**/partials/**'])
  .description('Compile `Edge` files to html')
  .action(buildHtml)

program
  .command('serve')
  .option('-d, --dest <dest>', 'dest dir', 'public')
  .option('-i, --index <index>', 'Specify which file should be used as the index page', 'index.html')
  .option('-w, --watch', 'Watch files')
  .description('Serve')
  .action(serve)

program.parse(process.argv)
