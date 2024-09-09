import { SetStateAction, useState, useRef, useEffect } from "react";
import { useTranslation } from "../../context/TraslationContext.tsx";
import { ScheduleTd } from "./scheduleTd.tsx";
import { ScheduleWd } from "./scheduleWd.tsx";
import { ScheduleThd } from "./scheduleThd.tsx";
import { ScheduleFd } from "./scheduleFd.tsx";
import AOS from "aos";

export const Schedule = () => {
  const { language, content } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref para el contenedor principal

  const seleccionar = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []); // Asegúrate de que AOS se inicialice solo una vez

  useEffect(() => {
    // Desplazar al inicio del componente cuando activeTab cambie
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]); // Solo ejecutar el efecto cuando activeTab cambie

  const nexthandle = () => {
    if (activeTab === 0 || activeTab <= 2) setActiveTab(activeTab + 1);
    else setActiveTab(0);
  };

  // Determinar el texto del botón
  const buttonText = activeTab === 3 ? content?.agenda[language].btnGoBack : content?.agenda[language].btnNext;

  return (
    <>
      <section className="mx-40 md:mx-6 sm:mx-3 xs:mx-[3%] h-auto w-auto" ref={containerRef}>
      <div data-aos="zoom-in" className="mb-10 mt-24 mx-10 justify-center flex h-16">
        <h2 className="text-4xl text-principal_text font-bold sm:text-center sm:h-auto sm:text-xl mx-auto">{content?.agenda[language].title}</h2>
      </div>
      {/* day and date */}
        <ul className="tabs flex text-lg justify-center whitespace-nowrap gap-16 cursor-pointer w-auto lg:gap-12 md:whitespace-normal md:gap-8 md:text-base md:text-center md:hover:text-base sm:text-base sm:w-auto sm:whitespace-normal sm:gap-4 xs:text-md xs:w-auto xs:whitespace-normal xs:gap-3">
          <li className={activeTab === 0 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(0)}>
            <p className="h-20 hover:font-bold w-auto sm:text-base xs:text-sm">{content?.agenda[language].day1.day}<br />{content?.agenda[language].day1.date}</p>
          </li>
          <li className={activeTab === 1 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(1)}>
            <p className="h-20 hover:font-bold w-auto sm:text-base xs:text-sm">{content?.agenda[language].day2.day}<br />{content?.agenda[language].day2.date}</p>
          </li>
          <li className={activeTab === 2 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(2)}>
            <p className="h-20 hover:font-bold w-auto sm:text-base xs:text-sm">{content?.agenda[language].day3.day}<br />{content?.agenda[language].day3.date}</p>
          </li>
          <li className={activeTab === 3 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(3)}>
            <p className="h-20 hover:font-bold w-auto sm:text-base xs:text-sm">{content?.agenda[language].day4.day}<br />{content?.agenda[language].day4.date}</p>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 0 && <ScheduleTd />}
          {activeTab === 1 && <ScheduleWd />}
          {activeTab === 2 && <ScheduleThd />}
          {activeTab === 3 && <ScheduleFd />}
        </div>
      <div data-aos="fade-right" className="my-12 flex justify-end mr-14 gap-[30%] xs:gap-[8%] sm:gap-[8%] md:gap-[15%] lg:gap-[22%]">
        <button className="bg-green-btn-nav rounded-xl text-white font-semibold my-auto flex justify-center align-middle items-center w-48 sm:w-24 sm:h-8 sm:text-sm sm:p-6 xs:w-20 xs:h-6 xs:text-ss xs:p-5 h-12 text-lg" onClick={nexthandle}>
          {buttonText}
        </button>
      </div>
      </section>
    </>
  );
};
