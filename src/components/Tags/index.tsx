import { useState } from 'react'

const Tags = () => {
  const tagsItems = ['all', 'CSS', 'java']
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="inline-block align-middle my-3">
      {tagsItems.map((item, index) => {
        return (
          <span
            key={index}
            className={`text-sm  py-1 px-5 mx-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 border
							${activeIndex == index ? 'border-gray-700 transition duration-150' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default Tags
