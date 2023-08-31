import SvgIcon from '../SvgIcon'
import Search from './search'
import User from './user'
import { useNavigate } from 'react-router-dom'

const Nav: React.FC = () => {
  const navigate = useNavigate()

  return (
    <nav className="w-full pb-2 pt-2">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1">
        <div className="flex">
          <SvgIcon
            name="chevron-left"
            className="svg-icon mr-2"
            onClick={() => navigate(-1)}
          />
          <SvgIcon
            name="chevron-right"
            className="svg-icon"
            onClick={() => navigate(1)}
          />
        </div>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
