module.exports = {
  envId: "{{envId}}",
  functionRoot: "cloudfunctions",
  functions: [
    {
      name: "helloworld",
      config: {
        timeout: 5,
        envVariables: {},
        runtime: "Nodejs10.15",
        // 内存 128
        memorySize: 128,
      },
    },
  ],
};
