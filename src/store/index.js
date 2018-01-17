import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  actions,
  mutations,
  state: {
    isLogin: false,
    iphone: '',
    newsNumber: 5
  },
  modules: {
    app
  }
})

export default store
