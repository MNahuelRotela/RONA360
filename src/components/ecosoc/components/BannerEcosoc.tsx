import { useTranslation } from "../../../context/TraslationContext";

const BannerEcosoc = () => {
  const { language, content } = useTranslation();
  return (
    <div className="relative" data-aos="fade-right">
      <div
        className="relative w-full h-full mt-20 px-16 py-[186px] bg-cover xs:py-36 bg-[center_top_10%] xl:bg-[center_top_0%] sm:px-8 xs:px-8"
        style={{
          backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/ecosoc/ecosoc_inauguracion_foto_banner.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col xs:w-full z-10">
          <h1 className="text-white text-4xl w-[800px] font-semibold xs:text-2xl sm:text-3xl leading-10 mb-5 sm:w-full sm:leading-10 sm:mb-5 lg:text-3xl lg:w-[550px] md:text-3xl md:w-[520px] xs:w-full xs:leading-none">
            {content?.ecosoc[language].bannerEcosoc.title}
          </h1>
          <h3 className="text-white xs:text-sm text-lg mb-5 w-2/4 ml-1 xs:w-[250px]">
            {content?.ecosoc[language].bannerEcosoc.subtitle}
          </h3>
          {/* <Link to="/404">
            <button className="bg-green-btn-nav text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow">
              {content?.marketplace[language].banner.button}
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BannerEcosoc;