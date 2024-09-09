import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect, useState } from "react";

export const SalaDePrensa: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { language, content } = useTranslation();

  const handleImageEnter = (index: number | null) => {
    setActiveImage(index);
  };

  const handleImageLeave = () => {
    setActiveImage(null);
  };

  const handleImageClick = (index: number | null) => {
    setActiveImage(index);
  };

  return (
    <div className=" mb-20 2xl:mt-16 " data-aos="fade-up">
      <div className="my-16 ">
        <h2 className="flex justify-center text-3xl font-bold text-green-btn-nav">
          {content?.home[language].news.title}
        </h2>
      </div>
      <div className="flex flex-wrap space-x-4 lg:space-x-2 md:flex-col md:space-x-0 md:space-y-1 sm:flex-col sm:space-x-0 sm:space-y-1 xs:flex-col xs:space-x-0 xs:space-y-1">
        <div
          className={`group relative overflow-hidden transition-all duration-500 ${
            activeImage === null
              ? "w-[600px] xl:w-[470px] xl:h-[450px] lg:w-[330px] lg:h-[440px] md:h-[500px] md:w-[632px] sm:w-[440px] sm:h-[500px] xs:w-80 xs:h-[500px]"
              : "w-80 xl:w-64 xl:h-[450px] lg:w-52 lg:h-[440px] md:w-[632px] md:h-64 sm:w-[440px] sm:h-64 xs:w-80 xs:h-64"
          }`}
          onMouseEnter={() => handleImageEnter(null)}
          onMouseLeave={handleImageLeave}
          onClick={() => handleImageClick(null)}
        >
          <img
            className={`h-[550px] sm:h-[300px] xs:h-[300px] object-cover rounded-md transition-all duration-500 ease-in-out ${
              activeImage === null
                ? "w-[600px] xl:w-[470px] lg:w-[330px] lg:h-[440px] md:h-[500px] md:w-[632px] sm:w-[440px] sm:h-[500px] xs:w-80 xs:h-[500px]"
                : "w-80 xl:w-64 lg:w-52 lg:h-[440px] md:w-[632px] md:h-64 sm:w-[440px] sm:h-64 xs:w-80 xs:h-64"
            }`}
            style={{ filter: "brightness(50%)" }}
            src="https://somosawaqblob.blob.core.windows.net/congress/home/new-donations.jpg"
            alt="marketplace"
          />
          <div
            className={`absolute inset-x-0 flex flex-col justify-center transition duration-700 ease-in-out ${
              activeImage === null ? "bottom-10 top-0" : "bottom-10"
            }`}
          >
            <h2
              className={`text-white transition ease-in-out ${
                activeImage === null
                  ? "text-left ml-20 text-3xl mb-8 lg:mx-2 lg:text-center sm:text-xl sm:text-center sm:ml-5 xs:text-xl xs:text-center xs:ml-0"
                  : "text-center mb-8 ml-0 text-xl"
              }`}
            >
              {content?.home[language].news.articles.news1.title}
            </h2>
            <p
              className={`text-white transition ease-in-out ${
                activeImage === null
                  ? "text-left mx-20 text-xl lg:mx-2 lg:text-center xs:text-lg xs:mx-0 xs:text-center sm:text-lg sm:mx-0 sm:text-center"
                  : "text-center mx-2 text-base"
              }`}
            >
              {content?.home[language].news.articles.news1.description}
            </p>
            <Link to="/donacion">
              <div
                className={`absolute right-10 bottom-0 lg:bottom-auto mt-2 px-4 py-2 font-bold rounded-lg bg-dark-yellow transition hover:bg-green-btn-nav ease-in-out ${
                  activeImage === null ? "opacity-100" : "opacity-0"
                }`}
              >
                <button>{content?.home[language].news.button}</button>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="group relative overflow-hidden transition-all duration-500"
          onMouseEnter={() => handleImageEnter(1)}
          onMouseLeave={handleImageLeave}
          onClick={() => handleImageClick(1)}
        >
          <img
            className={`h-[550px] object-cover rounded-md transition-all duration-500 ease-in-out ${
              activeImage === 1
                ? "w-[600px] xl:w-[470px] xl:h-[450px] lg:w-[330px] lg:h-[440px] md:w-[632px] md:h-[500px] sm:w-[440px] sm:h-[500px] xs:w-80 xs:h-[500px]"
                : "w-80 xl:w-64 xl:h-[450px] lg:w-52 lg:h-[440px] md:w-[632px] md:h-64 sm:w-[440px] sm:h-64 xs:w-80 xs:h-64"
            }`}
            style={{ filter: "brightness(50%)" }}
            src="https://somosawaqblob.blob.core.windows.net/congress/home/marketplacenew2.png"
            alt="donacion"
          />
          <div className="absolute inset-x-0 bottom-10 flex flex-col justify-center transition duration-700 ease-in-out group-hover:top-0">
            <h2 className="text-white text-center mb-8 text-xl transition ease-in-out group-hover:text-left group-hover:ml-20 group-hover:text-3xl xs:group-hover:text-xl xs:mb-3 lg:group-hover:ml-5">
              {content?.home[language].news.articles.news3.title}
            </h2>
            <p className="text-white text-center mx-2 transition ease-in-out group-hover:text-left group-hover:mx-20 group-hover:text-xl xs:group-hover:text-lg lg:group-hover:text-center lg:group-hover:mx-0">
              {content?.home[language].news.articles.news3.description}
            </p>
            <Link to="/marketplace">
              <div className="absolute right-10 bottom-0 lg:bottom-auto mt-2 px-4 py-2 font-bold rounded-lg bg-dark-yellow transition hover:bg-green-btn-nav ease-in-out opacity-0 group-hover:opacity-100">
                <button>{content?.home[language].news.button}</button>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="group relative overflow-hidden transition-all duration-500"
          onMouseEnter={() => handleImageEnter(2)}
          onMouseLeave={handleImageLeave}
          onClick={() => handleImageClick(2)}
        >
          <img
            className={`h-[550px] object-cover rounded-md transition-all duration-500 ease-in-out ${
              activeImage === 2
                ? "w-[600px] xl:w-[470px] xl:h-[450px] lg:w-[330px] lg:h-[440px] md:w-[632px] md:h-[500px] sm:w-[440px] sm:h-[500px] xs:w-80 xs:h-[500px]"
                : "w-80 xl:w-64 xl:h-[450px] lg:w-52 lg:h-[440px] md:w-[632px] md:h-64 sm:w-[440px] sm:h-64 xs:w-80 xs:h-64"
            }`}
            style={{ filter: "brightness(50%)" }}
            src="https://somosawaqblob.blob.core.windows.net/congress/home/new-inscription.jpg"
            alt="preinscripción"
          />
          <div className="absolute inset-x-0 bottom-10 flex flex-col justify-center transition duration-700 ease-in-out group-hover:top-0">
            <h2 className="text-white text-center mb-8 text-xl transition ease-in-out group-hover:text-left group-hover:ml-20 group-hover:text-3xl xs:group-hover:text-xl xs:mt-10 lg:group-hover:ml-10">
              {content?.home[language].news.articles.news2.title}
            </h2>
            <p className="text-white text-center mx-2 transition ease-in-out group-hover:text-left group-hover:mx-20 group-hover:text-xl xs:group-hover:text-lg lg:group-hover:text-center lg:group-hover:mx-0">
              {content?.home[language].news.articles.news2.description}
            </p>
            <Link to="/inscripcion">
              <div className="absolute right-10 bottom-0 lg:bottom-auto mt-2 px-4 py-2 font-bold rounded-lg bg-dark-yellow transition hover:bg-green-btn-nav ease-in-out opacity-0 group-hover:opacity-100">
                <button>{content?.home[language].news.button}</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};