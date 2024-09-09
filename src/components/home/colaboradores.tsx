import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';


export const Colaboradores = () => {
  const { language, content  } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="zoom-in" className=" justify-center items-center px-28 xs:px-10 sm:px-16 md:px-10 2xl:w-3/4">
      <div className="mt-8 flex flex-col items-center justify-center">
        <Link to="/patrocinadores">
          <h2 className="text-3xl font-bold text-green-btn-nav">
            {content?.home[language].colaboradores.title}
          </h2>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-x-24 items-center justify-center gap-auto mb-0 xs:gap-10 sm:gap-12 xs:grid-cols-2 sm:grid-cols-2 md:gap-10 xl:gap-x-10 lg:gap-x-10 md:gap-x-4">

      <div className="flex justify-center items-center xs:mt-10 sm:mt-10">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/LogoSustainableProject%201.png"
              alt="HumansPro"
              className="my-0 mx-0 w-24 object-contain"
              draggable="false"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/logo-gob-caldas-ampliado.svg"
              alt="Gobernacion de Caldas"
              className="my-0 mx-0 w-64 object-contain"
              draggable="false"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/alcaldia-manizales.png"
              alt="Alcaldia de Manizales"
              className="my-0 mx-0 w-44 object-contain"
              draggable="false"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/Logo%20Federacion%20de%20ONG%20Caldas.png"
              alt="Federacion ONG de Caldas"
              className="my-0 mx-0 w-44 object-contain"
              draggable="false"
            />
          </Link>
        </div>
        



      </div>
    </div>
  );
};