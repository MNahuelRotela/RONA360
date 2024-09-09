import React from 'react';
import { useTranslation } from "../../context/TraslationContext.tsx";
import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';


const LineasTematicas: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className='w-full h-full mt-24' data-aos="zoom-in">
      <div className="flex justify-center mb-16 text-center text-[40px] xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-20 md:text-[30px] md:mb-10 ">
        <Link to="/lineas-tematicas">
        <h2 >
        {content?.congreso[language].lineas.lt_title}
        </h2>
        </Link>
        </div>
      <div className='grid grid-cols-9 xs:flex xs:flex-col sm:flex sm:flex-col sm:items-center'>
        <Link to="/lineas-tematicas" className='col-start-3 col-span-3'>
        <div className='col-start-3 col-span-3 '>
          <img src="https://somosawaqblob.blob.core.windows.net/congress/congress/congresov2/conservacion.png" alt="iamge1" />
          <span className='text-lg xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.congreso[language].lineas.tema_4}</span>
        </div>
        </Link>
        <Link to="/lineas-tematicas" className='col-span-3 xs:mt-14 sm:mt-14'>
        <div className='col-span-3 xs:mt-14 sm:mt-14'>
          <img src="https://somosawaqblob.blob.core.windows.net/congress/congress/congresov2/educacion.png" alt="image2" />
          <span className='text-lg xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.congreso[language].lineas.tema_3}</span>
        </div>
        </Link>
        <Link to="/lineas-tematicas" className='col-start-3 col-span-3 mt-14'>
        <div className='col-start-3 col-span-3 mt-14'>
          <img src="https://somosawaqblob.blob.core.windows.net/congress/congress/congresov2/politicas.png" alt="image3" />
          <span className='text-lg xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.congreso[language].lineas.tema_2}</span>
        </div>
        </Link>
        <Link to="/lineas-tematicas" className='col-span-3 mt-14'>
        <div className='col-span-3 mt-14'>
          <img src="https://somosawaqblob.blob.core.windows.net/congress/congress/congresov2/fuentes.png" alt="image4" />
          <span className='text-lg xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.congreso[language].lineas.tema_1}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default LineasTematicas;