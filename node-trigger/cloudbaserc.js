module.exports = {
    envId: '{{envId}}',
    functionRoot: './functions',
    functions: [
        {
            name: 'app',
            config: {
                // 超时时间
                timeout: 5,
                runtime: 'Nodejs8.9'
            },
            // 每天 2 点触发
            triggers: [
                {
                    name: 'trigger',
                    type: 'timer',
                    config: '0 0 2 1 * * *'
                }
            ],
            handler: 'index.main'
        }
    ]
}
