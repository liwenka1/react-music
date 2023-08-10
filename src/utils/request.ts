import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service
