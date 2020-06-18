import tcb from "tcb-js-sdk";

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
