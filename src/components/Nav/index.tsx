import Search from './search'
import User from './user'

const Nav = () => {
  return (
    <nav className="w-full pb-2 fixed top-0 z-20 bg-background">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1.5">
        <div className="flex items-center space-x-3">这里未来是一个logo</div>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
