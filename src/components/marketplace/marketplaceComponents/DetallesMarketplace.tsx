import { useTranslation } from "../../../context/TraslationContext";

const DetallesMarketplace = () => {
  const { language, content } = useTranslation();
  return (
    <div
      className=" mt-10 max-w-7xl m-auto flex flex-col items-center justify-center xl:max-w-5xl xl:m-auto lg:max-w-3xl lg:m-auto md:max-w-xl md:m-auto sm:max-w-md sm:m-auto xs:max-w-xs xs:m-auto"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold mb-10 text-d_green md:mb-5 text-center xs:text-3xl xs:mb-4">
        {content?.marketplace[language].detallesMarketplace.title}
      </h1>
      <div
        className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xs:p-5"
        data-aos="fade-up"
      >
        <div className="flex flex-col">
          <p className="pr-16  text-justify text-balance text-lg lg:text-[15px] xl:text-base   sm:text-base sm:text-center sm:pr-0  xs:text-base  xs:pr-0 md:text-base md:text-center md:pr-0">
            {content?.marketplace[language].detallesMarketplace.description1}
          </p>
          <p className="pr-16  text-justify text-balance text-lg mt-8 mb-4 xl:text-base md:mt-6 lg:mt-4 lg:text-[13px]  sm:text-base sm:text-center sm:pr-0 xs:text-base  xs:pr-0 md:text-base md:text-center md:pr-0">
            <span>
              {content?.marketplace[language].detallesMarketplace.description2}
            </span>
          </p>
        </div>
        <div className="flex justify-center relative">
          <img
            className="w-full h-[70%] object-cover rounded-2xl"
            src="https://somosawaqblob.blob.core.windows.net/congress/marketplace/openfield-marketplace.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DetallesMarketplace;