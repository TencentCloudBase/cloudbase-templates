import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Hello from '../../components/Hello'

import './index.less'


class Index extends Component {
  componentWillMount () {
    console.log(Taro.cloud)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Hello />
      </View>
    )
  }
}

export default Index
