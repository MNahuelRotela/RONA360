import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

export const Agradecimiento: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-right" className="relative w-full" style={{
      backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 35%, rgba(255,255,255,0) 100%), url(https://somosawaqblob.blob.core.windows.net/congress/donation/portadadonations.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}>

    <div className="flex xs:flex-col sm:flex-1 sm:flex-row w-full xs:h-full h-screen relative top-4">

      <div className="flex flex-1 flex-col basis-9/12 relative xs:basis-4/12 sm:top-0 sm:left-0 xs:mt-10 xs:mb-0 sm:my-24 my-40 ">

        <h2 className="font-bold font-open-sans uppercase  text-[#8DC73F] px-10 text-a4xl xs:text-xl sm:text-2xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
        <span className="font-bold font-open-sans   text-a4xl xs:text-xl sm:text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].thanks.title}
          </span>
        </h2>
        <h2 className="font-bold font-open-sans text-balance  text-white px-10 text-2xl xs:text-xl sm:text-2xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].thanks.line1}
        </h2>
        <h2 className="font-bold font-open-sans text-balance  text-white px-10 mt-8 text-xl xs:text-xl sm:text-xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].thanks.line2}
        </h2>
        <h2 className="font-bold font-open-sans text-balance  text-white px-10 mt-8 text-xl xs:text-xl sm:text-xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
            {content?.donaciones[language].thanks.line3}
        </h2>
        <Link to="/" className=" w-80">
        <button className="bg-[#8DC73F] w-80 text-white font-bold font-open-sans mx-10 uppercase text-lg px-10 py-2 mt-8 rounded-lg  hover:bg-[#3e5520]">
            {content?.donaciones[language].thanks.button}
        </button>
        </Link>
      </div>

      <div className=" relative flex justify-center items-center basis-3/12 xs:mx-4 xs: my-10 mr-10  ">
        <img src="https://somosawaqblob.blob.core.windows.net/congress/donation/mundosostenible.png" alt="objetive" className="" />
      </div>
    </div>
  </div>
);
};