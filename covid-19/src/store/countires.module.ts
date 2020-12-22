const initialState = {
  countriesData: null,
  continentsData: null,
  countriesDetailData: null,
};
export const countries = {
  namespaced: true,
  state: initialState,
  actions: {
    setCountriesData(context, payload) {
      // console.log('setCountriesData');
      context.commit('setCountriesData', payload);
    },
    setContinentsData(context, payload) {
      // console.log('setContinentsData');
      context.commit('setContinentsData', payload);
    },
    setCountriesDetailData(context, payload) {
      context.commit('setCountriesDetailData', payload);
    },
  },
  mutations: {
    setCountriesData(state, payload) {
      state.countriesData = payload;
    },
    setContinentsData(state, payload) {
      state.continentsData = payload;
    },
    setCountriesDetailData(state, payload) {
      state.countriesDetailData = payload;
    },
  },
  getters: {
    getCountriesData: (state) => state.countriesData,
    getContinentsData: (state) => state.continentsData,
    getCountriesDetailData: (state) => state.countriesDetailData,
  },
};
