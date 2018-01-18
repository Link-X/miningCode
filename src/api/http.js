import axios from 'axios'
import { logout } from '@/utils/index'
import { Toast } from 'mint-ui'
// import store from '../store'

// /ams-api/auth /ams-api/system
const http = axios.create({
  timeout: 10000,
  baseURL: 'http://47.91.249.184',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request 拦截器
http.interceptors.request.use(config => {
  // config.headers['token'] = store.getters.token
  return config
}, Promise.reject)

// response 拦截器
http.interceptors.response.use(response => {
  let data = response
  if (data.code === '200') {
    return data.data
  }
  if (data.code === 6001) {
    Toast({
      title: '登录失效',
      message: data.msg,
      position: 'top',
      iconClass: ''
    })
    logout()
    return
  }
  Toast({
    title: '请求错误',
    message: data.msg,
    position: 'top',
    iconClass: ''
  })
  return Promise.reject(data)
}, error => {
  console.log('err' + error.message)
  Toast({
    title: '请求错误',
    message: error.message,
    position: 'top',
    iconClass: ''
  })
  return Promise.reject(error)
})

export { http }
