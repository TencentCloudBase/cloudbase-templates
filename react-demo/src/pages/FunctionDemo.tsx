import React, { useState } from 'react'
import { Input, Divider, message } from 'antd'
import { DemoWrapper } from '@/components'
import { getApp } from '../utils'

const { Search } = Input

const DemoBase64: React.FC<{}> = () => {
  const [result, setResult] = useState('')
  const app = getApp()

  const getBase64Encoding = (base64: string) => {
    if (!base64) {
      message.error('Base64 字符串不能为空！')
      return
    }

    app
      .callFunction({
        name: 'base64',
        data: {
          str: base64
        }
      })
      .then((res: any) => {
        setResult(res.result.data)
      })
      .catch((err: any) => {
        message.error(err.message)
      })
  }

  return (
    <DemoWrapper title="Base64 编码">
      <div>
        <Search
          placeholder="输入要编码的字符串"
          enterButton="计算"
          size="large"
          onSearch={getBase64Encoding}
        />
        <div className="margin-top-sm">Output：{result}</div>
      </div>
      <Divider />
    </DemoWrapper>
  )
}

export const FunctionDemo: React.FC<{}> = () => {
  return (
    <div>
      <div className="text-center text-sm text-bold">云函数</div>
      <Divider />
      <DemoBase64 />
    </div>
  )
}
