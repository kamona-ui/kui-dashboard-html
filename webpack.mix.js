const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const { vendors } = require('./src/vendor/vendor.json')

mix.setPublicPath('public')

mix.js('src/assets/js/landing-page.js', 'public/assets/js')
mix.js('src/assets/js/main.js', 'public/assets/js')

mix.postCss('src/assets/css/main.css', 'public/assets/css', [
    tailwindcss(),
])

mix.copyDirectory('src/assets/images', 'public/assets/images')

Object.entries(vendors).forEach((entry) => {
    Object.values(entry[1]).forEach((path) => {
        mix.copy(path.from, path.to)
    })
})
