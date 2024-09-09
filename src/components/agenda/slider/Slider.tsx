import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'tailwindcss/tailwind.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from '../../../context/TraslationContext';
import Flag from 'react-world-flags';

interface Slide {
  id: number;
  imageUrl: string;
  name: string;
  nationality: string;
  countrycode: string;
  org: string;
  position: string;
  socialMedia: object;
  event: string;
  video: string;
  doc: string;
  description: string;
}

const isLongText = (text: string) => {
  return text.length > 15; // Ajusta este número según lo que consideres "largo"
};

const isVeryLongText = (text: string) => {
  return text.length > 50; // Ajusta este número según lo que consideres "muy largo"
};

export const Slider: React.FC = () => {
  const { language, content } = useTranslation();
  const [carouselInstance, setCarouselInstance] = useState<any>(null);
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const handleSlideChange = (swiper: any) => {
    setCarouselInstance(swiper);
  };

  const handleShowMoreInfo = (slide: Slide) => {
    setSelectedSlide(slide);
    setShowMoreInfo(true);
    if (carouselInstance) {
      carouselInstance.autoplay.stop(); // Detiene el autoplay
    }
  };

  const handleCloseMoreInfo = () => {
    setShowMoreInfo(false);
    setSelectedSlide(null);
    if (carouselInstance) {
      carouselInstance.autoplay.start(); // Reinicia el autoplay
    }
  };

  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center mt-20" data-aos="fade-up">
      <h2 className="text-4xl h-20 font-bold mb-8">{content?.agenda[language].tituloSlider}</h2>

      <Swiper
        className="w-full h-full overflow-hidden"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={14}
        slidesPerView={5}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        onSlideChange={(swiper: any) => handleSlideChange(swiper)}
      >
        <div className="flex">
          {content?.panelistas[language].map(
            (item: Slide) => (
              <SwiperSlide key={item.id}>
                <div className='w-[15rem] h-[31rem] flex flex-col justify-center items-center max-w-full max-h-full object-cover rounded-md'>
                  <img
                    className="w-full h-full bg-center absolute mix-blend-overlay sm:h-full"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className='absolute left-0 top-0 w-10 h-10'>
                    <Flag code={item.countrycode} className="object-contain w-10 h-10 m-1" alt="country" />
                  </div>
                  <div className='relative flex flex-col mx-auto h-full items-center justify-end mb-10'>
                    <div className={`h-24 ${isLongText(item.name) ? 'text-lg' : ''} ${isVeryLongText(item.name) ? 'text-sm' : ''}`}>
                      <h3 className={`relative text-xl font-semibold text-center text-white mx-2 xs:text-lg ${isLongText(item.name) ? 'text-lg' : ''} ${isVeryLongText(item.name) ? 'text-sm' : ''}`}>{item.name}</h3>
                      <p className={`relative text-lg font-semibold text-center text-white mx-2 my-1 xs:text-base ${isLongText(item.org) ? 'text-base' : ''} ${isVeryLongText(item.org) ? 'text-sm' : ''}`}>{item.org}</p>
                      <p className={`relative text-lg font-semibold text-center text-white mx-2 xs:text-base ${isLongText(item.nationality) ? 'text-base' : ''} ${isVeryLongText(item.nationality) ? 'text-sm' : ''}`}>{item.nationality}</p>
                    </div>
                    <button className="mt-9 px-4 py-2 justify-center items-center font-bold rounded-md bg-dark-yellow transition duration-300 hover:bg-green-btn-nav hover:text-black" onClick={() => handleShowMoreInfo(item)}>
                      {content?.agenda[language].buttonSlider}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>

      {/* Contenedor para mostrar más información */}
      {showMoreInfo && selectedSlide && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-black bg-opacity-75 absolute inset-0" onClick={handleCloseMoreInfo}></div>
          <div className="bg-gray-50 m-24 p-8 rounded-lg z-10">
            <div className='flex flex-col'>
              <div className='flex flex-row'>
              <div className='w-[10rem] h-[15rem] flex flex-col justify-center items-center max-w-full max-h-full object-cover rounded-md'>
                  <img
                    className="w-full h-full bg-center sm:h-full"
                    style={{
                      backgroundImage: `url(${selectedSlide.imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    alt=""
                  />
              </div>
              <div className=' w-2/3 pl-20'>
                <p className=''>{selectedSlide.description}</p>
              </div>
            </div>
            <div className='relative flex-1 flex'>
                <Flag code={selectedSlide.countrycode} className="object-contain w-10 h-10 mx-2" alt="country" />
                <h3 className="text-xl font-semibold my-auto">{selectedSlide.name}</h3>
              </div>
            <button className="mt-4 px-4 py-2 bg-dark-yellow text-white font-bold rounded-md transition duration-300 hover:bg-white hover:text-dark-yellow" onClick={handleCloseMoreInfo}>
              {content?.agenda[language].buttonClose}
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
