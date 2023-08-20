import SvgIcon from '../SvgIcon'
import { Input } from '../ui/input'

const Search: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-2 w-1/2 relative">
      <div className="flex items-center flex-auto justify-between">
        <Input placeholder="Search" className="w-full h-auto rounded-md" />
        <SvgIcon
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
          name="magnifying-glass"
        />
      </div>
    </div>
  )
}

export default Search
