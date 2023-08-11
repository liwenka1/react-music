import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  maxBodyLength: 5 * 1024 * 1024,
  withCredentials: true,
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.params = {
      ...config.params,
      t: Date.now()
    }
    return config
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
)

interface Http {
  get<T>(url: string, params?: unknown): Promise<T>

  post<T>(url: string, params?: unknown): Promise<T>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  }
}

// 导出 axios 实例
export default http
