import { useEffect, useState } from 'react'
import {
  useLoginCellphone,
  useLoginQrCheck,
  useLoginQrCreate,
  useLoginQrKey,
  useLoginStatus
} from '@/api/login'
import { useCaptchaSent, useCaptchaVerify } from '@/api/captcha'
import { UserProfile } from '@/api/login/type'
import { useToast } from '@/components/ui/use-toast'

export const useLogin = (
  handleCloseModal: () => void,
  setIsLogin: (isLogin: boolean) => void,
  setProfile: (profile: UserProfile) => void
) => {
  const { toast } = useToast()
  const [countdown, setCountdown] = useState(0)
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [countdown])

  const [phone, setPhone] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const handleGetVerificationCode = async () => {
    const { data, message } = await useCaptchaSent(phone)
    if (data) {
      toast({
        title: '获取验证码',
        description: '已发送验证码到手机请查收'
      })
    } else {
      toast({
        title: '获取验证码',
        description: message
      })
    }
    setCountdown(60)
  }
  const verifyLogin = async () => {
    const { data } = await useCaptchaVerify(phone, verificationCode)
    if (data) {
      const { code, cookie } = await useLoginCellphone(phone, verificationCode)
      if (code == 200) {
        const { profile } = await useLoginStatus(cookie)
        setIsLogin(true)
        setProfile(profile)
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('cookie', cookie)
        toast({
          title: '登录',
          description: '授权登录成功'
        })
        handleCloseModal()
      }
    } else {
      toast({
        title: '登录',
        description: '验证码错误'
      })
    }
  }

  const [qrImg, setQrImg] = useState('')
  const qrLogin = async () => {
    const { unikey } = await useLoginQrKey()
    const { qrimg } = await useLoginQrCreate(unikey)
    setQrImg(qrimg)
    const timer = setInterval(async () => {
      const { code, cookie } = await useLoginQrCheck(unikey)
      if (code === 800) {
        toast({
          title: '登录',
          description: '二维码已过期，请重新获取'
        })
        clearInterval(timer)
      }
      if (code === 803) {
        clearInterval(timer)
        const { profile } = await useLoginStatus(cookie)
        setIsLogin(true)
        setProfile(profile)
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('cookie', cookie)
        toast({
          title: '登录',
          description: '授权登录成功'
        })
        handleCloseModal()
      }
    }, 3000)
  }

  return {
    countdown,
    phone,
    verificationCode,
    qrImg,
    handleGetVerificationCode,
    setPhone,
    setVerificationCode,
    verifyLogin,
    qrLogin
  }
}
