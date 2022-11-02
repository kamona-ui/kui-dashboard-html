const { spawn } = require('node:child_process');
const { argv } = require('node:process');
const chokidar = require('chokidar')
const { cyan } = require('chalk')

const compile = (...args) => {
    // TODO: Pass args to php
    const php = spawn('php', ['artisan', 'blade:compile'])
    
    php.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    })
    
    php.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`)
    })
    
    php.on('close', (code) => {
      console.log(`child process exited with code ${code}`)
    })
}

if(process.env.BLADE_WATCH) {
    console.log(cyan('Watching blade files...'))

    chokidar.watch('src/blade', {
        ignoreInitial: false,
        awaitWriteFinish: {
          stabilityThreshold: 50,
          pollInterval: 10,
        },
      }).on('all', (event, file) => {
        console.log(`[${cyan('blade')}][${event}]: ${file}`)

        compile(argv)
      })
} else {
    compile(argv)
}
