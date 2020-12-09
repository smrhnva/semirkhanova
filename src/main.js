import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Main from './components/main.vue'
import Cars from './components/cars.vue'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {path: '/main', component: Main},
    {path: '/cars', component: Cars}
  ],
  linkActiveClass:'active'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
