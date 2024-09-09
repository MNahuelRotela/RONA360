import React from "react";
import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

interface ManifiestoProps {
  imageUrl: string;
}

export const HeroManifiesto: React.FC<ManifiestoProps> = ({ imageUrl }) => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="flex flex-col mt-20 h-auto w-full px-32 pt-6 lg:px-12 md:px-12 xs:px-10 sm:px-10">
      {/*Manifiesto*/}
      <div data-aos="fade-right" className="flex items-center justify-center xs:flex-col sm:flex-col">
        <div className="w-2/5 xs:w-full sm:w-full">
          <h1 className="text-a5xl font-bold text-dark_gray xs:text-center sm:text-center">
            {content?.congreso[language].manifiesto.section1.title}
          </h1>
          <p className="text-xl text-dark_gray xs:text-balance xs:text-center xs:mb-6 sm:text-balance sm:text-center sm:mb-6">
            {content?.congreso[language].manifiesto.section1.subtitle}
          </p>
        </div>
        <div className="w-3/5 p-6 xs:w-full xs:text-justify xs:p-0 sm:w-full sm:text-justify sm:p-0">
          <p className="text-dark_gray">
            {content?.congreso[language].manifiesto.section1.paragraph}
          </p>
        </div>
      </div>
      {/*Futuro Sostenible*/}
      <div data-aos="fade-down" className="flex flex-col items-center justify-center mt-20">
        <div className="relative flex w-2/5 align-center justify-center xs:w-full xs:pb-44 md:w-3/5 sm:pb-44">
          <img
          className="absolute w-52 2xl:left-[-7rem] 2xl:top-[-2rem] md:left-[-8rem] md:top-[-2rem] lg:left-[-9rem] lg:top-[-2rem] xl:left-[-10rem] xl:top-[-2rem] z-[-1] xs:bottom-0 sm:bottom-0"
            src={`${imageUrl}ecoworld.png`}
            alt={content?.congreso[language].manifiesto.section1.title}
            loading="lazy"
            draggable="false"
          />
          <p className="text-dark_gray text-4xla text-center xs:text-balance sm:text-balance">
            <span>
              {content?.congreso[language].manifiesto.section2.title.textnobold}
            </span>
            <span>&nbsp;</span>
            <span className="font-bold">
              {content?.congreso[language].manifiesto.section2.title.textbold}
            </span>
            <span>&nbsp;</span>
            <span>
              {
                content?.congreso[language].manifiesto.section2.title
                  .textnobold2
              }
            </span>
            <span>&nbsp;</span>
            <span className="font-bold">
              {content?.congreso[language].manifiesto.section2.title.textbold2}
            </span>
          </p>
        </div>
        <div className="mt-6 w-2/3 text-dark_gray xs:w-full sm:w-full">
          <p className="xs:text-justify sm:text-justify">{content?.congreso[language].manifiesto.section2.paragraph}</p>
        </div>
      </div>
      {/*Tu Voz, Nuestro Manifiesto*/}
      <div data-aos="fade-right" className="flex space-between items-center justify-center mt-12 xs:flex-col sm:flex-col">
        <div className="w-8/12 text-dark_gray pr-12 xs:w-full xs:pr-0 xs:mb-4 sm:w-full sm:pr-0 sm:mb-4">
          <p className="text-4xla mb-6 xs:text-center sm:text-center">
            <span>
              {content?.congreso[language].manifiesto.section3.title.textnobold}
            </span>
            <span>&nbsp;</span>
            <span className="font-bold">
              {content?.congreso[language].manifiesto.section3.title.textbold}
            </span>
            <br />
            <span>
              {
                content?.congreso[language].manifiesto.section3.title
                  .textnobold2
              }
            </span>
            <span>&nbsp;</span>
            <span className="font-bold">
              {content?.congreso[language].manifiesto.section3.title.textbold2}
            </span>
          </p>
          <p className="xs:text-justify sm:text-justify">
            {content?.congreso[language].manifiesto.section3.paragraph}
          </p>
        </div>
        <div className="4/12">
          <img
            className="h-auto w-full object-cover"
            src={`${imageUrl}manifiestoilustration.png`}
            alt={content?.congreso[language].manifiesto.section3.title}
            draggable="false"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};