import React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import { appRoutes } from './config'
export * from './config'

function SwitchRoutes(appRoutes: RouteProps[]) {
  return (
    <Switch>
      {appRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact || true}
          strict={route.strict || false}
        />
      ))}
    </Switch>
  )
}

export function RenderRoutes() {
  return SwitchRoutes(appRoutes)
}
