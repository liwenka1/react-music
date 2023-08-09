import { Input } from '@/components/ui/input'
import SvgIcon from '../SvgIcon'

const Search = () => {
  return (
    <div className="flex justify-between items-center">
      <Input />
      <div className="cursor-pointer">
        <SvgIcon name="magnifying-glass" />
      </div>
    </div>
  )
}

export default Search
