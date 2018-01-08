import axios from 'axios'
import qs from 'qs'
import store from '@/store'

export const $CORS_METHODS = ['post', 'put']

const _DEFAULT_ = '_default_'
let apis = {}

const makeApi = (key, axiosOption, jwtFlag) => {
  if (apis[key]) {
    return apis[key]
  }

  let api = axios.create(axiosOption)
  if (jwtFlag) {
    api.interceptors.request.use(config => {
      console.log(`CORS:${config.method}->${config.url}`)
      let {_apiToken, _apiTokenTimestamp} = store.state
      if (config.needAuth) {
        config.headers.common['X-Api-Token'] = _apiToken
        config.headers.common['X-Custom-TS'] = _apiTokenTimestamp
      }
      if ($CORS_METHODS.includes(config.method)) {
        config.data = qs.stringify(config.data)
        // console.log(`data:${config.data}`)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      console.log(`config=>`, config)
      return config
    }, error => {
      console.error(error)
      return Promise.reject(error)
    })

    api.interceptors.response.use(res => {
      if (res.config) {
        const url = res.config.url.toLowerCase()
        if (res.headers.parse !== 'no-parse') {
          if (!res.data.success) {
            let error = new Error(`业务请求失败:${res.data.msg}`)
            console.error(error)
            return Promise.reject(error)
          } else {
            return res.data.ret || res.data.rows
          }
        } else {
          console.log('---no parse---', url)
        }
      }
      return res
    }, error => {
      console.error('>>>>>', error)
      if (error.response.status >= 500) {
        // 服务器内部错误
      } else if (error.response.status === 401) {
        // 没有认证,跳转到login
      } else {
        console.log('err res status:', error.response.status)
      }
      return Promise.reject(error)
    })
  }
  apis[key] = api
  return api
}

export const api = (key, {axiosOption, jwtFlag = false}) => {
  return makeApi(key, axiosOption, jwtFlag)
}
console.log('http API_BASE_URL=> _default_:', process.env.CONFIG.API_BASE_URL)

makeApi(_DEFAULT_, {
  baseURL: process.env.CONFIG.API_BASE_URL,
  timeout: 20000,
  withCredentials: false, // session-support
  validateStatus: function (status) {
    return status >= 200 && status < 500
  }
}, true)

export default apis[_DEFAULT_]
