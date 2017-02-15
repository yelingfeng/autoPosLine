import Vue from 'vue'
import App from './app.vue'
import store from './store'
import 'font-awesome/css/font-awesome.css'
const app = new Vue({
  store,
  ...App
})

app.$mount('#app')