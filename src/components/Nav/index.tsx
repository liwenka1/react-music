import Search from './search'
import User from './user'

const Nav = () => {
  return (
    <nav className="w-full pb-2 mt-4">
      <div className="flex justify-between items-center px-2 sm:px-6 py-1.5">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Music
        </h2>
        <Search />
        <User />
      </div>
    </nav>
  )
}

export default Nav
