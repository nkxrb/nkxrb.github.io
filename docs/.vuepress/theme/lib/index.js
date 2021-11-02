const { path } = require('@vuepress/utils')

const theme = (options, app) => {
  return {
    name: 'vuepress-theme-nkxrb',
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/404.vue'),
    }
  }
}


module.exports = theme
