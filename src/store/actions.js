import { http, token } from '@/api/http.js'
import qs from 'qs'
import { Toast } from 'mint-ui'
export default {
  login ({ commit, state }, data) {
    // return http.get(`/home/login/login?username=${data.username}&password=${data.password}`).then(res => res)
    return token.post('/home/login/login', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'top'
        })
      }
    )
  },
  getList ({ commit, state }, data) {
    return http.post('/home/miner/list', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'top'
        })
      }
    )
  },
  getDetail ({ commit, state }, data) {
    return http.post('/home/miner/detail', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'top'
        })
      }
    )
  },
  setPasd ({ commit, state }, data) {
    return http.post('/home/user/pwd', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'top'
        })
      }
    )
  },
  setRem ({ commit, state }, data) {
    return http.post('/home/miner/upd', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'top'
        })
      }
    )
  }
}
