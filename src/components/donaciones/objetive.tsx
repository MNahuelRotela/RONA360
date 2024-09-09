import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

interface ObjetiveDonationsProps {
  scrollTo: () => void; 
}

export const ObjetiveDonations: React.FC<ObjetiveDonationsProps> = ({ scrollTo }) => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  

  if (language === "es") {
  return (
    <div data-aos="zoom-in" className="relative  w-full mt-10">

    <div className="flex xs:flex-col xs:basis-1/5 sm:flex-col sm:basis-1/5 md:flex-1 md:flex-row w-full h-full relative ">
      
      <div className="flex flex-1 flex-col basis-5/12 relative sm:top-0 sm:left-0 sm:mt-20 mt-20 ">

        <h2 className="font-bold font-open-sans  text-[#1E2F2D] xs:px-2 sm:px-4 px-28 text-3xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].objetive.title}

        </h2>
        <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
          <span>&nbsp;</span>
          <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].objetive.line1green}
          </span>
          <span>&nbsp;</span>
          <span>
            {content?.donaciones[language].objetive.line1black2}
          </span>
          <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].objetive.line2green}
          </span>
        </p>

        <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
          

          <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].objetive.line2green2}
          </span>
          <span>
            {content?.donaciones[language].objetive.line2black}
          </span>

        </p>
        
        <div className="flex justify-center items-center mt-4 xs:mx-4 sm:mx-4 xs:gap-x-10 sm:gap-x-14 md:gap-x-16 gap-x-20">
          <div className="flex justify-center items-center flex-col">
            <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/icon-people.png" alt="objetive" className=" " />
            <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].objetive.icon1green}
              </span>
              <span>&nbsp;</span>
              <span>
                {content?.donaciones[language].objetive.icon1black}
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <p className="font-bold font-open-sans italic text-[#1E2F2D] text-a5xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              =
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/icon-money.png" alt="objetive" className=" " />
            <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].objetive.icon2green}
              </span>
              <span>&nbsp;</span>
              <span>
                {content?.donaciones[language].objetive.icon2black}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 mb-4">
          <button className="bg-[#8DC73F]  font-bold text-base py-3 px-8 rounded-md hover:text-white" onClick={scrollTo}>
            {content?.donaciones[language].objetive.button}
          </button>
        </div>
        

      </div>

      <div className=" relative flex justify-center items-center basis-5/12 xs:mx-4 sm:mx-4 mr-10  ">

        <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/peopleorg.png" alt="objetive" className="" />

      </div>
    </div>
  </div>
   );} else {
    return (
      <div className="relative  w-full mt-10">

      <div className="flex xs:flex-col xs:basis-1/5 sm:flex-1 sm:flex-row w-full h-full relative ">
        
        <div className="flex flex-1 flex-col basis-5/12 relative sm:top-0 sm:left-0 sm:mt-20 mt-20 ">
  
          <h2 className="font-bold font-open-sans  text-[#1E2F2D] xs:px-2 sm:px-4 px-36 text-3xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
              {content?.donaciones[language].objetive.title}
  
          </h2>
          <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            <span>
              {content?.donaciones[language].objetive.line1black}
            </span>
            <span>&nbsp;</span>
            <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              {content?.donaciones[language].objetive.line1green}
            </span>
            <span>&nbsp;</span>
            <span>
              {content?.donaciones[language].objetive.line1black2}
            </span>
          </p>
  
          <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            
            <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              {content?.donaciones[language].objetive.line2green}
            </span>
            <span>&nbsp;</span>
            <span>
              {content?.donaciones[language].objetive.line2black}
            </span>
            <span>&nbsp;</span>
            <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
              {content?.donaciones[language].objetive.line2green2}
            </span>
          </p>
          
          <div className="flex justify-center items-center mt-4 xs:mx-4 sm:mx-4 xs:gap-x-10 sm:gap-x-14 md:gap-x-16 gap-x-20">
            <div className="flex justify-center items-center flex-col">
              <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/icon-people.png" alt="objetive" className=" " />
              <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                  {content?.donaciones[language].objetive.icon1green}
                </span>
                <span>&nbsp;</span>
                <span>
                  {content?.donaciones[language].objetive.icon1black}
                </span>
              </p>
            </div>
  
            <div className="flex justify-center items-center ">
              <p className="font-bold font-open-sans italic text-[#1E2F2D] text-a5xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                =
              </p>
            </div>
  
            <div className="flex justify-center items-center flex-col">
              <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/icon-money.png" alt="objetive" className=" " />
              <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                  {content?.donaciones[language].objetive.icon2green}
                </span>
                <span>&nbsp;</span>
                <span>
                  {content?.donaciones[language].objetive.icon2black}
                </span>
              </p>
            </div>
          </div>
  
          <div className="flex justify-center items-center mt-4 mb-4">
            <button className="bg-[#8DC73F]  font-bold text-base py-3 px-8 rounded-md hover:text-white" onClick={scrollTo}>
              {content?.donaciones[language].objetive.button}
            </button>
          </div>
          
  
        </div>
  
        <div className=" relative flex justify-center items-center basis-5/12 xs:mx-4 mr-10  ">
  
          <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/peopleorg.png" alt="objetive" className="" />
  
        </div>
      </div>
    </div> );}
}