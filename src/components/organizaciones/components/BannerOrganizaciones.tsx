import { Link } from "react-router-dom";
import { useTranslation } from "../../../context/TraslationContext";

export const BannerOrganizaciones = () => {
  const { language, content } = useTranslation();
  return (
    <div className="relative" data-aos="fade-right">
      <div
        className="relative w-full h-full mt-20 px-8 py-32 bg-cover xs:py-36 bg-[center_top_100%] xl:bg-[center_top_0%]"
        style={{
          backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/home/landing.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col xs:w-full z-10">
          <h1 className="text-white font-bold xs:text-3xl sm:text-4xl text-a4xl leading-10 mb-4 sm:mb-0 font-open-sans">
            {content?.organizaciones[language].banner.title}
          </h1>
          <h4 className="text-white my-2 text-2xl font-open-sans">
            {content?.organizaciones[language].banner.subtitle2}
          </h4>

          <h3 className="relative text-white xs:text-xl text-lg font-light font-open-sans">
            {content?.organizaciones[language].banner.subtitle}
            <span className="absolute bottom-0 left-0 w-[750px] h-[1px] bg-gray-300 sm:w-[350px] xs:w-[260px]"></span>
          </h3>
          <Link to="/contacto">
            <button className="bg-green-btn-nav text-white px-4 mt-10 py-1 w-24  rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow">
              {content?.organizaciones[language].banner.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
