import { useEffect } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { Link } from "react-router-dom";


export const BannerCTA = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    });
  return (
    <>
      <div data-aos="fade-right" className=" z-10 bg-cover object-fill bg-center bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/nevado-img.jpg')]">
        <div className=" flex h-auto w-full ">
          <div className="flex h-full w-full relative top-10 justify-start items-start   ">
            <div className="flex flex-col justify-start items-start h-fit mb-20 w-1/2 mx-[5%]">
               <h4 className="text-white font-bold text-3xl w-full mt-10 md:text-4xl sm:text-4xl  xs:text-3xl xs:w-full">
                {content?.visitManizales[language].bannercta.h3}
              </h4>
              <h4 className="text-white mb-4 text-xl w-full  md:text-xl sm:text-xl  xs:text-xl xs:w-full">
              {content?.visitManizales[language].bannercta.h4}
              </h4>
              <h5 className="text-white  text-base w-full mb-4 md:text-base sm:text-base  xs:text-base xs:w-full">
              {content?.visitManizales[language].bannercta.h5}
              </h5>
              <Link to="https://visitmanizales.com" target="_blank" className=" flex justify-start">
                <button className="mt-2 px-4 py-2 font-bold rounded-lg  bg-dark-yellow transition duration-300 hover:bg-white hover:text-dark-yellow">
                {content?.visitManizales[language].bannercta.button}
                </button>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
