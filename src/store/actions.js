import { http, token } from '@/api/http.js'
import qs from 'qs'
export default {
  login ({ commit, state }, data) {
    // return http.get(`/home/login/login?username=${data.username}&password=${data.password}`).then(res => res)
    return token.post('/home/login/login', qs.stringify(data)).then(res => res)
  },
  getList ({ commit, state }, data) {
    return http.post('/home/miner/list', qs.stringify(data)).then(res => res)
  },
  getDetail ({ commit, state }, data) {
    return http.post('/home/miner/detail', qs.stringify(data)).then(res => res)
  },
  setPasd ({ commit, state }, data) {
    return http.post('/home/user/pwd', qs.stringify(data)).then(res => res)
  },
  setRem ({ commit, state }, data) {
    return http.post('/home/miner/upd', qs.stringify(data)).then(res => res)
  }
}
