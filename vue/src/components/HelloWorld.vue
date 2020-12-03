<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      通过
      <a href="https://cloud.tencent.com/document/product/876/46177" target="_blank">未登录 + 安全规则</a>
      的方式调用云开发
    </h2>
    <p>
      点击查看
      <a
        href="https://docs.cloudbase.net/cloudbase-vue/introduce.html"
        target="_blank"
        rel="noopener"
      >云开发 Vue 插件</a>
      文档
    </p>

    <template>
      <h2>调用云函数</h2>
      <p>
        点击
        <a href="javascript:;" @click="callFunction">调用 hello world 云函数</a>
      </p>
      <p>
        <b>云函数执行结果</b>
      </p>
      <p>{{ callFunctionResult }}</p>
    </template>

    <h2>本示例 Github 源码地址：</h2>
    <a
      href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/vue"
    >https://github.com/TencentCloudBase/cloudbase-templates/tree/master/vue</a>
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
      <img width="420" src="https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      envId: "",
      callFunctionResult: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async callFunction() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "vue-echo",
          data: {
            foo: "bar",
          },
        });
        this.callFunctionResult = res;
      } catch (e) {
        console.error(e)
        this.callFunctionResult = e.message;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .hello {
    max-width: 500px;
    margin: 0 auto;
    word-break: break-all;
  }
</style>
