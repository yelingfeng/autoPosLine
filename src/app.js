import Vue from 'vue'
import App from './app.vue'
import store from './store'


const app = new Vue({
  store,
  ...App
})

app.$mount('#app')