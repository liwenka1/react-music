import http from '@/utils/request'

// 验证验证码
export const useLoginCellphone = async (phone: string, captcha: string) => {
  const data = await http.get('/login/cellphone', {
    phone,
    captcha
  })
  return data
}
