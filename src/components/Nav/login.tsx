import SvgIcon from '../SvgIcon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '../ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useCaptchaSent, useCaptchaVerify } from '@/api/captcha'
import {
  useLoginCellphone,
  useLoginQrCheck,
  useLoginQrCreate,
  useLoginQrKey,
  useLoginStatus
} from '@/api/login'
import { UserProfile } from '@/api/login/type'

interface Props {
  handleCloseModal: () => void
  setIsLogin: (isLogin: boolean) => void
  setProfile: (profile: UserProfile) => void
}

const Login: React.FC<Props> = (props) => {
  const { handleCloseModal, setIsLogin, setProfile } = props
  const { toast } = useToast()
  const [countdown, setCountdown] = useState(0)
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
          description: '二维码已过期,请重新获取'
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="w-1/4 h-1/2 bg-background p-4 rounded-md relative">
        <div className="m-10">
          <Tabs defaultValue="captcha" className="w-full">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="captcha">短信验证码登录</TabsTrigger>
                <TabsTrigger value="loginQr" onClick={qrLogin}>
                  二维码登录
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="captcha">
              <div className="space-y-4">
                <Label>手机号</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-4 mt-4">
                <Label>验证码</Label>
                <Input
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button
                  className="col-span-1"
                  disabled={countdown > 0}
                  onClick={handleGetVerificationCode}
                >
                  {countdown > 0 ? `重新发送(${countdown}s)` : '获取验证码'}
                </Button>
                <Button className="col-span-1" onClick={verifyLogin}>
                  登录
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="loginQr">
              <div className="flex justify-center mt-10">
                <img src={qrImg} alt="二维码" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <span className="text-xs font-light absolute bottom-10 mx-10">
          为了安全起见目前仅支持短信验证码以及二维码进行登录，请放心的登录你的网易云账号
        </span>
        <SvgIcon
          name="x-mark"
          className="svg-icon absolute top-5 right-5"
          onClick={handleCloseModal}
        />
      </div>
    </div>
  )
}
export default Login
