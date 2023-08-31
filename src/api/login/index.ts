import http from '@/utils/request'
import {
  LoginCellphone,
  LoginQrCheck,
  LoginQrCreate,
  LoginQrKey,
  LoginStatus,
  Logout
} from './type'

// 手机登录
export const useLoginCellphone = async (phone: string, captcha: string) => {
  const data = await http.get<LoginCellphone>('/login/cellphone', {
    phone,
    captcha
  })
  return data
}

// 二维码 key 生成接口
export const useLoginQrKey = async () => {
  const { data } = await http.get<LoginQrKey>('/login/qr/key')
  return data
}

// 二维码生成接口
export const useLoginQrCreate = async (key: string) => {
  const { data } = await http.get<LoginQrCreate>('/login/qr/create', {
    key,
    qrimg: true
  })
  return data
}

// 二维码检测扫码状态接口
export const useLoginQrCheck = async (key: string) => {
  const data = await http.get<LoginQrCheck>('/login/qr/check', {
    key
  })
  return data
}

// 登录状态
export const useLoginStatus = async (cookie: string) => {
  const { data } = await http.get<LoginStatus>('/login/status', {
    cookie
  })
  return data
}

// 退出登录
export const useLogout = async () => {
  const data = await http.get<Logout>('/logout')
  return data
}
