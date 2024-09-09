import { useTranslation } from "../../../context/TraslationContext";

const RecomendacionesDeAlojamiento = () => {
  const { language, content  } = useTranslation();
  return (
    <div className="max-w-[1336px] mx-auto w-full h-[700px] m-auto mt-28 px-5 xs:h-[700px] sm:h-[800px] md:h-[800px]" data-aos="zoom-in">
      <div className="flex justify-center mb-4 text-center text-[40px] font-semibold text-[#385019] xs:mb-0 xs:text-[25px] sm:text-[30px] sm:mb-10 md:text-[30px]">
        <span>{content?.comoLlegar[language].accommodation.title} 🏨</span>
      </div>
      <div className="w-full h-[560px] gap-40 flex justify-center items-center xs:w-[100px] xs:h-[100px] xs:block xs:mt-5 sm:block sm:h-[100px] sm:mt-5 md:h-[560px] md:mt-3 xl:gap-0 lg:gap-0 md:gap-0 xs:gap-0">
        <div className="w-[500px] h-[560px] relative sm:w-[400px] sm:h-[180px] sm:m-auto xs:w-[200px] xs:h-[180px] xs:m-auto">
          <div className="absolute top-48 -left-3 z-10 xs:size-64 xs:left-0 xs:top-5 sm:size-80 sm:left-0 sm:top-5">
            <img src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/benidorm.png" />
          </div>
        </div>
        <div className="w-[610px] h-[500px] font-open-sans text-xl lg:text-lg pr-7 xs:text-sm xs:pr-0 xs:w-[300px] sm:pr-0 sm:w-full  sm:text-base md:text-base">
          <h1 className='text-3xl font-bold mb-10 text-[#0033A1] lg:text-2xl lg:mb-5 md:text-2xl md:mb-5 sm:mb-5 xs:text-[20px]'>{content?.comoLlegar[language].accommodation.hotel.name}</h1>
          <p>{content?.comoLlegar[language].accommodation.hotel.description}</p>
          <p>{content?.comoLlegar[language].accommodation.hotel.description2}</p>
          <div className="flex items-center mt-5 lg:mt-4 md:mt-4">
            <p className="text-1al ">
              <span className="font-bold">{content?.comoLlegar[language].accommodation.hotel.reservas.reservas}</span> {content?.comoLlegar[language].accommodation.hotel.reservas.release}
            </p>
          </div>

          <div className="flex items-center mt-5 lg:mt-4 md:mt-4">
            <p className="text-1al ">
              <span className="font-bold">
                {content?.comoLlegar[language].accommodation.hotel.contact.telephone}</span> {content?.comoLlegar[language].accommodation.hotel.contact.number}
            </p>
          </div>
          <div>
            <a href="https://www.hotelbenidorm.co/es" target="_blank" rel="noopener noreferrer">
              <button className="mt-6  px-4 py-1 font-medium rounded-md bg-[#0033A1] transition hover:bg-white hover:text-[#0033A1] ease-in-out text-white">
                {content?.comoLlegar[language].accommodation.hotel.contact.webpage}
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}


export default RecomendacionesDeAlojamiento