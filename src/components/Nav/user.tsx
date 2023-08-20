import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '../mode-toggle'

const User: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 sm:space-x-6 pr-4">
      <Avatar className="w-9 h-9 rounded-full object-cover cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ModeToggle />
    </div>
  )
}

export default User
