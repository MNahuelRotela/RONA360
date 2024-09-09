import { useTranslation } from "../../../context/TraslationContext";
import Maps from "./Maps";

const MapsMarketplace = () => {
  const { language, content } = useTranslation();
  return (
    <div className="mt-36" data-aos="fade-up">
      <div
        className="max-w-7xl m-auto flex flex-col items-center justify-center xl:max-w-5xl xl:m-auto lg:max-w-3xl lg:m-auto md:max-w-xl md:m-auto sm:max-w-md sm:m-auto xs:max-w-md xs:m-auto"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold mb-10 text-d_green md:mb-5 text-center xs:text-3xl xs:mb-4">
          {content?.marketplace[language].mapa.title}
        </h1>
        <div
          className="grid grid-cols-2 gap-32 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xs:gap-10 sm:gap-10 md:gap-10 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="flex justify-center relative">
            <Maps />
          </div>
          <div className="flex flex-col relative top-[20%] md:top-0 sm:top-0 xs:top-0 lg:top-10 xs:px-8">
            <p className="pr-24 pb-10 text-justify text-balance text-lg xl:text-base lg:text-[13px]  sm:text-base  sm:pr-0  xs:text-sm  xs:pr-0 md:text-base md:pr-0">
              {content?.marketplace[language].mapa.description}
            </p>
            <section className=" flex flex-col justify-end">
              <h4 className="font-bold text-xl">
                {content?.recinto[language].recintoUam.title4.titleUam}
              </h4>
              <p className="text-base text-principal_text">
                {content?.recinto[language].recintoUam.title4.locationUam}
              </p>
              <h4 className="font-bold text-xl">
                {content?.recinto[language].recintoUam.title4.telTitleUam}
              </h4>
              <p className="text-base text-principal_text">
                {content?.recinto[language].recintoUam.title4.telUam}
              </p>
              <p className="text-base text-principal_text">
                {content?.recinto[language].recintoUam.title4.telUam1}
              </p>
              <p className="text-base text-principal_text">
                {content?.recinto[language].recintoUam.title4.telUam2}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsMarketplace;