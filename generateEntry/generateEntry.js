// use to generate entry and HtmlWebpackPlugin for webpack
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectConfig = require('./generate.config')
module.exports = () => {
  const __root = process.cwd()
  const { useHistory } = projectConfig
  let htmlToBeInsert = []
  if (useHistory) {
    projectConfig.routePath.map(route => {
      if (route !== '/') {
        htmlToBeInsert.push(new HtmlWebpackPlugin({
          template: path.resolve(__root, './public/index.html'),
          filename: path.resolve(__root, `dist/${route}/index.html`)
        }))
      }
    })
  }
  return {
    htmlToBeInsert
  }
}
