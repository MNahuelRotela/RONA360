import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AwaqAndEcosoc: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div>
      <div className="pt-12 pb-12 h-auto lg:w-[100%] bg-gray flex md:h-auto sm:h-auto sm:pb-0 md:pb-0 xs:pb-0">
        <div className="flex w-auto lg:w-[100%] mx-[11%]  flex-col items-center h-auto my-auto box-border md:flex-col md:mx-[5%] sm:flex-col sm:mx-[5%]">
          <div className="w-auto justify-center md:w-[100%] md:mx-10 sm:w-[100%] sm:mx-10 lg:w-full">
            <h3
              data-aos="fade-up"
              className="flex items-center justify-center lg:my-[1rem] text-center font-bold text-[#666666] text-base "
            >
              <span className="flex-grow border-t border-black mr-4 mt-2"></span>
              {content?.ecosoc[language].awaqAndEcosoc.subtitle}
              <span className="flex-grow border-t border-black ml-4 mt-2"></span>
            </h3>
            <h2
              data-aos="fade-up"
              className="my-6 text-[30px] font-bold md:mt-6 sm:mt-5 sm:text-4xl sm:leading-10 xs:text-2xl "
            >
              {content?.ecosoc[language].awaqAndEcosoc.title}
            </h2>
            <h3
              data-aos="fade-up"
              className="my-6 text-[#666666] text-base text-justify md:mb-12 md:text-base sm:mb-12 sm:text-base"
            >
              {content?.ecosoc[language].awaqAndEcosoc.description}
            </h3>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center align-middle  md:mt-12 sm:mt-12 sm:w-auto md:mx-auto md:w-auto sm:mx-auto"
          >
            <img
              className="w-auto shadow-lg md:shadow-lg sm:shadow-lg shadow-black rounded-lg md:mb-10 sm:mb-8 h-auto lg:h-auto lg:my-auto xl:h-auto xl:my-auto  md:h-full sm:h-full sm:w-full"
              src={`https://somosawaqblob.blob.core.windows.net/congress/ecosoc/ecosoc-banner-1.png`}
              alt=""
            />
             {/* <video src={`https://somosawaqblob.blob.core.windows.net/congress/ecosoc/Loop-ECOSOC.mp4`} title="videos Momento awaq" preload="auto" autoPlay={false} controls={true} loop={false} className="w-full shadow-lg shadow-black bg-white box-border h-[70%] rounded-lg md:w-auto sm:w-auto " ></video> */}
          </div>
        </div>
      </div>
    </div>
  );
};
