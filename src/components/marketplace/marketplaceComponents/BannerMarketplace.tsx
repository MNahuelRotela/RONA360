import { useTranslation } from "../../../context/TraslationContext";

const BannerMarketplace = () => {
  const { language, content } = useTranslation();
  return (
    <div className="relative" data-aos="fade-right">
      <div
        className="relative w-full h-full mt-20 px-16 py-[186px] bg-cover xs:py-36 bg-[center_top_10%] xl:bg-[center_top_0%]"
        style={{
          backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/marketplace/feria-marketplace.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col xs:w-full z-10">
          <h1 className="text-white font-bold xs:text-3xl sm:text-4xl text-a5xl leading-10 mb-5 sm:mb-0 font-open-sans">
            {content?.marketplace[language].banner.title}
          </h1>
          <h3 className="text-white xs:text-[17px] text-lg mb-5 ">
            {content?.marketplace[language].banner.subtitle}
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

export default BannerMarketplace;