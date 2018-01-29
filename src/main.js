// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import MintUI from 'mint-ui'
import { http2 } from './api/http'
import 'mint-ui/lib/style.css'
import './global.css'
import App from './App'
import './utils/rem.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$http2 = http2
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
