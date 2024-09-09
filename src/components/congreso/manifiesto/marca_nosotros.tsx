import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

export const Marca_Nosotros = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="zoom-in" className="flex relative flex-col items-center w-full px-32 py-16 xs:px-10 sm:px-10">
      <div className="flex flex-col absolute right-0 bottom-72 xs:bottom-[47%] sm:bottom-[43%] md:bottom-[43%]">
        <button className="bg-d_green my-1 py-2 px-4 text-white text-right hover:text-d_green hover:bg-white hover:font-bold transition-all duration-300">
        {content?.congreso[language].manifiesto.button1}
        </button>
        <button className="bg-d_green my-1 py-2 px-4 text-white text-right hover:text-d_green hover:bg-white hover:font-bold transition-all duration-300">
        {content?.congreso[language].manifiesto.button2}
        </button>
      </div>
      {/*Deja tu marca*/}
      <div className="flex flex-col w-9/12 items-center justify-center xs:w-full xs:mb-32 sm:mb-32 sm:w-full md:w-full md:mb-28">
        <div className="mb-6 text-center text-balance">
          <p className="text-4xl text-dark_gray xs:text-center sm:text-center">
            <span>
              {content?.congreso[language].manifiesto.section5.title.textnobold}
            </span>
            <span>&nbsp;</span>
            <span className="font-bold">
              {content?.congreso[language].manifiesto.section5.title.textbold}
            </span>
          </p>
        </div>
        <p className="mb-6 text-dark_gray xs:text-justify sm:text-justify">
          {content?.congreso[language].manifiesto.section5.paragraph}
        </p>
        <p className="text-xl text-dark_gray font-bold xs:text-center xs:text-balance sm:text-center sm:text-balance">
          {content?.congreso[language].manifiesto.section5.paragraphbold}
        </p>
      </div>
      {/*Unete a Nosotros*/}
      <div className="flex w-full items-center justify-center pt-24">
          <div className="flex flex-col items-center justify-center w-10/12 xs:w-full sm:w-full md:w-full">
            <p className="text-4xl text-dark_gray mb-6 xs:text-center xs:text-balance sm:text-center sm:text-balance md:text-center md:text-balance">{content?.congreso[language].manifiesto.section6.title}</p>
            <p className="text-dark_gray xs:text-justify sm:text-justify">{content?.congreso[language].manifiesto.section6.paragraph}</p>
          </div>
      </div>
    </div>
  );
};
