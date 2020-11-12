import Vue from "vue";
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";
import config from "../cloudbaserc";

Vue.config.productionTip = false;

Vue.use(Cloudbase, {
  env: process.env.VUE_APP_ENV_ID || config.envId,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
