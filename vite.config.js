import { resolve } from 'path'
import { defineConfig } from 'vite'
import { glob } from 'glob'
import handlebarsPlugin from 'vite-plugin-handlebars'
import data from './src/data'

const entries = glob.sync('./src/html/**/*.html').reduce((acc, path) => {
    const name = path.split('/').pop().split('.').shift()
    acc[name] = path
    return acc
}, {})

export default defineConfig({
    plugins: [
        handlebarsPlugin({
            partialDirectory: [
                resolve(__dirname, 'src', 'html', 'hbs'),
            ],

            context: data,

            helpers: {
                eq: function(v1, v2){
                    return (v1 === v2)
                },
                notEq: function(v1, v2){
                    return (v1 != v2)
                },
            }

        })
    ],
    root: 'src/html',
    resolve: {
        alias: {
            '@/': resolve(__dirname, 'src'),
        },
    },
    build: {
        target: 'esnext',
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: entries,
        },
    },
})
