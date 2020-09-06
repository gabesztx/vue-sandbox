import { getAllGlobalData } from '@/services/covid-data.service';

export default {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    setCount(state) {
      state.counter++;
    },
    removeCount(state) {
      state.counter--;
    },
  },
  getters: {
    getCount(state) {
      return state.counter;
    },
  },
  actions: {},
};

/*
import { getAllGlobalData } from '@/services/covid-data.service';

export default {
  namespaced: true,
  state: {
    allItems: [],
    loading: false,
  },
  mutations: {
    setAllItems(state, payload) {
      state.allItems = payload;
    },
    removeAllItems(state) {
      state.allItems = [];
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
  /!*  getItems(state) {
      return state.allItems;
    },*!/
  },
  actions: {
    setEmptyItems({ commit }){
      commit('removeAllItems')
    },
    setLoading({ commit }, payload) {
      commit('setLoading', payload);
    },
    async getAllItems(context, payload) {
      try {
        const response = await getAllGlobalData();
        context.commit('setAllItems', response.data.data);
      } catch (err) {
        // context.commit('setError', err.response?.data?.error || 'Server Error');
      }
    },
  },
};
*/
