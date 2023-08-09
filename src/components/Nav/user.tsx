import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '../mode-toggle'

const User = () => {
  return (
    <div className="flex justify-between items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ModeToggle />
    </div>
  )
}

export default User
