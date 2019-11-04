module.exports = {
    envId: '{{envId}}',
    functionRoot: './functions',
    functions: [
        {
            name: 'scf-html',
            config: {
                // 超时时间
                timeout: 5,
                runtime: 'Nodejs8.9'
            },
            triggers: [],
            // 调用云函数时的输入参数
            params: {},
            handler: 'index.main'
        }
    ]
};
