// use to generate entry and HtmlWebpackPlugin for webpack
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectConfig = require('./generate.config')
module.exports = () => {
  const __root = process.cwd()
  let { useHistory , routePath} = projectConfig
  useHistory = typeof useHistory !== 'boolean' ? false : useHistory
  routePath = Array.isArray(routePath) ? routePath : []
  let htmlToBeInsert = []
  if (useHistory) {
    routePath.map(route => {
      if (route !== '/') {
        htmlToBeInsert.push(new HtmlWebpackPlugin({
          template: path.resolve(__root, './index.html'),
          filename: path.resolve(__root, `dist/${route}/index.html`),
          minify:{
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
          }
        }))
      }
    })
  }
  return {
    htmlToBeInsert
  }
}
