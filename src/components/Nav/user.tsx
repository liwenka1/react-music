import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '../mode-toggle'
import { useState } from 'react'
import Login from './login'

const User: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className="flex items-center space-x-3 sm:space-x-6 pr-4">
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
        <ModeToggle />
      </div>
      {isModalOpen && <Login handleCloseModal={handleCloseModal} />}
    </>
  )
}

export default User
