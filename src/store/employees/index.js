export default {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    SETEMPLOYEES: (context, info) => {
      context.commit("setEmployees", info);
    },
    ASCENDEMPLOYEE: (context, info) => {
      context.commit("ascendEmployee", info);
    },
    DESCENDEMPLOYEE: (context, info) => {
      context.commit("descendEmployee", info);
    },
    DISMISSEMPLOYEE: (context, index) => {
      context.commit("dismissEmployee", index);
    }
  },
  mutations: {
    setEmployees: (state, info) => {
      state.data = info;
    },
    ascendEmployee: (state, info) => {
      const search = state.data[info.index];
      search.rank = info.rank;
    },
    descendEmployee: (state, info) => {
      const search = state.data[info.index];
      search.rank = info.rank;
    },
    dismissEmployee: (state, index) => {
      state.data.splice(index, 1);

    }

  }
};