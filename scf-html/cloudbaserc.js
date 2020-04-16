module.exports = {
    envId: "{{envId}}",
    functionRoot: "./functions",
    functions: [
        {
            name: "scf-html",
            // 超时时间
            timeout: 5,
            runtime: "Nodejs10.15",
            // 内存 128
            memorySize: 128,
            handler: "index.main"
        }
    ]
};
