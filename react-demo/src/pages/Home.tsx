import React, { useState } from 'react'
import { Row, Col, Button, Input, Alert, message } from 'antd'
import { getApp } from '@/utils'
import { config } from '@/config'

const { Search } = Input

const ticketUrl = `https://${config.envId}.service.tcloudbase.com/login`

export const Home: React.FC<{}> = () => {
  const app = getApp()
  const [loginLoading, setLoginLoading] = useState(false)

  // 检测登录状态
  const loginState = app.auth().getLoginState()
  const login = !!loginState

  const customLogin = (userId: string) => {
    if (!userId) {
      message.error('用户名不能为空！')
      return
    }

    setLoginLoading(true)

    fetch(`${ticketUrl}?userId=${userId}`)
      .then(async (res) => {
        if (res.status === 400) {
          throw new Error(`${res.status}: ${res.statusText} 获取 Ticket 失败，用户 Id 不符合规则`)
        }

        if (res.status === 429) {
          throw new Error(`${res.status}: ${res.statusText} API rate limit exceeded`)
        }
        const data = await res.json()

        const auth = app.auth()

        auth.signInWithTicket(data.ticket).then((res: any) => {
          if (res?.credential?.refreshToken) {
            message.info('登录成功！')
            window.location.reload()
          }
        })
      })
      .catch((err) => {
        message.error(err.message)
      })
      .finally(() => {
        setLoginLoading(false)
      })
  }

  return (
    <div>
      <div className="text-center">
        <img
          style={{ height: '200px', width: '200px' }}
          src={`${config.storageBaseUrl}/icon.png`}
          alt="Logo 图片"
        />
        <div className="margin-bottom-sm">
          <Button
            className="text-df"
            type="link"
            href="https://cloud.tencent.com/product/tcb"
            target="_blank"
          >
            云开发 Web 端示例
          </Button>
        </div>
      </div>
      <Row>
        <Col span={8} offset={8}>
          {!login && (
            <Alert
              message="你还没有登录，使用前请先登录！"
              type="warning"
              showIcon
              className="margin-bottom"
            />
          )}
          {login && (
            <Alert
              message="你已登录，无需再次登录！"
              type="info"
              showIcon
              className="margin-bottom"
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Search
            size="middle"
            placeholder="输入你的用户名，用户名长度必须大于 4 位，由字母和数字组成"
            enterButton="自定义登录"
            loading={loginLoading}
            onSearch={customLogin}
          />
        </Col>
      </Row>
    </div>
  )
}
