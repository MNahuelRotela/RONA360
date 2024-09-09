import { useEffect } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { Link } from "react-router-dom";


export const BannerCTAVisit = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    });
  return (
    <>
      <div data-aos="fade-right" className="mt-32 z-10 bg-cover object-fill bg-center bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/home/que-hacer-manizales.png')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className=" flex h-auto w-full ">
          <div className="flex h-full w-full relative top-10 justify-start items-start   ">
            <div className="flex flex-col justify-start items-start h-fit mb-20 w-2/3 mx-[5%]">
               <h4 className="text-white font-bold  mb-4 text-3xl w-full mt-10 md:text-4xl sm:text-4xl  xs:text-3xl xs:w-full">
                {content?.visitManizales[language].bannercta.h3}
              </h4>
              <h4 className="text-white mb-4 text-xl w-full  md:text-xl sm:text-xl  xs:text-xl xs:w-full">
              {content?.visitManizales[language].bannercta.h4}
              </h4>
              <Link to="/visita-manizales" className=" flex justify-start">
              <button className="mt-2 px-4 py-2 font-bold rounded-lg bg-dark-yellow transition hover:bg-green-btn-nav">
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
