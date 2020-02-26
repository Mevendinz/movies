import Vue from "vue";
import Vuex from "vuex";

import movies from "../data/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies
  },
  mutations: {},
  actions: {},
  modules: {}
});
