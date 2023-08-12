import SvgIcon from '../SvgIcon'

const Search = () => {
  return (
    <div className="hidden md:flex items-center space-x-2 w-1/2">
      <div className="flex items-center flex-auto justify-between rounded border border-gray-500">
        <input
          className="w-full rounded-l outline-none border-none p-0.5 pl-3 placeholder-gray-500 dark:text-white bg-background"
          type="text"
          placeholder="Search"
        />
        <SvgIcon
          className="md-21 text-center text-gray-300 hover:text-white p-1 w-20 h-7 bg-gray-500 cursor-pointer"
          name="magnifying-glass"
        />
      </div>
    </div>
  )
}

export default Search
