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
import { useEffect, useState } from 'react'
import Login from './login'
import { useLoginStatus, useLogout } from '@/api/login'
import { UserProfile } from '@/api/login/type'
import { Button } from '../ui/button'

const User: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const [isLogin, setIsLogin] = useState(false)
  const [profile, setProfile] = useState({} as UserProfile)
  const loginStatus = async () => {
    const cookie = localStorage.getItem('cookie')
    if (cookie) {
      const { profile } = await useLoginStatus(cookie)
      localStorage.setItem('profile', JSON.stringify(profile))
      setIsLogin(true)
      setProfile(profile)
    }
  }
  useEffect(() => {
    loginStatus()
  }, [])
  const handleLogoutClick = async () => {
    const { code } = await useLogout()
    if (code == 200) {
      localStorage.removeItem('cookie')
      localStorage.removeItem('profile')
      setIsLogin(false)
      setProfile({} as UserProfile)
    }
  }

  return (
    <>
      <div className="flex items-center space-x-3 sm:space-x-6 pr-4">
        {!isLogin && (
          <div className="flex items-center">
            <Avatar className="w-6 h-6 rounded-full object-cover cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span
              className="ml-4 cursor-pointer text-xs font-light"
              onClick={handleLoginClick}
            >
              点我登录
            </span>
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
                  <DialogDescription>确定要退出登录吗?</DialogDescription>
                </DialogHeader>
                <DialogTrigger>
                  <Button type="submit" onClick={handleLogoutClick}>
                    确定
                  </Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        )}
        <ModeToggle />
      </div>
      {isModalOpen && (
        <Login
          handleCloseModal={handleCloseModal}
          setIsLogin={setIsLogin}
          setProfile={setProfile}
        />
      )}
    </>
  )
}

export default User
