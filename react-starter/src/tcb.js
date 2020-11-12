import cloudbase from "@cloudbase/js-sdk";

// 将你的环境 Id 填写到此处
export const envId = process.env.REACT_APP_ENV_ID;

let app;
let auth;

export const getApp = () => {
  if (!app) {
    app = cloudbase.init({
      env: envId,
    });
  }

  if (!auth) {
    auth = app.auth({
      persistence: "local",
    });
  }

  return app;
};
