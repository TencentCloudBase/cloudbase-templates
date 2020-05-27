module.exports = {
    envId: "{{envId}}",
    functionRoot: "./functions",
    functions: [
        {
            name: "app",
            // 超时时间
            timeout: 60,
            // 环境变量
            envVariables: {},
            runtime: "Nodejs10.15",
            // 内存 256
            memorySize: 256,
            handler: "index.main",
            installDependency: true
        }
    ]
};