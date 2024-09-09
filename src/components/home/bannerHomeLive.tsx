import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";

export const BannerHomeLive = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="w-[100%] h-[100%] flex sm:flex-col xs:flex-col sm:mb-32" data-aos="fade-right">
      {/* Video de fondo */}
      <video
        preload="auto"
        autoPlay={true}
        muted
        loop={true}
        style={{ filter: 'brightness(50%)' }}
        className="w-[100%] h-[100%] absolute object-fill -z-10 aspect-video max-h-[34rem] min-h-[34rem] md:max-h-[36rem] md:min-h-[36rem] sm:max-h-[45rem] sm:min-h-[45rem] xs:max-h-[46rem] xs:min-h-[46rem]"
      >
        <source src='https://somosawaqblob.blob.core.windows.net/congress/home/Landin%20COA%20101.mp4' type="video/mp4" />
      </video>

      {/* Contenedor de contenido */}
      <div className="w-1/2 px-16 py-10 xs:py-2 sm:py-2 xl:w-[50%] lg:w-[60%] md:w-[60%] sm:w-full xs:w-full xs:px-8">
        <h1 className="text-white text-3xl leading-10 mb-4 md:text-3xl sm:text-2xl xs:text-xl">
          <strong>{content?.home[language].banner.title}</strong>{" "}
          {content?.home[language].banner.title2} <br />
          <strong>{content?.home[language].banner.subtitle}</strong>
        </h1>
        <h1 className="text-white text-2xl mb-4 font-medium sm:text-xl xs:text-xl">
          {content?.home[language].banner.subtitle2} <br />
        </h1>

        <div className="flex items-center text-white mb-2">
          <FaRegCalendarAlt className="text-2xl mr-2" />
          <p className="text-white text-xl sm:text-md xs:text-lg">
            {content?.home[language].banner.date}
          </p>
        </div>
        <div className="flex items-center text-white mb-2">
          <FaMapLocationDot className="text-2xl mr-2" />
          <p className="text-white text-xl sm:text-m xs:text-lg">
            {content?.home[language].banner.ubication}
          </p>
        </div>
        <div className="flex items-center text-white mb-8">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/agenda/colombia2.png" className="w-6 h-6 mr-2" />
          <p className="text-white text-xl sm:text-md xs:text-lg">Colombia</p>
        </div>
        <p className="text-white mb-4 text-justify text-balance xs:hidden sm:hidden ">
          {content?.home[language].banner.description}
        </p>
      </div>

      {/* Contenedor del iframe */}
      <div className="w-1/2 flex  flex-col items-center justify-center px-16 my-10 xs:my-2 sm:my-2 xl:w-[50%] lg:w-[40%] md:w-[40%] sm:w-full xs:w-full xs:px-8">
      <h3 className="text-white text-2xl mb-4 text-center font-medium sm:text-xl xs:text-xl">
          {content?.home[language].bannerlive.livetext} <br />
        </h3>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JtnfarmmOKU?si=3-ZNZYkNfMQ5d-PO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3 className="text-white text-2xl my-4 text-center font-medium sm:text-xl xs:text-xl">
          {content?.home[language].bannerlive.day1} <br />
      </h3>
      </div>
    </div>
  );
};