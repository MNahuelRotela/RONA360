import { useEffect } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";


export const BannerVisit = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    });
  return (
    <>
      <div data-aos="fade-right" className=" z-10 bg-cover object-fill bg-center bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/banner-visita-manizales.png')] mt-20">
        <div className=" flex h-auto w-full ">
          <div className="flex h-full w-full relative top-10 justify-center items-center my-20  ">
            <div className="flex flex-col justify-center items-center w-full mx-[5%]">
               <h4 className="text-white font-bold text-a4xl w-full mt-10 md:text-4xl sm:text-4xl  xs:text-3xl xs:w-full">
                {content?.visitManizales[language].title}
              </h4>
              <h4 className="text-white  text-a4xl w-full mb-32 md:text-4xl sm:text-4xl  xs:text-3xl xs:w-full">
              {content?.visitManizales[language].subtitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
