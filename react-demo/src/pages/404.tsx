import { Result } from 'antd'
import React from 'react'

export const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<span>Back Home</span>}
  />
)

