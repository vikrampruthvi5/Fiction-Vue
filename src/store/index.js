import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "@/assets/Data/extracted_info.json"

export default new Vuex.Store({
  state: {
    allbooks:books["books"],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    germanBooks: state => {
      return state.allbooks.filter(book => {
        if(book.language==="de"){
          return true;
        }
        else{
          return false;
        }
      })
    },
    englishBooks: state => {
      return state.allbooks.filter(book => {
        if(book.language==="en"){
          return true;
        }
        else{
          return false;
        }
      })
    }
  },
  
});
