import { useTranslation } from "../../context/TraslationContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Sponsor8: React.FC =() => {
  const { language,content }=useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div>
      <div className=" py-16 h-auto lg:w-[100%]  bg-gray flex md:h-auto sm:h-auto sm:w-auto" >
        <div className="flex w-auto lg:w-[100%] mx-[8%] sm:mx-10 flex-row h-auto my-auto box-border md:flex-col sm:flex-col xs:flex-col">
          <div className=" w-[80%]  sm:w-auto sm:mx-6 xs:w-auto xs:mx-6 mr-12 justify-center md:w-auto md:text-center md:mx-10 sm:text-center xs:text-center lg:w-[90%] 2xl:pl-12">
            <h2 data-aos="fade-up" className="my-2 text-[2.1rem] font-bold md:mt-6 sm:mt-5 sm:text-3xl sm:leading-10 lg:text-3xl">{content?.sponsors[language].sponsor8.h2}</h2>
            <h3 data-aos="fade-up" className="my-6 text-[#666666] text-base text-justify  md:mb-12 md:text-base sm:text-center md:text-center">{content?.sponsors[language].sponsor8.h3}</h3>
            <button data-aos="flip-left" className="buttonGreenHome md:mx-auto sm:mx-auto sm:text-ss underline "><Link to='https://manizales.gov.co/' target="_blank" className="md:text-ss md:p-2 sm:text-ss sm:p-1">{content?.sponsors[language].sponsor8.button} </Link></button>
          </div>
          <div data-aos="zoom-in" className="flex ml-4 xs:ml-0 sm:ml-0 w-full justify-center align-middle md:mx-auto md:w-auto sm:mx-auto lg:w-full lg:ml-0 lg:mr-0 2xl:mx-2 bg-white shadow-xl md:shadow-lg sm:shadow-lg h-60 shadow-[#313131] rounded-3xl mt-14  overflow-hidden">
            <img
              className="object-contain p-4 xs:p-4 sm:p-8 md:p-10 lg:p-12 w-full sm:w-auto max-w-full h-auto mx-auto lg:m-auto lg:h-auto lg:my-auto md:h-full sm:h-full"
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/alcaldia-manizales.png"
              alt="Alcaldía de Manizales"
            />
          </div>



        </div>
      </div>
    </div>
  );
}
