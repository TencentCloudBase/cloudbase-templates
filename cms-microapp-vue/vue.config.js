// CMS 微应用 APPID
const microAppID = 'vueApp'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '/' : `/cloudbase-cms/apps/${microAppID}/`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${microAppID}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${microAppID}`,
    },
  },
}
