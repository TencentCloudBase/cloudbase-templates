/* eslint-disable import/no-commonjs */
const ci = require('miniprogram-ci')
const { version } = require('./package.json')
const config = require('./project.config.json')

const { appid } = config
const [action = 'preview'] = process.argv.splice(2)
const fs = require('fs')

if(!fs.existsSync('private.key')) {
    console.log('对不起，没有找到private.key，请前往https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html查看文档')
    return false
}

if (!appid) {
    console.log('对不起，appid不能为空，请前往./project.config.json查看')
    return false
}

const project = new ci.Project({
    appid,
    type: 'miniProgram',
    projectPath: 'dist',
    privateKeyPath: 'private.key',
    ignores: ['node_modules/**/*']
})

const defaultConfig = {
    project,
    desc: 'CI自动化部署',
    setting: {
        es6: true,
        minify: true
    },
    onProgressUpdate: console.log
}

const previewConfig = {
    ...defaultConfig,
    qrcodeFormat: 'terminal',
    qrcodeOutputDest: '',
    pagePath: 'pages/index/index',
    searchQuery: ''
}

const uploadConfig = {
    ...defaultConfig,
    version,
    robot: 1
}

;(async () => {
    if (action === 'upload') {
        await ci.upload(uploadConfig)
        console.log('体验版部署完成')
    } else {
        await ci.preview(previewConfig)
        console.log('开发版部署完成')
    }
})()
