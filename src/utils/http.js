import axios from 'axios'
import {startLoading, endLoading} from './loading'
import {Message} from 'element-ui'

let err = () => {
  Message({
    message: '出错了',
    type: 'warning',
    duration: 3000,
    center: true
  })
}

let http = axios.create({
  baseURL: 'http://xxxxxxxxxxxx',
  timeout: 5000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
  transformRequest: [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
  // Content-Type: application/x-www-form-urlencoded; charset=UTF-8
})

http.interceptors.request.use(function (config) {
  startLoading()
  return config
}, function (error) {
  endLoading()
  err()
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
  endLoading()
  return response
}, function (error) {
  endLoading()
  err()
  return Promise.reject(error)
})

export default http
