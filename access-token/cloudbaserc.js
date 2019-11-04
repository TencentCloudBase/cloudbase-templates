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
                // 可以省略
                vpc: {},
                runtime: 'Nodejs8.9'
            },
            triggers: [
                {
                    name: 'myTrigger',
                    type: 'timer',
                    config: '0 0 2 1 * * *'
                }
            ],
            // 调用云函数时的输入参数
            params: {},
            handler: 'index.main'
        }
    ]
}
