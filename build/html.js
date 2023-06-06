const { resolve, join, basename, relative, dirname } = require('path')
const { ensureDir, writeFile, pathExists } = require('fs-extra')
const { Edge } = require('edge.js')
const fg = require('fast-glob')
const chokidar = require('chokidar')
const normalizePath = require('normalize-path')
const chalk = require('chalk')

const resolveOutput = ({ file, root, output, allInOutput = false }) => {
  return new Promise((res) => {
    let inputPath = basename(file)
    if (allInOutput) {
      inputPath = relative(root, file)
    }
    let resolvedOutput = join(resolve(output), inputPath).replace('.edge', '.html')
    return res(resolvedOutput)
  })
}

module.exports = async (options) => {
  const { input, output, root, dataPath, watch, allInOutput, skip } = options

  const inputPatterns = input.filter(Boolean).map((pattern) => {
    return `${normalizePath(join(resolve(root), pattern))}`
  })

  const edgeFiles = await fg(inputPatterns, {
    ignore: ['**/node_modules/**', ...skip],
  })

  if (!edgeFiles.length) {
    console.log(`[${chalk.cyan('html')}]:`)
    console.log(`  There is no files match your patterns ${chalk.yellow(input)} in root ${chalk.yellow(root)}`)
  }

  const dataFilePath = join(resolve(root), dataPath)
  let data = {}
  if (await pathExists(dataFilePath)) {
    data = require(dataFilePath)
  } else {
    console.log(`[${chalk.cyan('html')}]:`)
    console.warn(`  ${chalk.yellow("Data file dosn't exist.")}`)
  }

  const engine = new Edge({
    cache: false,
  })

  engine.mount(resolve(root))

  const finishedFiles = []

  for (const file of edgeFiles) {
    const resolvedOutput = await resolveOutput({
      file,
      root,
      output,
      allInOutput,
    })

    try {
      const html = await engine.render(relative(root, file), data)
      await ensureDir(dirname(resolvedOutput))
      await writeFile(resolvedOutput, html, { encoding: 'utf-8' })
      finishedFiles.push(resolvedOutput)
    } catch (error) {
      console.log(`[${chalk.red('html')}]:`)
      console.log(error)
    }
  }

  if (!watch && finishedFiles.length) {
    console.log(`[${chalk.cyan('html')}]:`)
    finishedFiles.forEach((file) => {
      console.log(`  [${chalk.green('Done!')}]: ${file}`)
    })
  }

  if (watch) {
    console.log('Watching html...')
    chokidar
      .watch(normalizePath(join(resolve(root), '**/*.edge')), {
        ignoreInitial: true,
        awaitWriteFinish: {
          stabilityThreshold: 50,
          pollInterval: 10,
        },
      })
      .on('all', async (event, file) => {
        console.log(`[${chalk.cyan('html')}][${event}]: ${file}`)

        for (const file of edgeFiles) {
          const resolvedOutput = await resolveOutput({
            file,
            root,
            output,
            allInOutput,
          })

          try {
            const html = await engine.render(relative(root, file), data)
            await ensureDir(dirname(resolvedOutput))
            await writeFile(resolvedOutput, html, { encoding: 'utf-8' })
          } catch (error) {
            console.log(`[${chalk.red('html')}]:`)
            console.log(error)
          }
        }
      })
  }
}
