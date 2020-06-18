const path = require('path')
const { override, overrideDevServer, addWebpackAlias } = require('customize-cra')

const setOutputFilename = (filename) => (config) => {
  config.output = {
    ...config.output,
    filename
  }

  return config
}

const setDevHeaders = (headers) => (config, env) => {
  config.headers = {
    ...config.headers,
    ...headers
  }
  return config
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.join(__dirname, './src')
    })
  ),
  devServer: overrideDevServer(
    setDevHeaders({
      'X-Author': 'cloudbase'
    })
  )
}
