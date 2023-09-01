import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ModeToggle } from '../mode-toggle'
import Login from './login'
import { Button } from '../ui/button'
import { useLogin } from '@/hooks/useLogin'

const User: React.FC = () => {
  const {
    isLogin,
    profile,
    handleLogoutClick,
    countdown,
    phone,
    verificationCode,
    qrImg,
    isModalOpen,
    handleGetVerificationCode,
    setPhone,
    setVerificationCode,
    setIsModalOpen,
    verifyLogin
  } = useLogin()

  return (
    <>
      <div className="flex items-center space-x-3 sm:space-x-6 pr-4">
        {!isLogin && (
          <div className="flex items-center">
            <Avatar className="w-6 h-6 rounded-full object-cover cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger
                className="ml-4 cursor-pointer text-xs font-light"
                onClick={() => setIsModalOpen(true)}
              >
                点我登录
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>登录</DialogTitle>
                </DialogHeader>
                <Login
                  countdown={countdown}
                  phone={phone}
                  verificationCode={verificationCode}
                  qrImg={qrImg}
                  handleGetVerificationCode={handleGetVerificationCode}
                  setPhone={setPhone}
                  setVerificationCode={setVerificationCode}
                  setIsModalOpen={setIsModalOpen}
                  verifyLogin={verifyLogin}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
        {isLogin && (
          <div className="flex items-center">
            <Avatar className="w-6 h-6 rounded-full object-cover cursor-pointer">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Dialog>
              <DialogTrigger className="ml-4 cursor-pointer text-xs font-light">
                退出登录
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>退出登录</DialogTitle>
                </DialogHeader>
                <DialogDescription>确定要退出登录吗?</DialogDescription>
                <DialogTrigger>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="secondary">取消</Button>
                    <Button onClick={handleLogoutClick}>确定</Button>
                  </div>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        )}
        <ModeToggle />
      </div>
    </>
  )
}

export default User
