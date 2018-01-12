import { http } from '@/api/http'
export default {
  state: {
    null: null
  },
  getters: {
    null: state => state.null
  },
  mutation: {
    SETNULL (state, data) {
      state.null = data
    }
  },
  actions: {
    getState ({commit, state}) {
      console.log(http)
    }
  }
}
