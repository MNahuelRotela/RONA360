import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";

export const BannerHome = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-[100%] h-[100%] sm:mb-32" data-aos="fade-right">
      <video
        preload="auto"
        autoPlay={true}
        muted
        loop={true}
        style={{ filter: 'brightness(50%)' }}
        className=" w-[100%] h-[100%] absolute object-fill -z-10 aspect-video max-h-[34rem] min-h-[34rem] md:max-h-[36rem] md:min-h-[36rem] sm:max-h-[45rem] sm:min-h-[45rem]  xs:max-h-[46rem] xs:min-h-[46rem]">
        <source src='https://somosawaqblob.blob.core.windows.net/congress/home/Landin%20COA%20101.mp4' type="video/mp4" ></source>
      </video>
      <div className="flex flex-col w-2/4 px-16 py-10 xl:w-[65%] lg:w-[90%] md:w-[90%] sm:w-full xs:w-full xs:px-8">
        <h1 className="text-white text-4xl leading-10 mb-4 md:text-3xl sm:text-2xl xs:text-xl">
          <strong>{content?.home[language].banner.title}</strong>{" "}
          {content?.home[language].banner.title2} <br />
          <strong>{content?.home[language].banner.subtitle}</strong>
        </h1>
        <h1 className="text-white  text-2xl mb-4 font-medium sm:text-xl xs:text-xl">
          {content?.home[language].banner.subtitle2} <br />
        </h1>

        <div className="flex items-center text-white mb-2">
          <FaRegCalendarAlt className="text-2xl mr-2" />
          <p className="text-white text-xl sm:text-md xs:text-lg">{content?.home[language].banner.date}</p>
        </div>
        <div className="flex items-center text-white mb-2">
          <FaMapLocationDot className="text-2xl mr-2" />
          <p className="text-white text-xl sm:text-m xs:text-lg">{content?.home[language].banner.ubication}</p>
        </div>
        <div className="flex items-center text-white mb-8">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/agenda/colombia2.png" className="w-6 h-6 mr-2" />
          <p className="text-white text-xl sm:text-md xs:text-lg">Colombia</p>
        </div>
        <p className="text-white mb-8 text-justify text-balance ">
          {content?.home[language].banner.description}
        </p>
        <Link to="/inscripcion">
        <button className="bg-green-btn-nav text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow">
            {content?.home[language].banner.buttonText}
          </button>
        </Link>

      </div>

    </div>
  );
};
{/* <div
data-aos="fade-right"
className="w-full h-full px-16 py-14"
style={{
  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 35%, rgba(255,255,255,0) 100%), url(https://somosawaqblob.blob.core.windows.net/congress/home/landing.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
}}
></div> */}