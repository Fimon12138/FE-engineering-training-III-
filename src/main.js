import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import './plugins/vue-material.js'
import './assets/global.less'
import './assets/fonts/index.less'

Vue.config.productionTip = false

// TODO
axios.defaults.baseURL = 'http://'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
