import { useTranslation } from "../../../context/TraslationContext";

export const BannerNoticias = () => {
  const { language, content } = useTranslation();
  return (
    <div className="relative" data-aos="fade-right">
      <div
        className="relative w-full h-full mt-20 px-8 py-48 bg-cover xs:py-36 bg-[center_top_20%] xl:bg-[center_top_0%]"
        style={{
          backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/sala-de-prensa/sala-de-prensa.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col xs:w-full z-10">
          <h1 className="text-white font-bold xs:text-3xl sm:text-4xl text-a5xl leading-10 mb-5 sm:mb-0">
            {content?.noticias[language].banner.title}
          </h1>
          <h3 className="relative text-white xs:text-xl text-xl font-light">
            {content?.noticias[language].banner.subtitle}
            <span className="absolute bottom-0 left-0 w-36 h-[1px] bg-gray-300"></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

