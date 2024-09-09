// import { BannerHome } from "./bannerHome";
import { Patrocinadores } from "./patrocinadores";
import { CongresoHome } from "./congresoHome";
import { SalaDePrensa } from "./salaDePrensa";
import { Multimedia } from "./multimedia";
import { BannerCTAVisit } from "./banner-visit";
import { Colaboradores } from "./colaboradores";
import { BannerComoLlegar } from "./banner-comoLlegar";
import React, { useEffect, useState } from "react";
import { Loader } from "../loader";
import { BannerEcosocHome } from "./banner-ecosoc";
import { BannerHomeLive } from "./bannerHomeLive";

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-full mt-20">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white h-full w-full">
          <Loader />
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* <BannerHome /> */}
          <BannerHomeLive />
          <Patrocinadores />
          <Colaboradores />
          <BannerEcosocHome/>
          <CongresoHome />
          <SalaDePrensa />
          <BannerComoLlegar />
          <Multimedia />
          <BannerCTAVisit />
        </div>
      </div>
    </div>
  );
};
