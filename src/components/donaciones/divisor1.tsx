import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

export const Divisor1: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-up" className="flex relative items-center justify-center w-full h-auto mt-20 py-10 bg-[#D1E9B2]">
      <div className="flex flex-col  px-24 xs:px-10 xs:py-12 sm:px-10 sm:py-12">
        <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/comilla.svg" alt="comilla" className="relative w-6 xs:w-8 sm:w-8 md:w-8 mr-2 sm:mr-4  rotate-180" />
        <p className="font-bold font-open-sans italic text-[#1E2F2D] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
          <span>
            {content?.donaciones[language].divisor1.line1}
          </span>
          <span>&nbsp;</span>
          <span className="font-bold font-open-sans italic text-[#8DC73F] text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].divisor1.line2}
          </span>
        </p>
        <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/comilla.svg" alt="comilla" className="relative  flex w-6 xs:w-8 sm:w-8 md:w-8 ml-auto sm:ml-4 md:ml-auto" />
      </div>
    </div>
  );
};