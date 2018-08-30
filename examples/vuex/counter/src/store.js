import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  getters: {
    isEvenOrOdd(state) {
      return state.count % 2 === 0 ? 'Even' : 'Odd'
    },
  }
})
