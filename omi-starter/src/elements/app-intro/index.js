import { define, WeElement } from 'omi'
import style from './_index.css'

define('app-intro', class extends WeElement {
  css() {
    return (
      style +
      `
    code{
      color: ${Math.random() > 0.5 ? 'red' : 'blue'}
    }`
    )
  }

  static propTypes = {
    msg: String,
  }

  render(props) {
    return (
      <>
        <p class="app-intro">
          <p>{props.msg}</p>
          <h2>本示例 Github 源码地址</h2>
          <a href="https://gitee.com/TencentCloudBase/cloudbase-templates/tree/gitee/omi-starter">
            omi-starter
          </a>
          <h2>
            开发部署工具: CloudBase Framework
            <a href="https://gitee.com/TencentCloudBase/cloudbase-framework">
              <img
                alt="CloudBase Framework"
                src="https://img.shields.io/github/stars/TencentCloudBase/cloudbase-framework?style=social"
              />
            </a>
          </h2>
          <a
            href="https://gitee.com/TencentCloudBase/cloudbase-framework"
            title="CloudBase Framework: 云开发前后端一体化部署工具"
          >
            <img
              width="420"
              src="https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png"
            ></img>
          </a>
        </p>
      </>
    )
  }
})
