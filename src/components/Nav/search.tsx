import { useState } from 'react'
import SvgIcon from '../SvgIcon'
import { Input } from '../ui/input'

const Search: React.FC = () => {
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <div className="hidden md:flex items-center space-x-2 w-1/2 relative">
      <div className="flex items-center flex-auto justify-between">
        <Input
          placeholder="Search"
          className="w-full h-auto rounded-full"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <SvgIcon
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
          name="magnifying-glass"
        />
      </div>
      {open && <div className="absolute mt-20">123</div>}
    </div>
  )
}

export default Search
