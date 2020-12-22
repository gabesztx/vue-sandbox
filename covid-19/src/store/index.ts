import Vue from 'vue';
import Vuex from 'vuex';
import { countries } from '@/store/countires.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
  },
});
