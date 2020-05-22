<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      点击查看
      <a
        href="https://docs.cloudbase.net/cloudbase-vue/introduce.html"
        target="_blank"
        rel="noopener"
        >云开发 Vue 插件</a
      >
      文档
    </p>

    <template v-if="isLoginSuccss">
      <LoginState v-slot="{ loginState }">
        <h2>登录云开发</h2>
        <p>{{ loginState ? "已登录" : "未登录" }}</p>
      </LoginState>

      <h2>调用云函数</h2>
      <p>
        点击
        <a href="javascript:;" @click="callFunction">调用 hello world 云函数</a>
      </p>
      <p><b>云函数执行结果</b></p>
      <p>{{ callFunctionResult }}</p>
    </template>
    <template v-else-if="isLoginSuccss === false">
      <h2>
        为了演示云开发功能，需要开启匿名登录
      </h2>
      <p>
        登录腾讯云 Cloudbase
        <a
          href="https://console.cloud.tencent.com/tcb"
          target="_blank"
          rel="noopener noreferrer"
          >控制台<svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon></svg></a
        >，在<a
          v-bind:href="
            `https://console.cloud.tencent.com/tcb/env/setting?tab=loginConfig&envId=${envId}`
          "
          target="_blank"
          rel="noopener noreferrer"
          >“环境-&gt;环境设置-&gt;登录方式”<svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon></svg></a
        >中，将“匿名登录”一栏打开，然后等待 1 分钟后刷新页面。
      </p>
      <p>
        <img
          src="https://main.qcloudimg.com/raw/f342f7b23513e12c2b06677a54a5efbc.png"
          alt="开启匿名登录"
        /></p
    ></template>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isLoginSuccss: null,
      envId: "",
      callFunctionResult: "",
    };
  },
  props: {
    msg: String,
  },
  async created() {
    this.envId = this.$cloudbase.config.env;
    // 以匿名登录为例
    try {
      await this.$cloudbase
        .auth({ persistence: "local" })
        .anonymousAuthProvider()
        .signIn();

      this.isLoginSuccss = true;
    } catch (e) {
      if (e.message.includes("100007")) {
        this.isLoginSuccss = false;
      }
      console.error(e);
      console.log(e.code);
    }
  },
  methods: {
    async callFunction() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "helloworld",
          data: {
            foo: "bar",
          },
        });
        this.callFunctionResult = res;
      } catch (e) {
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
