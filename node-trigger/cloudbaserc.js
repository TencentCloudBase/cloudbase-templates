module.exports = {
    envId: "{{envId}}",
    functionRoot: "./functions",
    functions: [
        {
            name: "app",
            // 超时时间
            timeout: 5,
            runtime: "Nodejs10.15",
            // 内存 128
            memorySize: 128,
            // 每天 2 点触发
            triggers: [
                {
                    name: "trigger",
                    type: "timer",
                    config: "0 0 2 1 * * *"
                }
            ],
            handler: "index.main"
        }
    ]
};
