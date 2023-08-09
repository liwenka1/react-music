import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SvgIcon from '../SvgIcon'

const Nav = () => {
  return (
    <nav className="w-full p-1 fixed top-0 z-20">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1.5 mx-auto">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SvgIcon name="magnifying-glass" />
      </div>
    </nav>
  )
}

export default Nav
