import { useEffect, useRef } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { Actividad1 } from "./actividad1";
import { Actividad2 } from "./actividad2";
import { Actividad3 } from "./actividad3";
import { Actividad4 } from "./actividad4";
import { Actividad5 } from "./actividad5";
import { Actividad6 } from "./actividad6";
import { Actividad7 } from "./actividad7";

export const ActividadSelector = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  // Refs for activity components
  const actividad1Ref = useRef<HTMLDivElement>(null);
  const actividad2Ref = useRef<HTMLDivElement>(null);
  const actividad3Ref = useRef<HTMLDivElement>(null);
  const actividad4Ref = useRef<HTMLDivElement>(null);
  const actividad5Ref = useRef<HTMLDivElement>(null);
  const actividad6Ref = useRef<HTMLDivElement>(null);
  const actividad7Ref = useRef<HTMLDivElement>(null);

  // Function to scroll to activity component
  const scrollToActivity = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      window.scrollBy(0, -200);
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 100); // Ajusta el tiempo según sea necesario
    }
  };

  return (
    <>
      <div data-aos="zoom-in" className=" ">
        <div className=" mx-10 grid-cols-7 ">
          <button
            className="bg-[#FBBD35] mx-2 px-3  rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad1Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad1}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad2Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad2}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad3Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad3}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad4Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad4}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad7Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad5}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad5Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad6}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad6Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad7}
          </button>
        </div>
        <div ref={actividad1Ref}><Actividad1 /></div>
        <div ref={actividad2Ref}><Actividad2 /></div>
        <div ref={actividad3Ref}><Actividad3 /></div>
        <div ref={actividad4Ref}><Actividad4 /></div>
        <div ref={actividad5Ref}><Actividad5 /></div>
        <div ref={actividad6Ref}><Actividad6 /></div>
        <div ref={actividad7Ref}><Actividad7 /></div>
        <div className=" mx-10 grid-cols-7 ">
          <button
            className="bg-[#FBBD35] mx-2 px-3  rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad1Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad1}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad2Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad2}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad3Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad3}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad4Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad4}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad7Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad5}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad5Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad6}
          </button>
          <button
            className="bg-[#FBBD35] mx-2 px-3 rounded-full text-black text-md text-center my-10 font-medium xs:my-2 sm:my-2 md:my-2 lg:my-2"
            onClick={() => scrollToActivity(actividad6Ref)}
          >
            {content?.visitManizales[language].quehacer.actividades.selector
              .actividad7}
          </button>
        </div>
      </div>
    </>
  );
};
