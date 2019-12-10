import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter';
import doubleCounter from './modules/doubleCounter';
import totalCounter from './modules/totalCounter';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter
  }
});

store.dispatch('totalCounter/setModules',
    ['counterA', 'counterB', 'doubleCounterA', 'doubleCounterB']
);

export default store;
