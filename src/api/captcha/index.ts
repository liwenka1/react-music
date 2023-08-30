import http from '@/utils/request'
import { CaptchaSent } from './type'

// 发送验证码
export const useCaptchaSent = async (phone: string) => {
  const data = await http.get<CaptchaSent>('/captcha/sent', {
    phone
  })
  return data
}

// 验证验证码
export const useCaptchaVerify = async (phone: string, captcha: string) => {
  const data = await http.get<CaptchaSent>('/captcha/verify', {
    phone,
    captcha
  })
  return data
}
