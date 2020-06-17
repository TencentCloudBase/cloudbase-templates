import React, { useState, useEffect } from 'react'
import { getApp } from '../../tcb'
import './index.css'

function LoginFail() {
  const envId = ''

  return (
    <>
      <h2>为了演示云开发功能，需要开启匿名登录</h2>
      <p>设置 src/tcb.js 中的环境 Id 变量：envId 为你的环境 Id</p>
      <p>
        登录腾讯云 Cloudbase &nbsp;
        <a href="https://console.cloud.tencent.com/tcb" target="_blank" rel="noopener noreferrer">
          控制台
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            className="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon>
          </svg>
        </a>
        ，在
        <a
          href={`https://console.cloud.tencent.com/tcb/env/setting?tab=loginConfig&envId=${envId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          “环境-&gt;环境设置-&gt;登录方式”
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            className="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon>
          </svg>
        </a>
        中，将“匿名登录”一栏打开，然后等待 1 分钟后刷新页面。
      </p>
      <p>
        <img
          src="https://main.qcloudimg.com/raw/f342f7b23513e12c2b06677a54a5efbc.png"
          alt="开启匿名登录"
        />
      </p>
    </>
  )
}

export default function Hello() {
  const app = getApp()
  const [isLoginSuccess, setLoginState] = useState(false)
  const [callFunctionResult, setCallFunctionResult] = useState('')
  const loginState = app.auth().hasLoginState()

  useEffect(() => {
    if (loginState) {
      setLoginState(true)
      return
    }

    const login = async () => {
      try {
        await app.auth({ persistence: 'local' }).anonymousAuthProvider().signIn()

        setLoginState(true)
      } catch (e) {
        if (e.message.includes('100007')) {
          setLoginState(false)
        }
        console.error(e)
        console.log(e.code)
      }
    }
    console.log('登录')
    login()
  }, [app, loginState])

  const callFunction = async () => {
    try {
      const res = await app.callFunction({
        name: 'helloworld',
        data: {
          foo: 'bar'
        },
        query: {},
        parse: true
      })
      setCallFunctionResult(JSON.stringify(res))
    } catch (e) {
      setCallFunctionResult(e.message)
    }
  }

  return (
    <div className="hello">
      <h1>欢迎使用云开发 CloudBase React App</h1>
      <div>
        {isLoginSuccess ? (
          <>
            <div>
              <h2>登录云开发</h2>
              <p>{loginState ? '已登录' : '未登录'}</p>
            </div>

            <h2>调用云函数</h2>
            <p>
              点击
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault()
                  callFunction()
                }}
              >
                调用 hello world 云函数
              </a>
            </p>
            <p>
              <b>云函数执行结果</b>
            </p>
            <p>{callFunctionResult}</p>
          </>
        ) : (
          <LoginFail />
        )}
      </div>
    </div>
  )
}
