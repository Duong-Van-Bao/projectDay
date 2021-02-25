import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Particles from "particles.vue"
import { routes } from './routes'
import { store } from './store/store' 
// import 'expose?$!expose?jQuery!jquery'
import VueApexCharts from 'vue-apexcharts'


Vue.use(Particles)
Vue.use(VueRouter) 
Vue.use(VueApexCharts)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
require('./components/newsBirago/css/__fixMain.less');

Vue.component('apexchart', VueApexCharts)
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
