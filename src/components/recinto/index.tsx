import { useTranslation } from "../../context/TraslationContext.tsx";
import { Map } from "./map.tsx";
import { SetStateAction, useState } from "react";

const defaultProps = {
  centerPacora: {
    lat: 5.529105586392211,
    lng: -75.45975221736184
  },
  centerUam: {
    lat: 5.067651077289185,
    lng: -75.50272368888025
   },
  zoom: 16
  }

interface RecintoProps {
  imageUrl: string;
}

export const Recinto: React.FC<RecintoProps> = () => {
  const { language, content } = useTranslation();
  const [activeTab, setactiveTab] = useState(0);
  const seleccionar = (index: SetStateAction<number>) => {
    setactiveTab(index);
  };

  return (
    <div className=" w-full sm:w-auto h-full scroll-smooth ">
      {/* title */}
      <div className="  mb-10 mt-24 mx-10 justify-center flex h-16 " >
        <h2 className="text-3xl text-principal_text font-bold sm:text-center sm:h-auto sm:text-xl">{content?.recinto[language].title}</h2>
      </div>
      {/* location map*/}
        <section className="mx-10 md:mx-6 sm:mx-3 h-auto w-auto" >
          <ul className="tabs flex text-xl justify-center whitespace-nowrap gap-16 cursor-pointer w-auto lg:gap-12 md:whitespace-normal md:gap-8 md:text-base md:text-center md:hover:text-base sm:text-base sm:w-auto sm:whitespace-normal sm:gap-4">
            <li className={activeTab == 0 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(0)}>
              <p className="h-20 hover:font-bold w-auto sm:text-base ">{content?.recinto[language].Location.location1.title}</p>
            </li>
            <li className={activeTab == 1 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(1)}>
              <p className="h-20 hover:font-bold  w-auto sm:text-base">{content?.recinto[language].Location.location2.title}</p>
            </li>
            <li className={activeTab == 2 ? "active" : "w-[33%] whitespace-pre-line text-center text-textdisabled"} onClick={() => seleccionar(2)}>
              <p className="h-20 hover:font-bold w-auto sm:text-base">{content?.recinto[language].Location.location3.title}</p>
            </li>  
          </ul>
          <div className="tab-content">
             {/* map of manizales */}
             {
            activeTab === 0 &&  
             <Map 
               defaultZoom={content?.recinto[language].Location.location1.zoom} 
               bootstrapURLKeys= {content?.recinto[language].Location.key}
               defaultCenter= {content?.recinto[language].Location.location1.defaultcenter}
               />}
              {/* map of university of manizales */}
             { 
             activeTab === 1 && 
             <Map 
               defaultZoom={content?.recinto[language].Location.location2.zoom} 
               bootstrapURLKeys= {content?.recinto[language].Location.key}
               defaultCenter= {defaultProps.centerUam}
               />}
              {/* map od pacora */}
              { 
             activeTab === 2 && 
             <Map 
               defaultZoom={content?.recinto[language].Location.location3.zoom} 
               bootstrapURLKeys= {content?.recinto[language].Location.key}
               defaultCenter= {defaultProps.centerPacora}
               />}
          </div>
      </section>
    </div>
  );
};