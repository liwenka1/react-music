import { useEffect, useState } from 'react'
import { useLoginStatus, useLogout } from '@/api/login'
import { UserProfile } from '@/api/login/type'

export const useUser = () => {
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

  return {
    isModalOpen,
    isLogin,
    setIsLogin,
    profile,
    setProfile,
    handleLoginClick,
    handleCloseModal,
    handleLogoutClick
  }
}
