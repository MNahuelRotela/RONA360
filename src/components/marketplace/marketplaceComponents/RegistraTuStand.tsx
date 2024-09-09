import { Link } from "react-router-dom";
import { useTranslation } from "../../../context/TraslationContext";

const RegistraTuStand = () => {
  const { language, content } = useTranslation();
  return (
    
    <div
      className="max-w-7xl m-auto flex flex-col items-center justify-center xl:max-w-5xl xl:m-auto lg:max-w-3xl lg:m-auto md:max-w-xl md:m-auto sm:max-w-md sm:m-auto xs:max-w-xs xs:m-auto" 
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold mb-10 text-d_green md:mb-5 xs:text-3xl xs:mb-4">
        {content?.marketplace[language].registraTuStand.title1}
      </h1>
      <div
        className="grid grid-cols-2 gap-10 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xs:p-5"
        data-aos="fade-up"
      >
        <div className="flex justify-center relative">
          <img
            className="w-full h-[100%] object-cover rounded-2xl"
            src="https://somosawaqblob.blob.core.windows.net/congress/marketplace/market-miel.jpg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-d_green lg:text-2xl lg:mb-5 xs:text-2xl">
            {content?.marketplace[language].registraTuStand.title2}
          </h1>
          <p className="pr-5 text-justify  xl:text-base lg:text-[13px]  sm:text-basesm:pr-0  xs:text-base  xs:pr-0  md:pr-0">
            {content?.marketplace[language].registraTuStand.description1}
          </p>
          <p className="pr-5 text-justify  mt-2 mb-4 xl:text-base  lg:text-[13px]  sm:text-basesm:pr-0 xs:text-base  xs:pr-0   md:pr-0">
            <span>
              {content?.marketplace[language].registraTuStand.description2}
            </span>
          </p>
          <p className="pr-5 text-justify  mb-2 xl:text-base  lg:text-[13px]  sm:text-basesm:pr-0 xs:text-base  xs:pr-0   md:pr-0">
            <span>
              {content?.marketplace[language].registraTuStand.description3}
            </span>
          </p>
          <p className="pr-5 text-justify  mb-4 xl:text-base lg:text-[13px]  sm:text-basesm:pr-0 xs:text-base  xs:pr-0   md:pr-0">
            <span>
              {content?.marketplace[language].registraTuStand.description4}
            </span>
          </p>
          <Link to="/inscripcion">
            <button className="bg-green-btn-nav text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow">
              {content?.home[language].banner.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistraTuStand;

{
  /* <div className="w-full h-[580px] max-w-6xl m-auto mt-12 xs:h-[760px] sm:h-[940px] md:h-[500px] xs:mt-20 xs:mb-24" data-aos="zoom-in">
      <h1 className="text-4xl text-center font-bold mb-4 text-d_green">
          {content?.marketplace[language].registraTuStand.title1}
        </h1>
      <div className="w-full h-[560px] gap-20 flex justify-center items-center xs:h-[630px] xs:block xs:mt-5 sm:block sm:h-[800px] sm:mt-5 md:mt-3 xl:gap-0 lg:gap-0 md:gap-5">

        <div className="w-[500px] h-[560px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[300px] xs:m-auto xs:mt-20 md:m-auto">
          <div className="absolute rounded-xl top-28 -left-3 z-10 xs:size-52 sm:size-80 sm:left-0 overflow-hidden">
            <img src="https://somosawaqblob.blob.core.windows.net/congress/marketplace/market-miel.jpg" />
          </div>
        </div>
        <div className="w-[700px] h-[500px] font-open-sans text-lg lg:text-base xs:text-[16.5px] xs:w-full xs:h-[330px] sm:w-full sm:h-[430px] sm:text-[20px] md:h-[560px] ">
            <h1 className='text-3xl font-bold mb-10 text-d_green lg:text-2xl lg:mb-5 md:text-2xl md:mb-5 sm:mb-5 xs:text-[20px]'>{content?.marketplace[language].registraTuStand.title2}</h1>
          <p>{content?.marketplace[language].registraTuStand.description1}</p>
          <p className="mt-5">{content?.marketplace[language].registraTuStand.description2}</p>
          <p className="mt-5">{content?.marketplace[language].registraTuStand.description3}</p>
          <p className="mt-5">{content?.marketplace[language].registraTuStand.description4}</p>
          <Link to="/inscripcion">
          <button className="bg-green-btn-nav mt-10 text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-white hover:text-black">
            {content?.home[language].banner.buttonText}
          </button>
        </Link>
        </div>
      </div>
    </div>

  )
} */
}