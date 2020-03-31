module.exports = {
    envId: "{{envId}}",
    functionRoot: "./functions",
    functions: [
        {
            name: "app",
            config: {
                timeout: 5,
                envVariables: {},
                installDependency: true,
            },
            // params 是 cli 中 invoke 命令发起调试时带的参数，执行的依然是云端代码
            // mail：用来测试接受的邮箱
            params: {mail: "example@example.com"},
            ignore: [
                '*.md',
                'node_modules',
                'node_modules/**/*'
            ]
        }
    ]
};
