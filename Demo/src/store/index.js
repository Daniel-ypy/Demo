import Vue from "vue"
import Vuex from "vuex"
import checkItem from "../store/modules/checkItem"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checkItem
  }})
