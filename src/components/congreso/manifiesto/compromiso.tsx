import React from "react";
import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

interface CompromisoProps {
  imageUrl: string;
}

export const Compromiso: React.FC<CompromisoProps> = ({ imageUrl }) => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-up" className="flex relative items-center justify-center w-full h-auto mt-16 py-10 bg-dark_gray">
      <img
        className="absolute left-5 w-32"
        src={`${imageUrl}greencheck.png`}
        alt={content?.congreso[language].manifiesto.section4.title}
        loading="lazy"
        draggable="false"
        style={{ top: "-70px" }}
      />
      <img
        className="absolute right-10 w-22"
        src={`${imageUrl}greencircle.png`}
        alt={content?.congreso[language].manifiesto.section4.title}
        loading="lazy"
        draggable="false"
        style={{ bottom: "-40px" }}
      />
      <div className="flex flex-col items-center px-32 xs:px-10 xs:py-12 sm:px-10 sm:py-12">
        <p className="font-bold text-white text-2xl mb-6 xs:text-center xs:text-balance sm:text-center sm:text-balance">
          {content?.congreso[language].manifiesto.section4.title}
        </p>
        <p className="text-white xs:text-justify sm:text-justify">
          {content?.congreso[language].manifiesto.section4.paragraph}
        </p>
      </div>
    </div>
  );
};
