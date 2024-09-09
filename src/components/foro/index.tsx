import { useTranslation } from "../../context/TraslationContext.tsx";
interface ForoProps {
  imageUrl: string;
}

export const Foro: React.FC<ForoProps> = ({ imageUrl }) => {
  const { language, content } = useTranslation();


  // const handleScroll = () => {
  //   window.scrollTo(0, 0);
  // }

  
  return (
    <div className=" w-auto sm:w-auto h-auto scroll-smooth">

       
       <>
        <div className="flex flex-col items-center justify-center w-full h-full">
        <img
          className="w-full h-screen object-cover absolute mix-blend-overlay brightness-50 sm:h-screen"
          src={`${imageUrl}ucaldas.png`}
          alt={content?.foro[language].ej}
          loading="lazy"
        />
          <div className="flex flex-col items-center justify-center w-full h-auto bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white">{content?.foro[language].ej}</h1>
            <h2 className="text-2xl font-bold text-white">{content?.foro[language].ej2.h1}</h2>
          </div>
        </div>
       </>

    </div>
  );
};
