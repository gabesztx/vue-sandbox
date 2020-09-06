import Vue from 'vue';
import Vuex from 'vuex';
import CovidModule from './modules/CovidModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    covid: CovidModule,
  },
});

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
