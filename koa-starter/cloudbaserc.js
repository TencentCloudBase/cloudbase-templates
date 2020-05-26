module.exports = {
    envId: "jianrizhi-14f5ba",
    functionRoot: "./functions",
    functions: [
        {
            name: "app",
            // 超时时间
            timeout: 5,
            // 环境变量
            envVariables: {},
            runtime: "Nodejs8.9",
            // 内存 256
            memorySize: 256,
            handler: "index.main"
        }
    ]
};
