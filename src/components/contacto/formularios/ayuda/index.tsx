// import { useTranslation } from "../../context/TraslationContext.tsx";
// interface ContactoProps {
//   imageUrl: string;
// }

import AyudaForm from "./AyudaForm";
import BannerAyuda from "./BannerAyuda";
// import AyudaFormfinal from "./backup";


export const Ayuda: React.FC = () => {
//   const { language, content } = useTranslation();


 

  
  return (
    <div>
  <BannerAyuda/>
  <AyudaForm/>

    </div>
  );
};
