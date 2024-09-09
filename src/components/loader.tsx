import React from "react";
import { useTranslation } from "../context/TraslationContext";

export const Loader: React.FC = () => {
  const { language } = useTranslation();

  const gifSrc =
    language === "es"
      ? "https://somosawaqblob.blob.core.windows.net/congress/Cargando.gif"
      : "https://somosawaqblob.blob.core.windows.net/congress/Loading.gif";

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src={gifSrc}
        className="max-w-full max-h-full"
        alt={language === "es" ? "Cargando" : "Loading"}
      />
    </div>
  );
};