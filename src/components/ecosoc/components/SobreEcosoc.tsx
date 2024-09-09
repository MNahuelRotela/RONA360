import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SobreEcosoc: React.FC = () => {
  const { language, content } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="flex flex-row py-12 w-[100%] h-auto lg:items-center lg:mx-auto lg:flex-col lg:px-[11%] md:items-center md:mx-auto md:flex-col md:px-[5%] sm:items-center sm:mx-auto sm:flex-col sm:px-[5%] xs:items-center xs:mx-auto xs:flex-col xs:px-[5%]">
      <div className="w-[100%] mx-[8%] h-auto flex flex-row md:flex-col sm:flex-col lg:flex-col xs:flex-col">
        <div className="w-[50%] pl-12 lg:order-1 lg:pl-0 lg:w-full md:order-1 md:pl-0 md:w-full sm:order-1 sm:pl-0 sm:w-full xs:order-1 xs:pl-0 xs:w-full">
          <h3
            data-aos="zoom-in"
            className="flex justify-center mt-12 mb-5 lg:my-[1rem] text-center font-bold text-[#666666] text-base"
          >
            <span className="w-full border-t border-black mr-4 mt-2"></span>
            {content?.ecosoc[language].aboutEcosoc.subtitle}
            <span className="w-full border-t border-black ml-4 mt-2"></span>
          </h3>
          <h1
            data-aos="fade-up"
            className="font-bold text-[1.69rem] mb-8  md:text-2xl sm:text-2xl my-4 xs:text-2xl"
          >
            {content?.ecosoc[language].aboutEcosoc.title}
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[#666666] text-base text-justify "
          >
            {content?.ecosoc[language].aboutEcosoc.description}
          </h2>
          <a
            href="https://ecosoc.un.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              data-aos="flip-left"
              className="bg-[#449DD6] text-white px-4 py-2 mt-10 rounded-md font-sans font-medium transition duration-300 hover:bg-green-btn-nav xl:mt-5"
            >
              {content?.ecosoc[language].aboutEcosoc.button}
            </button>
          </a>
        </div>
        <div
          data-aos="zoom-in"
          className="flex w-[50%] pl-[5%] h-auto mt-14 justify-center lg:order-2  lg:w-full lg:pl-[0%]  lg:justify-center lg:mb-8 md:order-2  md:w-full md:pl-[0%]  md:justify-center md:mb-8 sm:order-2  sm:w-full sm:pl-[0%]  sm:justify-center sm:mb-8 xs:order-2  xs:w-full xs:pl-[0%]  xs:justify-center xs:mb-8"
        >
          <img
            src={`https://somosawaqblob.blob.core.windows.net/congress/ecosoc/caac_oficial.jpg`}
            className="w-full shadow-lg shadow-black bg-white box-border h-[95%] rounded-lg md:w-auto sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};
