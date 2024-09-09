import React from 'react';
import { useTranslation } from "../../context/TraslationContext.tsx";
import { useEffect } from 'react';
import AOS from 'aos';


const Beneficios: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className='flex flex-wrap justify-center gap-32 mt-32 mb-40 xl:gap-20' data-aos="zoom-in">
      <div className="relative w-[500px] h-[350px] xl:w-[420px] xl:h-[280px]  md:w-[460px] md:h-[330px] sm:w-[350px] sm:h-[280px] xs:w-[300px] xs:h-[230px]">
        <div className="absolute inset-0 bg-[#FDE5AE] flex items-center justify-center text-white z-10 drop-shadow-xl">
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-50px)] -translate-y-[calc(50%-40px)] w-[500px] h-[350px] bg-[#1E2F2D] text-white z-20 drop-shadow-xl xl:w-[420px] xl:h-[280px]  md:w-[460px] md:h-[330px] sm:w-[350px] sm:h-[280px] xs:w-[280px] xs:h-[230px]  xs:-translate-x-[calc(62%-50px)] xs:-translate-y-[calc(55%-40px)]">
          <h1 className='text-4xl text-left relative ml-10 mb-2 mt-4 text-white xl:text-2xl  md:text-3xl sm:text-2xl sm:ml-5 xs:text-xl xs:ml-3'>
            {content?.beneficios[language].inversores.titulo}
          </h1>
          <ul className="text-al ml-2 sm:ml-0 sm:text-[16px]">
            {content?.beneficios[language].inversores.lista.map((item: string, index: number) => (
              <li className="mb-4 ml-10 font-medium mr-10 xl:mb-2 xs:mb-0 xs:ml-5 xs:mr-0" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative w-[500px] h-[350px] xl:w-[420px] xl:h-[280px]  md:w-[460px] md:h-[330px] sm:w-[350px] sm:h-[280px] xs:w-[300px] xs:h-[230px]">
        <div className="absolute inset-0 bg-[#1E2F2D] flex items-center justify-center text-white z-10 drop-shadow-2xl">
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-50px)] -translate-y-[calc(50%-40px)] w-[500px] h-[350px] bg-[#FDE5AE] z-20 drop-shadow-xl xl:w-[420px] xl:h-[280px]  md:w-[460px] md:h-[330px] sm:w-[350px] sm:h-[280px] xs:w-[280px] xs:h-[230px] xs:-translate-x-[calc(62%-50px)] xs:-translate-y-[calc(55%-40px)]">
          <h1 className='text-4xl text-left relative ml-10 mb-2 mt-4 xl:text-2xl md:text-3xl sm:text-2xl sm:ml-5 xs:text-xl xs:ml-3'>
            {content?.beneficios[language].participantes.titulo}
          </h1>
          <ul className="text-al ml-2 sm:ml-0 sm:text-[16px] xs:ml-0 xs:text-[14px]">
            {content?.beneficios[language].participantes.lista.map((item: string, index: number) => (
              <li className="mb-4 ml-10 font-medium mr-10 xl:mb-2 sm:mb-1 sm:ml-5 xs:mb-0 xs:ml-5 xs:mr-0" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
