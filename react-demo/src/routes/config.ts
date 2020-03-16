import { RouteProps } from 'react-router'
import { Home, NoFoundPage, FunctionDemo, DatabaseDemo } from '../pages'

export interface IRouteProps extends RouteProps {
  menu?: boolean
  title?: string
}


export const appRoutes: IRouteProps[] = [
  {
    path: '/',
    component: Home
  },
  {
    title: '云函数',
    path: '/function',
    component: FunctionDemo,
    menu: true
  },
  {
    title: '数据库',
    path: '/db',
    component: DatabaseDemo,
    menu: true
  },
  {
    path: '**',
    component: NoFoundPage
  }
]
