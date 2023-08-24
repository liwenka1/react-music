import SvgIcon from '../SvgIcon'
import Search from './search'
import User from './user'
import { useNavigate } from 'react-router-dom'

const Nav: React.FC = () => {
  const navigate = useNavigate()

  const handleGoPrevious = () => {
    navigate(-1)
  }

  const handleGoNext = () => {
    navigate(1)
  }

  return (
    <nav className="w-full pb-2 pt-2">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1">
        <div className="flex">
          <SvgIcon
            name="chevron-left"
            className="w-5 h-5 cursor-pointer hover:text-primary mr-2"
            onClick={handleGoPrevious}
          />
          <SvgIcon
            name="chevron-right"
            className="w-5 h-5 cursor-pointer hover:text-primary"
            onClick={handleGoNext}
          />
        </div>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
