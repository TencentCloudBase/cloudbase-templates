import Vue from "vue";
import Cloudbase from "@cloudbase/vue-provider";
import config from "../cloudbaserc";

Vue.use(Cloudbase, {
  env: config.envId
});
