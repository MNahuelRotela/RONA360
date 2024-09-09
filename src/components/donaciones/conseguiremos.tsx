import React, { useEffect } from 'react';
import { useTranslation } from "../../context/TraslationContext.tsx";
import AOS from 'aos';

interface ConseguiremosDonationsProps {
    scrollTo: () => void; 
  }

const Conseguiremos: React.FC<ConseguiremosDonationsProps> = ({ scrollTo }) => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div>
    <div className="xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-1 md:grid grid grid-cols-2 mt-20 mb-20 " data-aos="zoom-in">
      <div className="flex flex-col items-center justify-center w-full h-auto bg-auto bg-center bg-no-repeat bg-opacity: 0.4"
        style={{
          backgroundImage: `linear-gradient(20deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 15%, rgba(255,255,255,0) 100%), url(https://somosawaqblob.blob.core.windows.net/congress/donation/planetbanner.png)`,
        }}>
      </div>
      <div className="bg-[#FDE5AE] text-black flex flex-col items-center justify-start">
        <h2 className="text-3xl font-bold text-center mb-10 mt-10">{content?.donaciones[language].lastcall.title}</h2>
        {window.innerWidth >= 768 ? (
        <div className='flex w-full justify-center items-center'>
          <div className="relative w-full h-[34rem] overflow-x-clip justify-center p-10">
            <div className="w-[22.0625rem] h-[15.375rem] bg-[#C7BB93] relative bottom-4 left-64" style={{ borderRadius: '100%' }}>
              <span className="absolute inset-0 flex justify-center items-center font-bold text-black text-center px-16">{content?.donaciones[language].lastcall.bubble2}</span>
            </div>
            <div className="w-[21rem] h-[14.625rem] bg-[#B5AE79] relative bottom-52" style={{ borderRadius: '100%' }}>
              <span className="absolute inset-0 flex justify-center items-center font-bold text-black text-center">{content?.donaciones[language].lastcall.bubble1}</span>
            </div>
            <div className="w-[21rem] h-[9.375rem] bg-[#B3A983] relative bottom-72 left-36 z-10" style={{ borderRadius: '100%' }}>
              <span className="absolute inset-0 flex justify-center items-center font-bold text-black text-center">{content?.donaciones[language].lastcall.bubble3}</span>
            </div>
            <div className="w-[15.25rem] h-[11.75rem] bg-[#D3D088] relative bottom-[21rem] left-12 z-0" style={{ borderRadius: '100%' }}>
              <span className="absolute inset-0 flex justify-center items-center font-bold text-black text-center">{content?.donaciones[language].lastcall.bubble4}</span>
            </div>
          </div>
        </div>
        ) : (
            <ul className="text-center text-xl font-bold mx-10 gap-y-4">
            <li>{content?.donaciones[language].lastcall.bubble1}</li>
            <li>{content?.donaciones[language].lastcall.bubble2}</li>
            <li>{content?.donaciones[language].lastcall.bubble3}</li>
            <li>{content?.donaciones[language].lastcall.bubble4}</li>
          </ul>
        )}
          <button className="bg-[#FBBD35] mt-4 text-black font-bold text-base px-4 py-3 rounded-lg mb-10 relative xs:left-0 left-32" onClick={scrollTo}>{content?.donaciones[language].lastcall.button}</button>
      </div>
    </div>
    </div>
  );
};

export default Conseguiremos;
