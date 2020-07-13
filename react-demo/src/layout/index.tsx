import React from 'react'
import { Layout, Menu, Card, Avatar } from 'antd'
import { useHistory } from 'react-router'
import { IRouteProps } from '@/routes/config'
import { config } from '@/config'
import './index.less'

const { Sider, Header, Content, Footer } = Layout

export interface ILayoutProps {
  menus: IRouteProps[]
}

export function MainLayout(props: React.PropsWithChildren<ILayoutProps>) {
  const history = useHistory()
  const { menus } = props

  const year = new Date().getFullYear()

  return (
    <div className="App">
      <Layout style={{ height: '100%' }}>
        <Header className="header flex">
          <div className="logo">
            <Avatar
              style={{ height: '40px', width: '40px' }}
              src={`${config.storageBaseUrl}/icon.png`}
            />
          </div>
          <div className="home">
            <a href="/">Home</a>
          </div>
        </Header>
        <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
          <Layout style={{ padding: '24px 0', flex: '1 1 auto', background: '#fff' }}>
            <Sider
              width={200}
              style={{
                background: '#fff'
              }}
            >
              <Menu
                mode="inline"
                onSelect={({ key }) => {
                  history.push(key as string)
                }}
              >
                {menus.map((menu) => (
                  <Menu.Item key={menu.path as string}>
                    <span className="nav-text">{menu.title}</span>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px' }}>
              <Card className="card" bordered={false}>
                <div className="card-content" style={{ overflow: 'auto' }}>
                  {props.children}
                </div>
              </Card>
            </Content>
          </Layout>
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          Copyright &copy; 腾讯云 - 云开发 2018 - {year}
        </Footer>
      </Layout>
    </div>
  )
}
