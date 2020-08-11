import Vue from 'vue'
import App from './App'
import globalMix from '@/mixins/global'
import config from "../cloudbaserc"
// #ifdef H5
import Cloudbase from "@cloudbase/vue-provider"
Vue.use(Cloudbase, {
  env: config.envId,
})
// #endif
// #ifdef MP-WEIXIN
if (wx.cloud) {
  Vue.prototype.$cloudbase = wx.cloud
  Vue.prototype.$cloudbase.config = {
    env: config.envId,
    persistence: 'local',
    timeout: 15000,
    platform: 'mp-weixin'
  }
  wx.cloud.init({
    env: config.envId,
  })
} else {
  console.error('您的环境还没有开通云开发环境！')
}
// #endif

Vue.config.productionTip = false

Vue.mixin(globalMix)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
