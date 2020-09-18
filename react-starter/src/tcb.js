import tcb from "tcb-js-sdk";

// 将你的环境 Id 填写到此处
export const envId = process.env.REACT_APP_ENV_ID;

export const getApp = () => {
  const app = tcb.init({
    env: process.env.REACT_APP_ENV_ID,
  });

  app.auth({
    persistence: "local",
  });

  return app;
};
