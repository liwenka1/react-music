import { FunctionComponent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import SvgIcon from '../SvgIcon'
import { Banner } from '@/api/banner/type'

interface ArrowProps {
  onClick?: () => void
}

const CustomPrevArrow: FunctionComponent<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className="custom-prev-arrow" onClick={onClick}>
      <SvgIcon className="w-6 h-auto" name="chevron-left" />
    </div>
  )
}

const CustomNextArrow: FunctionComponent<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className="custom-next-arrow" onClick={onClick}>
      <SvgIcon className="w-6 h-auto" name="chevron-right" />
    </div>
  )
}

interface Props {
  banner: Banner[]
}

const SimpleSlider: React.FC<Props> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <div className="slick-carousel sm:col-span-full sm:inline-block hidden">
      <Slider {...settings}>
        {props.banner.map((item) => (
          <div key={item.bannerId} className="flex justify-center outline-0">
            <img
              src={item.pic}
              alt={item.typeTitle}
              className="w-full h-auto rounded scale-95"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
