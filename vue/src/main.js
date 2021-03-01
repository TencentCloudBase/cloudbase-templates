import Vue from "vue";
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";

window._tcbEnv = window._tcbEnv || {};

export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

Vue.config.productionTip = false;

Vue.use(Cloudbase, {
  env: envId,
  region: region
});

new Vue({
  render: h => h(App)
}).$mount("#app");
