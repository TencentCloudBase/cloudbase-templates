/* eslint-disable */
const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  removeModuleScopePlugin
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  removeModuleScopePlugin()
)
