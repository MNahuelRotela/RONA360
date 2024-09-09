import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Certificate: React.FC = () => {
  const { language, content } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="flex flex-row py-4 w-[100%] h-auto md:h-auto sm:h-auto xs:h-auto">
      <div className="w-[100%] mr-[11%] h-auto flex flex-row  md:mx-auto md:mt-10 sm:flex-col-reverse sm:items-center sm:mx-auto sm:mt-16 xs:flex-col-reverse xs:items-center xs:mx-auto xs:mt-16">
        <div
          data-aos="zoom-in"
          className="flex w-[60%] h-[80%] my-auto mt-12 justify-center md:align-middle md:items-center md:mx-8 md:justify-center md:w-[90%] md:h-auto md:mb-8 sm:align-middle sm:items-center sm:m-auto sm:justify-center sm:w-[90%] sm:h-auto sm:mb-8 xl:px-[5%] lg:pl-[5%] sm:p-0"
        >
          <img
            src={`https://somosawaqblob.blob.core.windows.net/congress/ecosoc/AWAQ-ONGD-ECOSOC-COVER.png`}
            className="w-[45%] shadow-lg shadow-black bg-white box-border rounded-lg md:w-auto sm:w-[60%] xs:w-auto xl:w-[55%] lg:w-[55%] lg:h-[90%]"
          />
        </div>
        <div className="w-[50%] md:mx-8 md:w-[90%] sm:mx-4 sm:p-0 sm:w-[90%] xs:mx-4 xs:p-0 xs:w-[90%] flex flex-col items-start  ">
        <h3
            data-aos="zoom-in"
            className="flex justify-center mt-12 mb-4 lg:my-[1rem] text-center font-bold text-[#666666] text-base xl:mt-10"
          >
            {/* <span className="w-full border-t border-black mr-4 mt-2"></span>
            {content?.ecosoc[language].accreditation.subtitle}
            <span className="w-full border-t border-black ml-4 mt-2"></span> */}
          </h3>
          <h1
            data-aos="fade-up"
            className="font-bold text-[1.69rem] mb-8  md:text-2xl md:my-4 sm:text-3xl my-4 md:text-left"
          >
            {content?.ecosoc[language].accreditation.title}
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[#666666] text-base text-justify lg:text-[15px]"
          >
            {content?.ecosoc[language].accreditation.description}
          </h2>
          <a
            href="https://drive.google.com/file/d/1BDEL2Y9FV1lGL4sJmXXaqhcuG6S33R1K/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button
              data-aos="flip-left"
              className="bg-[#449DD6] text-white px-4 py-2 mt-10 rounded-md font-sans font-medium transition duration-300 hover:bg-green-btn-nav lg:mt-5"
            >
              {content?.ecosoc[language].accreditation.button}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};