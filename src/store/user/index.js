export default {
  namespaced: true,
  state: {
    data:{name: "Marcos Duarte",
  id: "8465972618F"}
  },
  actions: {
    SETUSERDATA: (context, user) => {
      context.commit("setUserData", user);
    }
  },
  mutations: {
    setUserData: (state, user) => {
      state.data = user;
    }
  }
};
