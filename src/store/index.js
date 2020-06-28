import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "@/assets/Data/extracted_info.json"
import results from "@/assets/Data/results.json"

export default new Vuex.Store({
  state: {
    allbooks:books["books"],
    SelectedBook : "",
    results : results
  },
  mutations: {
    selectedSearchBook(state, id){
      state.SelectedBook = id
    }
  },
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
    },
    getTodoById: (state) => (id) => {
      return state.results.find(result => result.id === id)
    },
    getTodoByIdBook: (state) => (id) => {
      return state.allbooks.find(book => book.id === id)
    }
  },
  
});
