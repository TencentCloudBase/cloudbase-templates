import Vue from "vue";
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";
import config from "../cloudbaserc";

Vue.config.productionTip = false;

Vue.use(Cloudbase, {
  env: config.envId,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
