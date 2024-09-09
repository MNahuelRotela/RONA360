import { useTranslation } from "../../context/TraslationContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Sponsor1: React.FC =() => {
  const { language,content }=useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div>
        <div className=" py-16 w-auto h-auto lg:w-[100%]  bg-gray flex md:h-auto sm:h-auto sm:w-auto" >
          <div className="flex w-auto h-auto lg:w-[100%] mx-[8%] sm:mx-10 flex-row  my-auto box-border md:flex-col sm:flex-col xs:flex-col">

             
          <div data-aos="zoom-in" className="flex ml-4 xs:ml-0 sm:ml-0 w-full justify-center align-middle md:mx-auto md:w-auto sm:mx-auto lg:w-full lg:ml-0 lg:mr-0 2xl:mx-2 shadow-xl shadow-[#313131] md:shadow-lg sm:shadow-lg h-60 rounded-3xl mt-14  overflow-hidden">                <img 
                    className="object-contain xs:p-4 sm:p-8 md:p-10 lg:p-12 w-full sm:w-auto max-w-full h-auto mx-auto lg:m-auto lg:h-auto lg:my-auto md:h-full sm:h-full" 
                    src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/AWAQ-Verde%20Horizontal.png" 
                    alt="AWAQ"
                />
            </div>

            <div className=" w-[80%] ml-12 xl:ml-12 xl:pl-12 sm:w-auto sm:mx-6 xs:w-auto xs:mx-6 mr-12 justify-center md:w-auto md:text-center md:mx-10 sm:text-center lg:w-[90%] 2xl:pl-12">
                <h2 data-aos="fade-up" className="my-6 text-[2.489rem] font-bold md:mt-6 sm:mt-5 sm:text-4xl sm:leading-10 lg:text-4xl">{content?.sponsors[language].sponsor1.h2}</h2>
                <h3 data-aos="fade-up" className="my-6 text-[#666666] text-base text-justify  md:mb-12 md:text-base sm:text-center md:text-center">{content?.sponsors[language].sponsor1.h3}</h3>
              <button data-aos="flip-left" className="buttonGreenHome md:mx-auto sm:mx-auto sm:text-ss underline "><Link to='https://www.somosawaq.org' target="_blank" className="md:text-ss md:p-2 sm:text-ss sm:p-1">{content?.sponsors[language].sponsor1.button} </Link></button>
            </div>
        </div>
      </div>
    </div>
  );
}
