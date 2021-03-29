import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null
const isDev = process.env.NODE_ENV === 'development'

function render(props = {}) {
  const { container } = props

  instance = new Vue({
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (isDev || !window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
