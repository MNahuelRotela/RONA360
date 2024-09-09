import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';

export const GaleriaHome: React.FC = () => {
  const { language, content  } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-full flex flex-col items-center justify-center mb-20" data-aos="fade-right" >
      <div>
        <h2 className="text-3xl font-bold text-dark-yellow">{content?.home[language].galeria.title}</h2>
      </div>
      <div className="grid grid-cols-2 justify-center gap-12 mt-20 xs:grid-cols-1 sm:grid-cols-1 xs:px-8 sm:px-10 md:px-12">
        <div className="w-full h-auto">
          <img
            src={`https://somosawaqblob.blob.core.windows.net/congress/home/galeria1.png`}
            alt="Caldas"
            className="w-full h-80 rounded-md object-cover sm:h-auto"
            loading="lazy"
            draggable="false"
          />
          <h3 className="text-xl text-center my-4">Caldas</h3>
        </div>
        <div className="w-full h-auto">
          <img
            src={`https://somosawaqblob.blob.core.windows.net/congress/home/galeria2.png`}
            alt="Caldas"
            className="w-full h-80 rounded-md object-cover sm:h-auto"
            loading="lazy"
            draggable="false"
          />
          <h3 className="text-xl text-center my-4">Caldas</h3>
        </div>
      </div>
    </div>
  );
};
