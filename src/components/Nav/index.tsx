import Search from './search'
import User from './user'

const Nav = () => {
  return (
    <nav className="w-full p-1 fixed top-0 z-20">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1.5 mx-auto">
        <div>这里未来是一个logo</div>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
