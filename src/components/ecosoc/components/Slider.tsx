
import {Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from '../../../context/TraslationContext'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  const { language, content } = useTranslation();
  return (
    <>
      <Swiper
        className='mySwiper w-auto md:w-60 sm:w-52 h-auto xl:w-64 '
        modules={[Navigation, Pagination, A11y, Autoplay]}        
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide className=' mb-4 px-9' >
          <section className=' h-auto ' >
            <img
            alt=''
              src={content?.ecosoc[language].aboutEcosoc.image1}
              className=' object-cover '
            />
          </section>
        </SwiperSlide>
        <SwiperSlide className=' mb-4 px-8' >
        <section className=' w-auto ' >                
          <img
          alt=''
          src={content?.ecosoc[language].aboutEcosoc.image2}
            className=' object-cover '
          />
        </section>
        </SwiperSlide>
        <SwiperSlide className=' mb-4 px-8' >
        <section className='w-auto h-auto '>
          <img
            alt=''
            src={content?.ecosoc[language].aboutEcosoc.image3}
            className=' object-cover '
          />
        </section>
        </SwiperSlide>
        <SwiperSlide className=' mb-4 px-8' >
        <section className='h-auto '>
          <img
            alt=''
            src={content?.ecosoc[language].aboutEcosoc.image4}
            className=' object-cover '
          />
        </section>
        </SwiperSlide>
        <SwiperSlide className=' mb-4 px-8' >
        <section className='h-auto '>
          <img
            alt=''
            src={content?.ecosoc[language].aboutEcosoc.image5}
            className=' object-cover '
          />
        </section>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider