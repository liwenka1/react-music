import { FunctionComponent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useQuery } from 'react-query'
import { useBanner } from '@/api/banner'
import './index.css'
import SvgIcon from '../SvgIcon'

interface ArrowProps {
  onClick?: () => void
}

const CustomPrevArrow: FunctionComponent<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className="custom-prev-arrow" onClick={onClick}>
      <SvgIcon className=" w-6 h-auto" name="chevron-left" />
    </div>
  )
}

const CustomNextArrow: FunctionComponent<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className="custom-next-arrow" onClick={onClick}>
      <SvgIcon className=" w-6 h-auto" name="chevron-right" />
    </div>
  )
}

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
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
          <div key={item.bannerId} className="flex justify-center outline-0">
            <div className="mx-2 rounded">
              <img
                src={item.pic}
                alt={item.typeTitle}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
