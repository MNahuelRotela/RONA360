// import React, { useState } from 'react';
import { useTranslation } from '../../../../context/TraslationContext';
import AOS from 'aos';
import { useEffect } from 'react';


const BannerRegistro: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-right" className=' mt-20'>
      <div className="w-full h-full px-16 py-14"       
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 35%, rgba(255,255,255,0) 100%), url(https://somosawaqblob.blob.core.windows.net/congress/congress/Congresobanner.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}>
        <div className="flex flex-col w-2/4 md:w-3/4 xs:w-full">
        <h1 className="text-white xs:text-3xl font-bold text-4xl leading-10 mb-8">{content?.contactform[language].registrotitle}</h1>
        <p className="text-white mb-4 font-bold  text-balance">
        {content?.contactform[language].registrosubtitle}
        </p>
        <p className="text-white mb-8  text-balance">
        {content?.contactform[language].registrosubtitle2}
        </p>
        </div>


      </div>

    </div>
  );
};

export default BannerRegistro;
