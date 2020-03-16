import React from 'react'

export const DemoWrapper: React.SFC<{ title: string }> = (props) => {
  return (
    <div className="demo">
      <div className="margin-bottom-sm text-xs">{props.title}</div>
      <div className="demo-content">{props.children}</div>
    </div>
  )
}
