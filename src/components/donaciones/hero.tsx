import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import { PaypalDonationButton } from "./paypalButton";
import AOS from "aos";
import { useEffect } from "react";

export const HeroDonations: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  if (language === "es") {
    return (
      <div className="relative w-full" style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 35%, rgba(255,255,255,0) 100%), url(https://somosawaqblob.blob.core.windows.net/congress/donation/portadadonations.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}>
        <div className="flex xs:flex-col sm:flex-1 sm:flex-row w-full xs:h-full h-screen relative top-14">

          <div data-aos="fade-right" className="flex flex-1 flex-col basis-9/12 relative xs:basis-4/12 sm:top-0 sm:left-0 xs:mt-10 xs:mb-0 sm:my-24 my-40 ">

            <h2 className="font-bold font-open-sans  text-[#8DC73F] px-10 text-a4xl xs:text-xl sm:text-2xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
            <span className="font-bold font-open-sans  text-white text-a4xl xs:text-xl sm:text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].hero.titlewhite1}
              </span>
              <br />
              <span className="font-bold font-open-sans  text-white text-a4xl xs:text-xl sm:text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].hero.titlewhite1line2}
              </span>
              <span>&nbsp;</span>
              <span>
                {content?.donaciones[language].hero.titlegreen}
              </span>
              <span>&nbsp;</span>
            </h2>
            <h2 className="font-bold font-open-sans  text-white px-10 text-a4xl xs:text-xl sm:text-2xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].hero.titlewhite2}
              </h2>
          </div>

          <div data-aos="zoom-in" className=" relative flex justify-center items-center basis-3/12 xs:mx-4 xs: my-10 mr-10  ">

            <PaypalDonationButton />

          </div>
        </div>
      </div>
    );
  } else {
    // Renderizar la estructura actual para el idioma inglés
    return (
      <div data-aos="fade-right" className="relative w-full">
        <img
          className="w-screen h-full object-cover absolute mix-blend-overlay brightness-50"
          src="https://somosawaqblob.blob.core.windows.net/congress/donation/portadadonations.png"
          alt="bg"
          loading="lazy"
        />
        <div className="flex xs:flex-col sm:flex-1 sm:flex-row w-full xs:h-full h-screen relative top-14">

          <div className="flex flex-1 flex-col basis-9/12 relative xs:basis-4/12 sm:top-0 sm:left-0 xs:mt-10 xs:mb-0 sm:my-24 my-40 ">

            <h2 className="font-bold font-open-sans  text-[#8DC73F] px-10 text-a4xl xs:text-xl sm:text-2xl text-left xs:text-center xs:text-balance sm:text-center sm:text-balance">
              <span>
                {content?.donaciones[language].hero.titlegreen}
              </span>
              <span>&nbsp;</span>
              <span className="font-bold font-open-sans  text-white text-a4xl xs:text-xl sm:text-2xl text-center xs:text-center xs:text-balance sm:text-center sm:text-balance">
                {content?.donaciones[language].hero.titlewhite}
              </span>
            </h2>
          </div>

          <div data-aos="zoom-in" className=" relative flex justify-center items-center basis-3/12 xs:mx-4 xs: my-10 mr-10  ">

            <PaypalDonationButton />

          </div>
        </div>
      </div>
    );
  }
};