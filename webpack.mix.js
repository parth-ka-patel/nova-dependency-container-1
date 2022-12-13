let mix = require('laravel-mix')
const path = require('path')
require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .nova('alexwenzel/dependency-container')
  .alias({
    '@': 'vendor/laravel/nova/resources/js/',
  })
  .webpackConfig({
    resolve: {
      alias: {
        'laravel-nova': path.resolve(__dirname, './node_modules/laravel-nova/dist/index.js'),
      },
    },
  });
