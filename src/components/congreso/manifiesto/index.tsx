import { useEffect } from "react";
import { HeroManifiesto } from "./HeroManifiesto";
import { Compromiso } from "./compromiso";
import { Marca_Nosotros } from "./marca_nosotros";
import { TeContamosMas } from "./teContamosMas";
// import { SelectorSocios } from "./SelectorSocios";
// import { FromBasic } from "./FormBasic";

interface SociosProps {
  imageUrl: string;
}
export const Manifiesto: React.FC<SociosProps> = ({ imageUrl })=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroManifiesto imageUrl={imageUrl} />
      <Compromiso imageUrl={imageUrl} />
      <Marca_Nosotros />
      <TeContamosMas />
    </>
  );
};
