import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const images = [
    'https://img1.baidu.com/it/u=1170519437,1288564083&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691859600&t=b24fa3938f2a02107ab5df1e5734c50d',
    'https://img1.baidu.com/it/u=1170519437,1288564083&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691859600&t=b24fa3938f2a02107ab5df1e5734c50d'
  ]

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlickCarousel
