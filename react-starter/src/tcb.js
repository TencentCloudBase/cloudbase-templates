import tcb from "tcb-js-sdk";

// 将你的环境 Id 填写到此处
export const envId = "";

export const getApp = () => {
  const app = tcb.init({
    env: envId,
  });

  app.auth({
    persistence: "local",
  });

  return app;
};
