const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  plugins: [
    'rollup-plugin-coffee-script',
    '@vitejs/plugin-vue',
    'rollup-plugin-pug'
  ].map((name) => require(name)())
})
