import Vue from 'vue'
import App from './app.vue'
import store from './store'
import 'font-awesome/css/font-awesome.css'
// import './assets/css/minimap.min.css'
const app = new Vue({
  store,
  ...App
})

app.$mount('#app')
