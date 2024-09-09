import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';


export const Patrocinadores = () => {
  const { language, content  } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="zoom-in" className="w-full mt-16 px-28 xs:px-10 sm:px-16 md:px-10 xs:mt-36">
      <div className=" flex flex-col items-center justify-center">
        <Link to="/patrocinadores">
          <h2 className="text-3xl font-bold text-green-btn-nav">
            {content?.home[language].patrocinadores.title}
          </h2>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-4 items-center justify-center gap-auto mb-2 xs:gap-10 sm:gap-12 xs:grid-cols-1 sm:grid-cols-1 md:gap-10">

        <div className="flex justify-center items-center">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/AWAQ-Verde%20Horizontal.png"
              alt="awaq"
              className="my-0 mx-0 w-60 object-contain"
              draggable="false"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/patrocinadores">
            <img
              src={window.innerWidth <= 640 ? "https://somosawaqblob.blob.core.windows.net/congress/sponsors/UAM-horizontal.png" : "https://somosawaqblob.blob.core.windows.net/congress/sponsors/uamlogo.png"}
              alt="uamlogo"
              className="my-0 mx-0 w-28 object-contain"
              draggable="false"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/patrocinadores">
            <img
              src="https://somosawaqblob.blob.core.windows.net/congress/sponsors/sophic2.png"
              alt="Sophic"
              className="my-0 mx-0 w-60 object-contain"
              draggable="false"
            />
          </Link>
        </div>

      </div>
    </div>
  );
};