const generateEntry = require('./generateEntry/generateEntry')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  devServer: {
    host: '0.0.0.0',
    port: 80,
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const { htmlToBeInsert } = generateEntry()
      config.plugins = [...config.plugins, ...htmlToBeInsert]
    }
  }
}
