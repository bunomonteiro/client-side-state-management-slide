import Vue from 'vue'
import Vuex from 'vuex'

import todoModule from './todoModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: todoModule,
  }
})
