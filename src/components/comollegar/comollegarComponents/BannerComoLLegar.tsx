import { useTranslation } from "../../../context/TraslationContext";

const BannerComoLLegar = () => {
  const { language, content  } = useTranslation();
  return (
    <div className="relative" data-aos="fade-right">
      <div className="relative w-full h-full mt-20 px-16 py-48 bg-cover bg-bottom xs:py-36" style={{ backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/como-llegar/banner.webp)` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center xs:w-full z-10">
          <h1 className="text-white font-bold xs:text-3xl sm:text-4xl text-a5xl leading-10 mb-5 text-center sm:mb-0">
            {content?.comoLlegar[language].banner.title}
          </h1>
          <h3 className="text-white xs:text-xl text-xl leading-10 mb-8 text-center">
            {content?.comoLlegar[language].banner.subtitle}
          </h3>
        </div>
      </div>
      <img
        className="w-full"
        src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/image_123.png"
        alt=""
      />
      <img
        className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 md:top-[90%] sm:top-[92%] xs:top-[95%]"
        src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/avion.png"
        alt="Avion"
      />
    </div>
  )
}

export default BannerComoLLegar
