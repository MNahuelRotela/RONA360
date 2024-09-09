import { Contador } from "./Contador/Contador";
import { Information } from "./Information/Information";
import { HiArrowCircleDown } from 'react-icons/hi';
import { AiOutlineDown } from "react-icons/ai";
import { Link, Element } from 'react-scroll';
import React, { useState, useContext } from "react";
import {
  TranslationContext,
  useTranslation,
} from "../../context/TraslationContext";
import { LanguageType } from "../../types/interfaceContext";



export const Cortina: React.FC = () => {
  const { content } = useTranslation();
  const imageUrl = "https://somosawaqblob.blob.core.windows.net/congress/cortina/";
  const { language, setLanguage } = useContext(TranslationContext);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);


  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };


    const handleLanguageChange = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      selectedLanguage: LanguageType
    ) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
      setLanguage(selectedLanguage);
      setLanguageDropdownVisible(false); // Ocultar el menú desplegable después de seleccionar el idioma
    };


  return (
    <div className=" relative">
          <div className="absolute z-[90] xs:right-2 xs:top-2 sm:right-4 sm:top-6 md:right-10 md:top-10 right-24 top-16">
            <button
              id="language-btn"
              className=" p-3  border-[#385019] text-[#385019] bg-[#E9FFCE] border-2 hover:bg-green rounded-xl  cursor-pointer flex justify-center items-center transition-all duration-200  text-xl hover:font-bold hover:text-2xl "
              onClick={toggleLanguageDropdown}
            >
              {language === "es" ? (
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  ES
                  <AiOutlineDown className="ml-1" />
                </div>
              ) : (
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  EN
                  <AiOutlineDown className="ml-1" />
                </div>
              )}
            </button>

            {/* Lista desplegable */}
            {languageDropdownVisible && (
              <div className="absolute top-full right-0 mt-2 bg-green border border-[#385019] text-[#385019] bg-[#E9FFCE] rounded-md overflow-hidden shadow-lg">
                <button
                  className="w-full p-2 text-left  border-[#385019] text-[#385019] bg-[#E9FFCE] hover:text-white hover:bg-[#beeb88] focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "es")}
                >
                  ES
                </button>
                <button
                  className="w-full p-2 text-left border-[#385019] text-[#385019] bg-[#E9FFCE] hover:text-white hover:bg-[#beeb88] focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>
      <div className="flex relative z-50 w-full h-screen  shadow-black shadow-2xl">
        
        <div className=" flex sm:flex-col xs:flex-col xs:items-center xs:justify-start xs:top-4 xs:right-0  sm:items-center sm:justify-start sm:top-4 flex-row absolute w-full h-full justify-center items-start sm:right-0 md:right-10 right-28  z-[90]">
          <img className=" relative w-24 xs:right-0 xs:top-0 sm:right-0 sm:top-0 md:right-4 top-24 right-20 " src="https://somosawaqblob.blob.core.windows.net/congress/logo1c.svg" alt="cortina" />
          <div className="flex flex-col relative  w-auto z-[80] xs:top-0 sm:top-0 sm:mt-4 top-20     ">
            <h1 className="text-white text-2xl font-bold xs:text-center xs:text-xl sm:text-center text-left text-outline leading-3    "> {content?.cortina[language].hero.h1} </h1>
            <h2 className="text-[#FBBD35] text-4xl font-bold xs:text-center xs:text-3xl sm:text-center text-left text-outline mt-4 leading-8   ">{content?.cortina[language].hero.h2}</h2>
            <h2 className="text-[#8DC73F] text-4xl font-bold xs:text-center xs:text-3xl sm:text-center text-left text-outline  ">{content?.cortina[language].hero.h3}</h2>
            <h3 className="text-white text-2xl font-semibold xs:text-center xs:text-xl sm:text-center text-left text-outline    ">{content?.cortina[language].hero.h4}</h3>
            <h3 className="text-white text-2xl font-semibold xs:text-center xs:text-xl sm:text-center text-left text-outline   ">{content?.cortina[language].hero.h5}</h3>

          </div>
        </div>
          <div className=" flex absolute  z-20  h-3/4 top-1/4 w-full  bg-gradient-to-b from-transparent to-[#000000]    ">
          </div>
        <img
          className="w-full h-full bg-center absolute z-10 xs:object-cover sm:object-cover  sm:h-full"
          src={`${imageUrl}cortina.png`}
          alt="cortina"
        />
        <div className="flex w-full h-full absolute items-center justify-center top-24 z-[70]">
          <Contador />
        </div>
        <Link to="information" spy={true} smooth={true} duration={500} className="z-[90] relative flex w-full justify-center  items-end">
            <HiArrowCircleDown className="text-white w-14 h-14 cursor-pointer animate-bounce"  />
        </Link>
      </div>
        <Element name="information" className="absolute z-80   w-full flex flex-col   bg-black h-screen">
          <div className=" z-80 flex relative w-full justify-center mt-10 bg-black ">

          <Information />
          </div>


          <div className=" relative w-full  z-[100] flex justify-center py-10 bg-black px-4">

          <img className=" mb-10    " src="https://somosawaqblob.blob.core.windows.net/congress/colaboran.png" alt="colaboradores" />
          </div>
        </Element>
        
    </div>
  );
};