import { useTranslation } from "../../../context/TraslationContext.tsx";
import { Link } from "react-router-dom";


export const Propuesta: React.FC = () => {
  const { language, content } = useTranslation();

  return (
    <div className="mt-24 w-full sm:w-auto h-auto scroll-smooth" data-aos="zoom-in">
      <div className="flex flex-col items-center justify-center w-full h-45">
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 grid-cols-2 mt-10 mb-10 w-full px-14 gap-7">
          <div
            className="flex flex-col items-center w-full h-auto px-12 py-12 bg-[#FDE5AE] rounded-md shadow-inner"
            data-aos="fade-up"
          >
            <Link to="/propuesta-de-valor">
            <h2 className="text-2xl mb-7 font-semibold text-center xs:text-xl sm:text-xl md:text-xl">
            {content?.congreso[language].propuesta.card1.title} <br /> {content?.congreso[language].propuesta.card1.title2}
            </h2>
            </Link>
            <p>
            {content?.congreso[language].propuesta.card1.paragraph}
            </p>
          </div>
          <div
            className="flex flex-col items-center w-full h-auto px-12 py-12 bg-opacity-90 bg-[#FDE5AE] rounded-md shadow-inner"
            data-aos="fade-up"
          >
            <Link to="/propuesta-de-valor">
            <h2 className="text-2xl mb-7 font-semibold text-center xs:text-xl sm:text-xl md:text-xl" >
            {content?.congreso[language].propuesta.card2.title} <br /> {content?.congreso[language].propuesta.card2.title2}
            </h2>
            </Link>
            <p>
            {content?.congreso[language].propuesta.card2.paragraph}
            </p>
          </div>
          <div
            className="flex flex-col items-center w-full h-auto px-12 py-12 bg-opacity-90 bg-[#FDE5AE] rounded-md shadow-inner"
            data-aos="fade-up"
          >
            <Link to="/propuesta-de-valor">
            <h2 className="text-2xl mb-7  font-semibold text-center xs:text-xl sm:text-xl md:text-xl">
            {content?.congreso[language].propuesta.card3.title} <br /> {content?.congreso[language].propuesta.card3.title2}
            </h2>
            </Link>
            <p>
            {content?.congreso[language].propuesta.card3.paragraph}
            </p>
          </div>
          <div
            className="flex flex-col items-center w-full h-auto px-12 py-12 bg-opacity-90 bg-[#FDE5AE] rounded-md shadow-inner"
            data-aos="fade-up"
          >
            <Link to="/propuesta-de-valor">
            <h2 className="text-2xl mb-7 font-semibold text-center xs:text-xl sm:text-xl md:text-xl">
            {content?.congreso[language].propuesta.card4.title} <br /> {content?.congreso[language].propuesta.card4.title2}
            </h2>
            </Link>
            <p>
            {content?.congreso[language].propuesta.card4.paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};