"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Market = _interopRequireDefault(require("./components/market/Market.vue"));

var _Draw = _interopRequireDefault(require("./components/Draws/Draw.vue"));

var _Community = _interopRequireDefault(require("./components/community/Community.vue"));

var _Navhead = _interopRequireDefault(require("./components/nav/Navhead.vue"));

var _Portfolit = _interopRequireDefault(require("./components/community/Portfolit.vue"));

var _Demoboolue = _interopRequireDefault(require("./components/Demoboolue.vue"));

var _Home = _interopRequireDefault(require("./components/Home.vue"));

var _New = _interopRequireDefault(require("./components/New.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Jquery from './components/Jquery.vue'
// import EventInJquery from './components/EventInJquery.vue'
// import Jquery2 from './components/js/jquery.listtopie.min.js'
var routes = [{
  path: '/',
  name: 'home',
  component: _Market["default"]
}, {
  path: '/draw',
  name: 'draw',
  component: _Draw["default"]
}, {
  path: '/demo',
  name: 'demo',
  component: _Demoboolue["default"]
}, {
  path: '/community',
  name: 'community',
  component: _Community["default"]
}, {
  path: '/navhead',
  name: 'navhead',
  component: _Navhead["default"]
}, {
  path: '/portfolit',
  name: 'portfolit',
  component: _Portfolit["default"]
}, {
  path: '/home.html',
  name: 'home',
  component: _Home["default"]
}, {
  path: '/new.html',
  name: 'new',
  component: _New["default"]
} // {path:'/jquery.html', name: 'jquery', component:Jquery},
// {path:'/EventInJquery.html', name: 'EventInJquery', component:EventInJquery},
// {path:'/Jquery2.html', name: 'Jquery2', component:Jquery2}
];
exports.routes = routes;