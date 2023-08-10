import { useState } from 'react'
import { useSearchHot } from '@/api/search'
import { useQuery } from 'react-query'

const Tags = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { isLoading, error, data } = useQuery('useSearchHot', useSearchHot)

  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error occurred</div>
  }

  return (
    <div className="inline-block align-middle my-3">
      {data &&
        data.result.hots.map((item, index) => {
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
  )
}

export default Tags
