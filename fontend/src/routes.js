import market from './components/market/Market.vue'
import Draw from './components/Draws/Draw.vue'
import Community from './components/community/Community.vue'
import Navhead from './components/nav/Navhead.vue'
import  Portfolit from './components/community/Portfolit.vue'
import Demoboolue from './components/Demoboolue.vue'
import Home from './components/Home.vue'
import New from './components/New.vue'
import Jquery from './components/Jquery.vue'
import EventInJquery from './components/EventInJquery.vue'
// import Jquery2 from './components/js/jquery.listtopie.min.js'

export const routes = [
     {path:'/', name: 'home', component:market},
     {path:'/draw', name: 'draw', component:Draw},
     {path:'/demo', name: 'demo', component:Demoboolue},
     {path:'/community', name: 'community', component:Community},
     {path:'/navhead', name: 'navhead', component:Navhead},
     {path:'/portfolit', name: 'portfolit', component:Portfolit},
     {path:'/home.html', name: 'home', component:Home},
     {path:'/new.html', name: 'new', component:New},
     {path:'/jquery.html', name: 'jquery', component:Jquery},
     {path:'/EventInJquery.html', name: 'EventInJquery', component:EventInJquery},
     // {path:'/Jquery2.html', name: 'Jquery2', component:Jquery2}
]