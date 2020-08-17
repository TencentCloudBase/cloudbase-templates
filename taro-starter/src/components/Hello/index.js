/* eslint-disable import/no-duplicates */
import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import cloudbaseLogo from '../../assets/cloudbase.png'
import logo from '../../assets/logo.png'

import './index.less'

const LoginFail = () => {
  return (
    <View className='hello'>
      <View className='title'>为了演示云开发功能，需要开启匿名登录</View>
      <View>登录腾讯云 Cloudbase</View>
      <Image style='width: 100%;' src='https://main.qcloudimg.com/raw/f342f7b23513e12c2b06677a54a5efbc.png' />
      <View className='title'>本示例 Github 源码地址</View>
      <a href='https://github.com/TencentCloudBase/cloudbase-templates/tree/master/express-starter'>
        https://github.com/TencentCloudBase/cloudbase-templates/tree/master/express-starter
      </a>
      <View className='title'>开发部署工具</View>
    </View>
  )
}

class Hello extends Component {
  state = {
    isLogin: false,
    callFunctionResult: ''
  }

  componentWillMount () {
    const app = Taro.cloud
    if (Taro.getEnv() === 'WEB') {
      const loginState =  app.auth().hasLoginState()
      if (loginState) {
        this.setState({
          isLogin: true
        })
      }
      // 匿名登录
      const login = async () => {
        try {
          await app
            .auth({ persistence: "local" })
            .anonymousAuthProvider()
            .signIn();

          this.setState({
            isLogin: true
          })
        } catch (e) {
          if (e.message.includes("100007")) {
            this.setState({
              isLogin: false
            })
          }
          console.error(e);
          console.log(e.code);
        }
      }
      console.log("登录");
      login();
    } else {
      this.setState({
        isLogin: true
      })
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goFreamework() {
    console.log(this)
  }

  goTemplate() {
    console.log(this)
  }

  callFunction = () => async () => {
    const res = await Taro.cloud.callFunction({
      name: "taro-stater-app",
      data: {
        foo: "bar",
        name: 'erikqin'
      },
    });
    this.setState({
      callFunctionResult: JSON.stringify(res)
    })
  }

  render () {
    const { isLogin, callFunctionResult } = this.state

    return (
      <View className='hello'>
        <Text className='first-title'>欢迎使用云开发 CloudBase React App</Text>
        {isLogin ? (
          <View>
            <View style='margin-top: 20px;'>
              <Image style='width: 80px;height: 80px;margin-right: 20px;' src={cloudbaseLogo} />
              <Image style='width: 114px;height: 80px;' className='logo' src={logo} />
            </View>
            <View>
              <View className='title'>登录云开发</View>
              <View>{isLogin ? "已登录" : "未登录"}</View>
            </View>
            <View>
              <View className='title'>调用云函数</View>
              <View>
                点击<Text onClick={this.callFunction(this)}>调用 hello world 云函数</Text>
              </View>
            </View>
            <View>
              <View>云函数执行结果</View>
              <View>{callFunctionResult}</View>
            </View>
          </View>): (
          <LoginFail />
        )}
        <Image onClick={this.goFreamework} style='margin-top: 20px;width: 100%; height: 40px' src='https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png' />
      </View>
    )
  }
}

export default Hello
