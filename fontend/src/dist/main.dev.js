"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _App = _interopRequireDefault(require("./App.vue"));

var _routes = require("./routes");

var _store = require("./store/store");

var _vueApexcharts = _interopRequireDefault(require("vue-apexcharts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueApexcharts["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].component('apexchart', _vueApexcharts["default"]);

var router = new _vueRouter["default"]({
  routes: _routes.routes
});
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: router,
  store: _store.store
}).$mount('#app');