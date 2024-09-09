import React from "react";
import { BannerAgencies } from "./BannerAgencies";
import AgenciesCard from "./CardsAgencies";
import { useTranslation } from "../../../../../context/TraslationContext";
import ContenInmobiliaria from "../../Tours360Conten";

export const Agencies: React.FC = () => {
  const { language } = useTranslation();
  const content = ContenInmobiliaria[language];
  const agencies = content?.real_estate_agencies || []; // Extrae la lista de agencias

  if (agencies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BannerAgencies />
      <div className="px-2 pb-10 bg-[#ECE3D4]">
        <AgenciesCard
          agencies={agencies} // Pasa la lista de agencias
        />
      </div>
    </div>
  );
};
