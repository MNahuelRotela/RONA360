import { Actividades } from "./actividades";
import { BannerUam1 } from "./bannerUam1";
import { MapContactUam } from "./mapContactUam";
import { SobreUam } from "./sobreUam";
import { useTranslation } from "../../../context/TraslationContext";
import { Loader } from "../../loader";
import { useEffect, useState } from "react";
import Recinto3D from "./component3d";

export const RecintoUam = () => {
  const { language, content } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Simula un tiempo de carga de 4 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white h-full w-full">
          <Loader />
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <BannerUam1 />
        <div>
          <h3 className="text-dark_gray text-4xl text-center my-10 font-medium">
            {content?.recinto[language].recintoUam.title5.principalTitle}
          </h3>
        </div>
        <Recinto3D />
        <Actividades />
        <SobreUam />
        <MapContactUam />
      </div>
    </div>
  );
};
