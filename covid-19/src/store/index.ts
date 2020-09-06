import Vue from 'vue';
import Vuex from 'vuex';
import covid from './modules/covid';

Vue.use(Vuex);

export default new Vuex.Store({
  /*state: {
    ...covid.state,
  },
  mutations: {
    ...covid.mutations,
  },
  actions: {
    ...covid.actions,
  },
  getters: {
    ...covid.getters,
  },*/
  modules: {
    covid,
  },
});
