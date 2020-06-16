import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "@/assets/Data/milestone3.json"

export default new Vuex.Store({
  state: {
    allbooks:books,
    books_german: null,
    books_english: null
  },
  mutations: {
    getEnglishBooks(){
      for (let [key, value] of Object.entries(this.books)) {
        console.log(key + " - " + value['language'])
      }
    }
  },
  actions: {},
  modules: {},
});
