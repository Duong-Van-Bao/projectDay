import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store' 
// import 'expose?$!expose?jQuery!jquery'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueRouter) 
Vue.use(VueApexCharts)

Vue.config.productionTip = false

Vue.component('apexchart', VueApexCharts)
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
