import market from './components/market/Market.vue'
import Draw from './components/Draws/Draw.vue'
import Community from './components/community/Community.vue'
import Navhead from './components/nav/Navhead.vue'
import Portfolit from './components/community/Portfolit.vue'
import Demoboolue from './components/Demoboolue.vue'
import Home from './components/Home.vue'
import New from './components/New.vue'
// import DroupDown from './components/demo/DroupDown.vue'
import Particles from './components/demo/Particles.vue'
import DemoJquery from './components/DemoJquery.vue'
import DemoDom from './components/DemoJavaScriptDomDroupDown.vue'
// import Jquery from './components/Jquery.vue'
// import EventInJquery from './components/EventInJquery.vue'
// import Jquery2 from './components/js/jquery.listtopie.min.js'
// import Apexchart from './components/Apexchart.vue'
import layOut from './components/newsBirago/LayOut.vue'
import LayoutDetails from'./components/newsBirago/LayoutDetails.vue'

export const routes = [
     {path:'/', name: 'home', component:market},
     {path:'/draw', name: 'draw', component:Draw},
     {path:'/demo', name: 'demo', component:Demoboolue},
     {path:'/Particles', name: 'demo', component:Particles},
     {path:'/community', name: 'community', component:Community},
     {path:'/navhead', name: 'navhead', component:Navhead},
     {path:'/portfolit', name: 'portfolit', component:Portfolit},
     {path:'/home.html', name: 'home', component:Home},
     {path:'/new.html', name: 'new', component:New},
     {path:'/demo', name: 'demo', component:DemoJquery},
     {path:'/demodom', name: 'demodom', component:DemoDom},
     {path:'/news', name: 'news', component:layOut},
     {path:'/news/:slug.:id.html',name:'newsdetails',component:LayoutDetails}
     // {path:'/jquery.html', name: 'jquery', component:Jquery},
     // {path:'/EventInJquery.html', name: 'EventInJquery', component:EventInJquery},
     // {path:'/Jquery2.html', name: 'Jquery2', component:Jquery2}
     // {path:'/apexchart.html', name: 'apexchart', component:Apexchart},
     // {path:'/droupdown.html', name: 'droupdown', component:DroupDown}
]