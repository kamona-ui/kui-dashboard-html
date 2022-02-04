const { resolve } = require('path')
const { copySync } = require('fs-extra')
const normalize = require('normalize-path')
const { green } = require('chalk')

module.exports = async (options) => {
  let src = normalize(resolve(process.cwd(), options.src))
  let dest = normalize(resolve(process.cwd(), options.dest))

  console.log(green('Starting to copy images...'))

  copySync(src, dest)

  console.log(green('Done.'))
}
