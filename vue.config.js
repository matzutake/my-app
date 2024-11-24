/* eslint-disable no-undef */
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }, { removeDimensions: true }]
        }
      })
      .end()
      .use('svg-transform-loader')
      .loader('svg-transform-loader')
      .options({
        svg: {
          docTitle: 'Icons',
          root: '#icons'
        }
      })
  }
})
