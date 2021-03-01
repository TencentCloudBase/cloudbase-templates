import Vue from "vue";
import CloudBase from "@cloudbase/vue-provider";

window._tcbEnv = window._tcbEnv || {};

export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

Vue.use(CloudBase, {
  env: envId,
  region: region
});
