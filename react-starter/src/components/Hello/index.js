import React, { useState } from "react";
import { getApp } from "../../tcb";
import "./index.css";

export default function Hello() {
  const app = getApp();
  const [callFunctionResult, setCallFunctionResult] = useState("");

  const callFunction = async () => {
    try {
      const res = await app.callFunction({
        name: "helloworld",
        data: {
          foo: "bar",
        },
      });
      setCallFunctionResult(JSON.stringify(res));
    } catch (e) {
      setCallFunctionResult(e.message);
    }
  };

  return (
    <div className="hello">
      <h1>欢迎使用云开发 CloudBase React App</h1>
      <div>
        <div>
          <h2>
            通过
            <a
              href="https://cloud.tencent.com/document/product/876/46177"
              target="_blank"
            >
              未登录 + 安全规则
            </a>
            的方式调用云开发
          </h2>
        </div>

        <h2>调用云函数</h2>
        <p>
          点击
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              callFunction();
            }}
          >
            调用 hello world 云函数
          </a>
        </p>
        <p>
          <b>云函数执行结果</b>
        </p>
        <p>{callFunctionResult}</p>
      </div>
      <h2>本示例 Github 源码地址</h2>
      <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/react-starter">
        https://github.com/TencentCloudBase/cloudbase-templates/tree/master/react-starter
      </a>
      <h2>
        开发部署工具: CloudBase Framework
        <a href="https://github.com/TencentCloudBase/cloudbase-framework">
          <img
            alt="CloudBase Framework"
            src="https://img.shields.io/github/stars/TencentCloudBase/cloudbase-framework?style=social"
          />
        </a>
      </h2>
      <a
        href="https://github.com/TencentCloudBase/cloudbase-framework"
        title="CloudBase Framework: 云开发前后端一体化部署工具"
      >
        <img
          width="420"
          alt="CloudBase Framework"
          src="https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png"
        />
      </a>
    </div>
  );
}
