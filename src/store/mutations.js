export default {
  GET_TOKEN_STORAGE (state) {
    state.isLogin = !!localStorage.getItem('token')
  },
  SET_TOKEN_STORAGE (state, data) {
    localStorage.setItem('token', data)
    state.isLogin = localStorage.getItem('token', data)
  },
  SET_IPHONE (state, data) {
    state.iphone = data
    localStorage.setItem('miningIphone', data)
  },
  SET_NEWSNUMBER (state, data) {
    state.newsNumber = data
  },
  SET_SERCH (state, data) {
    state.serch = data
  }
}
