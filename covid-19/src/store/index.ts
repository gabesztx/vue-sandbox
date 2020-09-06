import Vue from 'vue';
import Vuex from 'vuex';
import CovidDataModule from '@/store/modules/covid-data.module';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    covidData: CovidDataModule,
  },
});
export const useStore = () => store

// const { useState } = createNamespacedHelpers('covid');
// export const states = {
//   covid: useState(['loading', 'allItems']),
// };

/*plugins: [
  persistence.plugin,
],*/
// import VuexPersistence from 'vuex-persist';
/*const persistence = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ['auth'],
});*/
