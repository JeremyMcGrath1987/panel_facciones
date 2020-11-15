import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import employees from "./employees";
import faction from "./faction"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    employees,
    faction
  }
});
