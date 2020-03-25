import React, { useState } from 'react'
import { Skeleton } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { RenderRoutes, appRoutes } from './routes'
import { MainLayout } from './layout'
import 'antd/dist/antd.css'
import './App.less'

const menus = appRoutes.filter((item) => item.menu)

function App() {
  const [loading, setLoading] = useState(true)
  const loadScript = async () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://imgcache.qq.com/qcloud/tcbjs/1.5.0/tcb.js'
    document.head.appendChild(script)

    return new Promise((resolve) => {
      script.onload = () => {
        resolve()
      }
    })
  }

  loadScript().then(() => {
    setLoading(false)
  })

  return (
    <div className="App">
      <MainLayout menus={menus}>{loading ? <Skeleton active /> : RenderRoutes()}</MainLayout>
    </div>
  )
}

export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
