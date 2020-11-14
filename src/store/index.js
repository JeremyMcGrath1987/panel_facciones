import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import user from "./user";
import employees from "./employees";
import citizen from "./citizen"
import faction from "./faction"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    user,
    employees,
    citizen,
    faction
  }
});
