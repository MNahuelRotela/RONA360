import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const TeContamosMas = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { language, content } = useTranslation();

  return (
    <div data-aos="fade-up" className="flex items-center justify-center w-full mt-10 px-32 xs:px-10 sm:px-10">
      <div className="flex flex-col items-center justify-center w-10/12 xs:w-full sm:w-full md:w-full">
        <p className="text-4xl text-dark_gray font-bold mb-6 xs:text-center xs:text-balance sm:text-center sm:text-balance md:text-balance md:text-center">
          {content?.congreso[language].manifiesto.section7.title}
        </p>
        <Link to="/inscripcion">
        <button className="py-3 px-6 bg-green-btn-nav rounded-md font-bold text-white text-right hover:bg-dark-yellow transition-all duration-300">
          {content?.congreso[language].manifiesto.section7.button}
        </button>
        </Link>
      </div>
    </div>
  );
};
