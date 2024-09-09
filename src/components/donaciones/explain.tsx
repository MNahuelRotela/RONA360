import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

export const Explain: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-right" className="flex justify-center items-start pt-10">
      <div className=" grid grid-cols-3 xs:flex-col sm:flex-col xs:gap-y-8 sm:gap-y-8 items-start mx-32 gap-x-24">
        <div className="flex flex-col justify-center items-center ">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/bed.png" alt="bed" className="relative h-10 " />
          <p className="font-bold font-open-sans italic text-[#8DC73F] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon1green}
          </p>
          <p className="font-bold font-open-sans italic text-[#1E2F2D] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon1black}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/food.png" alt="bed" className="relative h-10" />
          <p className="font-bold font-open-sans italic text-[#8DC73F] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon2green}
          </p>
          <p className="font-bold font-open-sans italic text-[#1E2F2D] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon2black}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/transport.png" alt="bed" className="relative h-10" />
          <p className="font-bold font-open-sans italic text-[#8DC73F] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon3green}
          </p>
          <p className="font-bold font-open-sans italic text-[#1E2F2D] text-xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance xs:text-base sm:text-base md:text-lg">
            {content?.donaciones[language].forwhat.icon3black}
          </p>
        </div>
      </div>
    </div>
  );
};
