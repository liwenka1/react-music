import Search from './search'
import User from './user'

const Nav = () => {
  return (
    <nav className="w-full pb-2 pt-2">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1">
        <h2 className="text-lg font-semibold tracking-tight">Music</h2>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
