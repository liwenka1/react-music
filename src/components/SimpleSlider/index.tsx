import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import { Banner } from '@/api/banner/type'
import bannerLoadingImgUrl from '@/assets/img/bannerLoading.png'
import LazyImg from 'react-lazyimg-component'

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
    arrows: false
  }

  return (
    <div className="slick-carousel sm:col-span-full sm:inline-block hidden">
      <h1 className="text-3xl font-bold mb-4">推荐</h1>
      <Slider {...settings}>
        {props.banner.map((item) => (
          <div key={item.bannerId} className="outline-0 px-2">
            <LazyImg
              src={item.pic}
              alt={item.typeTitle}
              placeholder={bannerLoadingImgUrl}
              className="w-full h-auto rounded-md cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
