import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useQuery } from 'react-query'
import { useBanner } from '@/api/banner'

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  const { isLoading, error, data } = useQuery('useBanner', useBanner)
  console.log(data)

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error occurred</div>
  }

  return (
    <div className="slick-carousel col-span-full">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.bannerId}
            className="flex justify-center px-2 outline-0"
          >
            <img
              src={item.pic}
              alt={item.typeTitle}
              className="w-full h-auto rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
