<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        [ CloudBase + Nuxt ] Fullstack APP
      </h1>
      <h2 class="subtitle">
        云开发 CloudBase + Nuxt SSR 全栈应用，包含前端网站 + 云开发函数
      </h2>
      <div class="links">
        <a href="https://cloudbase.net/" target="_blank" class="button--green">
          云开发 CloudBase 文档
        </a>
        <a
          href="https://docs.cloudbase.net/cloudbase-vue/introduce.html"
          target="_blank"
          rel="noopener"
          class="button--green"
          >云开发 Vue 插件</a
        >
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Nuxt 文档
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>

      <client-only>
        <template v-if="isLoginSuccss">
          <LoginState v-slot="{ loginState }">
            <h2>登录云开发</h2>
            <p>{{ loginState ? "已登录" : "未登录" }}</p>
          </LoginState>

          <h2>调用云函数</h2>
          <p>
            点击
            <a href="javascript:;" @click="callFunction"
              >调用 nuxt-ssr-echo 云函数</a
            >
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
              class="links"
              >控制台</a
            >，在<a
              v-bind:href="
                `https://console.cloud.tencent.com/tcb/env/setting?tab=loginConfig&envId=${envId}`
              "
              class="links"
              target="_blank"
              rel="noopener noreferrer"
              >环境-&gt;环境设置-&gt;登录方式</a
            >
            中，将“匿名登录”一栏打开，然后等待 1 分钟后刷新页面。
          </p>
          <p>
            <img
              src="https://main.qcloudimg.com/raw/f342f7b23513e12c2b06677a54a5efbc.png"
              alt="开启匿名登录"
            /></p
        ></template>
      </client-only>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  data() {
    return {
      isLoginSuccss: null,
      envId: "",
      callFunctionResult: ""
    };
  },
  async mounted() {
    this.envId = this.$cloudbase.config.env;
    // 以匿名登录为例
    try {
      await this.$cloudbase
        .auth({ persistence: "local" })
        .anonymousAuthProvider()
        .signIn();

      this.isLoginSuccss = true;
    } catch (e) {
      this.isLoginSuccss = false;
      console.error(e);
      console.log(e.code);
    }
  },
  methods: {
    async callFunction() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "nuxt-ssr-echo",
          data: {
            foo: "bar"
          }
        });
        this.callFunctionResult = res;
      } catch (e) {
        this.callFunctionResult = e.message;
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links a {
  margin-bottom: 8px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 400;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

h2,
p {
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

h2 {
  padding: 20px;
}

a {
  color: #3b8070;
}
</style>
