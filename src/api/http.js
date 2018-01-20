import axios from 'axios'
import { logout } from '@/utils/index'
import { Toast } from 'mint-ui'
// import store from '../store'
import qs from 'qs'
const http = axios.create({
  timeout: 10000,
  baseURL: 'http://47.91.249.184',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
const token = axios.create({
  timeout: 10000,
  baseURL: 'http://47.91.249.184',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export const reqResolve = config => {
  if (config.method === 'post') {
    const token = localStorage.getItem('token')
    let data = qs.parse(config.data)
    config.data = qs.stringify({
      token: token,
      ...data
    })
  } else if (config.method === 'get') {
    config.params = {
      token: token,
      ...config.params
    }
  }
  return config
}
export const reqReject = error => {
  console.error(error)
  return Promise.reject(error)
}
export const resResolve = response => {
  let code = +response.data.code
  if (code === 500) {
    Toast({
      message: response.data.message,
      position: 'top'
    })
    if (response.data.message === '请先登录' || response.data.message.indexOf('失效') !== -1) {
      setTimeout(() => {
        logout()
      }, 800)
    }
    return
  }
  return response.data
}
export const resReject = error => {
  Toast({
    message: '请求错误',
    position: 'top'
  })
  return Promise.reject(error)
}
http.interceptors.request.use(reqResolve, reqReject)
http.interceptors.response.use(resResolve)

export { http, token }
