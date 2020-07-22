import Vue from "vue";
import Cloudbase from "@cloudbase/vue-provider";

export default async () => {
  const envId = await fetch("/nuxt-ssr-echo/")
    .then(response => response.json())
    .then(data => data.envId);

  Vue.use(Cloudbase, {
    env: envId
  });
};
