import { http } from '@/api/http.js'

export default {
  getList ({ commit, state }, data) {
    return http.get('/home/miner/list').then(res => res)
  }
}
