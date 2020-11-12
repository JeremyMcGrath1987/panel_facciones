import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import search from "./search";
import file from "./file";
import articlesList from "./articlesList";
import user from "./user";
import files from "./files";
import files2 from "./files2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    search,
    file,
    articlesList,
    user,
    files,
    files2
  }
});
