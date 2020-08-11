const CopyWebpackPlugin = require('copy-webpack-plugin')
const { NODE_ENV, UNI_PLATFORM } = process.env
const path = require('path')

console.log('NODE_ENV, UNI_PLATFORM',NODE_ENV, UNI_PLATFORM)

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'cloudfunctions'), to: 'cloudfunctions' },
                ],
                options: {
                    concurrency: 100,
                }
            })
        ]
    }
}