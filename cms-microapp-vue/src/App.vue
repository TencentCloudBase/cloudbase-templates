<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="CloudBase CMS 微应用" />
    <button @click="callFunction">
      调用云函数
    </button>
    <p>调用结果：{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return { result: '' }
  },
  methods: {
    callFunction() {
      window.cloudbase
        .callFunction({
          name: 'tcb-ext-cms-service',
          data: {
            options: { sort: {}, filter: {}, pageSize: 10, fuzzyFilter: {}, page: 1 },
            resource: 'fsd',
            action: 'getMany',
          },
        })
        .then((ret) => (this.result = JSON.stringify(ret)))
        .catch((ret) => (this.result = JSON.stringify(ret)))
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
