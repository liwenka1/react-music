import { useState } from 'react'
import { useSearchHot } from '@/api/search'
import { useQuery } from 'react-query'

const Tags: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const {
    isLoading,
    error,
    data: searchHot
  } = useQuery('useSearchHot', useSearchHot)

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred</div>}
      <div className="flex align-middle overflow-hidden whitespace-nowrap">
        {searchHot &&
          searchHot.hots.map((item, index) => {
            return (
              <span
                key={index}
                className={`text-sm  py-1 px-5 mx-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 border
					${
            activeIndex == index
              ? 'border-gray-700 bg-gray-200 dark:border-gray-300 dark:bg-gray-500 transition duration-150'
              : ''
          }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.first}
              </span>
            )
          })}
      </div>
    </>
  )
}

export default Tags
