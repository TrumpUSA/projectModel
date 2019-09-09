import axios from 'axios'
import {message} from 'antd'
import api from '../config'

//可以拿到 不同环境 需要在
// webpack.config不同配置文件中设置
// const env = process.env.NODE_ENV

//可以 确定前缀地址
// 在这个框架里面可以配置 packjson 里面的 proxy 来确定代理
// 正式开发的时候 去掉 baseURL

// const baseURL = 'http://139.224.131.131:8080'
// const baseURL = 'http://192.168.43.247:8080'
// const baseURL = 'http://127.0.0.1:8080'
// const baseURL = 'http://192.168.8.105:8080'

export default function ask(name, opt = {}) {

  //取传进来的用户信息
  let {
    headers,
    data,
    params,
    responseType
  } = opt
  /**
   * 获取接口信息
   * 如果后期涉及到权限
   * 可以在接口信息里面
   * 设定 并取到
   */
  let {
    method,
    url
  } = api[name]

  let timeout = 6000 * 10  // 超时时间

  let instance = axios.create({
    // baseURL,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false
  })

  // instance.interceptors.request.use(function(request) {
  //     return request;
  // })

  // 响应中间处理层
  instance.interceptors.response.use(function (response) {
    // 请求成功后 处理在此
    //token 过期处理
    if (response.data.code === 10001) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userInfo');
      response.data.msg = '登录过期，请重新登录';
      window.location.href = '/login';
    }
    return response.data
  }, function (err) {
    // 请求失败 错误在此
    if (`Error: timeout of ${timeout}ms exceeded` === err.toString()) {
      message.error('请求超时');
    }
    return Promise.reject(err)
  });
  url = `/api${url}?t=${new Date().getTime()}`;
  let token = window.localStorage.getItem("token");
  if (token) {
    headers = Object.assign(headers || {}, {"token": token});
  }
  let promise = instance.request({
    responseType,
    url,
    method,
    headers,
    params,
    data,
    timeout
  })

  return promise
}

