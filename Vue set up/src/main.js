import Vue from 'vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './scss/index.scss'
import App from './App.vue'

import router from './routes/index.js'
new Vue({
  el: '#app',
  render: c => c(App),
  router
})