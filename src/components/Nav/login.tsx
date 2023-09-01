import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '../ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { UserProfile } from '@/api/login/type'
import { useLogin } from '@/hooks/useLogin'

interface Props {
  setIsLogin: (isLogin: boolean) => void
  setProfile: (profile: UserProfile) => void
}

const Login: React.FC<Props> = (props) => {
  const { setIsLogin, setProfile } = props

  const {
    countdown,
    phone,
    verificationCode,
    qrImg,
    // isModalOpen,
    handleGetVerificationCode,
    setPhone,
    setVerificationCode,
    setIsModalOpen,
    verifyLogin,
    qrLogin
  } = useLogin(setIsLogin, setProfile)
  const ValueChange = (value: string) => {
    console.log(value)
    setIsModalOpen(true)
    qrLogin()
  }
  return (
    <>
      <div className="h-1/2">
        <Tabs
          defaultValue="captcha"
          className="w-full"
          onValueChange={(value) => ValueChange(value)}
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="captcha">短信验证码登录</TabsTrigger>
              <TabsTrigger value="loginQr">二维码登录</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="captcha" className="h-full">
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
          <TabsContent value="loginQr" className="h-full">
            <div className="flex justify-center">
              <img src={qrImg} alt="二维码" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <span className="text-xs font-light">
        为了安全起见目前仅支持短信验证码以及二维码进行登录，请放心的登录你的网易云账号
      </span>
    </>
  )
}
export default Login
