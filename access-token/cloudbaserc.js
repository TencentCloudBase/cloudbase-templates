module.exports = {
    envId: '{{envId}}',
    functionRoot: './functions',
    functions: [
        {
            name: 'app',
            config: {
                // 超时时间
                timeout: 5,
                // 环境变量
                envVariables: {},
                runtime: 'Nodejs8.9'
            },
            handler: 'index.main'
        }
    ]
}
