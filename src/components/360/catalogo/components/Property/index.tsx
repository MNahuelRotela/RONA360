import React from "react";
import { useTranslation } from "../../../../../context/TraslationContext";
import ContenInmobiliaria from "../../Tours360Conten";
import AgencyProperties from "./AgencyProperties";
import { BannerProperty } from "./BannerProperties";

export const PropertyView: React.FC = () => {
  const { language } = useTranslation();
  const content = ContenInmobiliaria[language];
  const agencies = content?.real_estate_agencies || []; // Extrae la lista de agencias

  if (agencies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BannerProperty />
        <AgencyProperties />
    </div>
  );
};
