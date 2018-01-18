import { http } from '@/api/http.js'

export default {
  getList ({ commit, state }, data) {
    return http.post('/home/miner/list').then(res => res)
  }
}
