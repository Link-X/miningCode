import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
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
