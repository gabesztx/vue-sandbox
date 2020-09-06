const state = () => ({
  isLoading: false,
});

// getters
const getters = {
  getIsLoading:(state) => {
    return state.isLoading;
  },
};

// actions
const actions = {
  isLoadingAction({ commit, state }, payload) {
    commit('setIsdLoading');
  }
};

// mutations
const mutations = {
  setIsdLoading(state, payload) {
    state.isLoading = !state.isLoading
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
