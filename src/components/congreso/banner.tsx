import React from 'react';
import { useTranslation } from "../../context/TraslationContext.tsx";
import AOS from "aos";
import { useEffect } from 'react';
import PannellumBannerCongreso from '../360/banner360Congreso.tsx';

export const Banner: React.FC = () => {
  const { language, content } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="relative h-screen mt-20">
      
      <div className="absolute inset-0  z-0">
        <PannellumBannerCongreso />
      </div>
      
      <div className="absolute inset-0 sm:h-[70vh] xs:h-[70vh] bg-black opacity-30"></div>
      <div className="grid grid-cols-1 justify-center items-center place-items-center mx-[5%] sm:mx-[3%] xs:mx-[3%] sm:my-auto xs:my-auto sm:justify-start xs:justify-start sm:items-start xs:items-start sm:place-items-start xs:place-items-start h-screen md:grid-cols-1 sm:grid-cols-1 sm:px-0 md:place-content-center xs:place-content-start sm:place-content-center relative z-10">
        <div data-aos="zoom-in" className="w-[100%] sm:justify-start xs:justify-start sm:items-start xs:items-start sm:place-items-start xs:place-items-start  mb-20 sm:my-auto xs:my-auto md:w-auto sm:w-auto lg:w-auto xs:w-auto">
          <h1 className="text-white font-bold text-[2.8rem] sm:text-justify xs:text-justify sm:w-full xs:w-full w-4/6 my-10 md:text-4xl sm:text-4xl  xs:text-3xl">
            {content?.congreso[language].titulo}
          </h1>
          <h3 className="text-white text-justify text-lg sm:text-justify xs:text-justify sm:w-full xs:w-full w-3/6 xs:text-xl ">
            {content?.congreso[language].parrafo}
          </h3>
        </div>
      </div>
    </div>
  );
};
