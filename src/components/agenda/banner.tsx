import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";


export const Banner = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="fade-right">
      <div className=" z-10 bg-cover object-fill bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/agenda/banner.jpg')] mt-20">
        <div  className=" flex h-auto w-auto object-cover bg-gradient-to-r from-[#000000]/90 to-[#1E2F2D]/80 ">
          <div className="flex h-fit w-auto my-24 ">
            <div className="w-[100%] mx-[4%] md:w-auto sm:w-auto lg:w-auto sm:m-[3%] xs:m-[3%] xs:w-auto">
                <title>
                {content?.agenda[language].titleBanner}
                </title>
                <p className="text-white font-semibold text-3xl sm:text-xl xs:text-lg">
                {content?.agenda[language].dateBanner}
                </p>
              <h1 className="text-white font-bold text-[45px] w-[70%] my-10 md:text-4xl sm:text-3xl sm:w-5/6 xs:text-2xl xs:w-5/6">
                {content?.agenda[language].titleBanner}
              </h1>
              <p className=" text-white font-normal text-xl w-5/6 text-balance sm:text-base xs:text-sm">
                {content?.agenda[language].paragraphBanner}
              </p>
              {/* <button className=" font-bold text-base py-[10px] px-[20px] bg-white rounded-lg gap-2 sm:text-sm xs:text-ss mt-12 hover:scale-110 hover:ml-2">{content?.agenda[language].btnBanner} </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <p data-aos="fade-down" className=" text-principal_text text-2xl sm:text-lg mx-[9%] text-justify font-semibold sm:ml-[3%] sm:mr-[5%] my-16 xs:text-base xs:ml-[3%] xs:mr-[5%]">{content?.agenda[language].paragraphTowBanner}</p> */}
    </div>
  )
}
