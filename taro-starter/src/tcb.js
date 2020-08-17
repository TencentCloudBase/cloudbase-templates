import Taro from '@tarojs/taro'
import tcb from "tcb-js-sdk"
import config from '../cloudbaserc.json'

if (Taro.getEnv() === 'WEAPP') {
  Taro.cloud.init({
    env: config.envId
  })
} else if (Taro.getEnv() === 'WEB') {
  const app = tcb.init({
    env: config.envId
  })

  app.auth({
    persistence: "local",
  })

  Taro.cloud = tcb
  Taro.cloud.app = app
}
