"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    result: 0,
    statusone: false,
    statustrue: false
  },
  getters: {
    tenResult: function tenResult(state) {
      return state.result * 10;
    },
    nameResult: function nameResult(state) {
      return state.result + 'name product';
    }
  },
  mutations: {
    incrementOp: function incrementOp(state, n) {
      state.result += n;
    },
    statusButton: function statusButton(state) {
      state.statusone = !state.statusone;
    }
  }
});
exports.store = store;