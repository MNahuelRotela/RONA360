import { useTranslation } from "../../context/TraslationContext";
// import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from 'react';

export const Actividad3: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-full grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1" data-aos="fade-right">
      
      <div className="w-full h-full">
        <img
          src={`https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/coffe-tour.png`}
          alt="Caldas"
          className="w-full h-full  object-cover"
          loading="lazy"
          draggable="false"
        />
      </div>
      
      <div className=" flex justify-center items-center flex-col px-10 text-left text-balance py-10 bg-[#FDE5AE] xs:px-12 sm:px-12 md:px-12">
        <div className=" mx-10 flex flex-col justify-center items-center">

        <h3 className=" xs:px-2 sm:px-2 xs:text-xl sm:text-xl  text-4xl font-bold xs:text-center sm:text-center text-center">
        {content?.visitManizales[language].quehacer.actividades.actividad3.titulo}
        </h3>
        <h3 className=" xs:px-2 sm:px-2 xs:text-xl sm:text-xl  text-2xl font-bold xs:text-center sm:text-center text-center">
        {content?.visitManizales[language].quehacer.actividades.actividad3.subtitulo}
        </h3>
        <p className="mt-8 xs:text-center sm:text-center text-left flex justify-center text-base">
        {content?.visitManizales[language].quehacer.actividades.actividad3.descripcion}
        </p>
        <ul className="mt-4 xs:text-center sm:text-center text-left text-base list-disc ">
          <p className="">

        {content?.visitManizales[language].quehacer.actividades.actividad3.ul1.title}
          </p>
        <li className="ml-5">{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li1}</li>
        <li className="ml-5">{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li2}</li>
        <li className="ml-5">{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li3}</li>
        <li className="ml-5">{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li4}</li>
        <li className="ml-5">{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li5}
        <br/>
        <span>{content?.visitManizales[language].quehacer.actividades.actividad3.ul1.li5br}</span></li>
        </ul>
       
        <p className="mt-4 xs:text-center sm:text-center text-left font-bold font-open-sans">
        {content?.visitManizales[language].quehacer.actividades.actividad3.textobold}
        </p>

        {/* <Link to="instagram.com" target="_blank" className=" flex justify-center">
        <div className=" flex gap-x-4 justify-start xs:justify-center sm:justify-center">
          <img src={`https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/venecia-logo.png`} alt="Caldas" className="w-20  object-cover" loading="lazy" draggable="false" />
        </div>
        </Link> */}
        
        {/* <div className=" flex gap-x-4 justify-start xs:justify-center sm:justify-center">
          <Link to="/congreso" className=" flex justify-center">
            <button className="mt-8 px-4 py-2 font-bold  bg-dark-yellow transition duration-300 hover:bg-white hover:text-dark-yellow">
            {content?.visitManizales[language].quehacer.actividades.actividad3.button}
            </button>
          </Link>
        </div> */}
        </div>
      </div>


    </div>
  );
};