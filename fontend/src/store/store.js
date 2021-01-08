import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        result: 0,
        statusone: false,
        statustrue:false
    },
    getters: {   
        tenResult: state => {
            return state.result * 10;
        },
        nameResult: state => {
            return state.result + 'name product'
        }
    },
    mutations: {
        incrementOp(state, n) {
            state.result += n
        },
        statusButton(state){
           state.statusone = !state.statusone
        }
    }
});
