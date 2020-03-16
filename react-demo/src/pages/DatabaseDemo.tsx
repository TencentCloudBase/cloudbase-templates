import React, { useState } from 'react'
import { Button, List, message } from 'antd'
import { DemoWrapper } from '@/components'
import { getApp } from '@/utils'

export const DatabaseDemo: React.FC<{}> = () => {
  const app = getApp()
  const db = app.database()
  const collection = db.collection('demo_web')
  const [poem, setPoem] = useState('')
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])

  const dataOrigin = 'https://v1.jinrishici.com/all.json'

  const insertData = async () => {
    const res = await fetch(dataOrigin)
    const data = await res.json()
    setPoem(JSON.stringify(data))
    await collection.add(data)
    message.success('添加数据成功！')
  }

  const queryData = async () => {
    const res = await collection.get()
    const total = res.data?.length || 0
    setTotal(total)
    setList(res.data)
  }

  return (
    <div>
      <div className="text-center text-sm text-bold">数据库</div>
      <DemoWrapper title="数据库读">
        <div className="json flex flex-direction">
          <div className="operations padding-bottom">
            <Button type="primary" onClick={insertData}>
              新增数据
            </Button>
            <div className="padding-sm">{poem}</div>
          </div>
        </div>
      </DemoWrapper>

      <DemoWrapper title="数据库读">
        <div className="json flex flex-direction">
          <div className="operations padding-bottom-sm">
            <Button type="primary" onClick={queryData}>
              获取数据
            </Button>
          </div>
          <List
            style={{ height: '300px', overflowY: 'scroll' }}
            header={<div className="padding-sm">总计数量：{total}</div>}
            bordered
            dataSource={list}
            renderItem={(item: any) => (
              <List.Item>
                <div style={{ width: '100%' }}>
                  <h1 className="text-center">{item.origin}</h1>
                  <p className="text-center">{item.content}</p>
                  <p className="text-right">{item.author}</p>
                </div>
              </List.Item>
            )}
          />
        </div>
      </DemoWrapper>
    </div>
  )
}
