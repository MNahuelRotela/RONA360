import { useEffect, useState } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { Link } from "react-router-dom";

export const BannerEcosocHome = () => {
  const { language, content } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const iframeSrc = "https://docs.google.com/viewer?url=https://somosawaqblob.blob.core.windows.net/congress/ecosoc/AWAQ-ONGD-ECOSOC.pdf&embedded=true";

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleOpenModal = () => {
    setLoading(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        data-aos="fade-right"
        className="relative mt-32 mb-16 z-10 bg-cover object-fill bg-center bg-no-repeat h-max w-full xs:h-[410px] bg-[url('https://somosawaqblob.blob.core.windows.net/congress/ecosoc/ecosoc-banner-1.png')]"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="flex h-auto w-full sm:items-start sm:justify-start">
          <div className="flex h-full w-[400px] relative top-10 justify-center items-center backdrop-blur-sm ml-16 mb-20 xs:ml-0 xs:text-center md:top-11 xs:top-3 sm:w-[250px] sm:text-left sm:ml-5 sm:justify-start sm:pl-2 md:w-[320px] md:text-left md:ml-6 md:justify-start md:pl-2 lg:ml-6 xl:ml-6">
            <div className="flex flex-col mb-3 mx-[5%] sm:mx-0 sm:w-full">
              <h4 className="text-white font-semibold mb-2 text-3xl w-full mt-5 md:text-3xl sm:text-2xl xs:text-2xl xs:w-full sm:mt-2">
                {content?.ecosoc[language].bannerHome.title}
              </h4>
              <h4
                className="text-white mb-2 text-xl w-full md:text-[17px] sm:text-[16px] xs:text-lg xs:w-full"
              >
                {content?.ecosoc[language].bannerHome.description}
              </h4>
              <div className="flex xs:justify-center justify-start"> 
                <Link to='/ecosoc'>
                  <button
                    className="mt-2 mb-4 px-8 py-1 flex text-white font-medium text-center rounded-md bg-green-btn-nav transition duration-300 hover:bg-dark-yellow xs:mt-56 xs:mb-3 xs:px-12"
                  >
                    {content?.ecosoc[language].bannerHome.button}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://somosawaqblob.blob.core.windows.net/congress/ecosoc/AWAQ-ONGD-ECOSOC-COVER.png"
          alt="Cover"
          className="absolute right-20 bottom-9 w-40 h-auto shadow-xl cursor-pointer rounded-sm xs:left-1/2 xs:bottom-[17%] xs:transform xs:-translate-x-1/2 xs:right-0 xs:items-center sm:right-6 sm:w-32 sm:bottom-11 md:right-6 md:w-36 md:bottom-11 lg:right-6 xl:right-6" // Añadido cursor-pointer
          onClick={handleOpenModal}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-transparent shadow-lg w-11/12 max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <iframe
              src={iframeSrc}
              className={`w-full h-[95vh] ${loading ? "hidden" : ""}`}
              title="PDF Preview"
              frameBorder="0"
              onLoad={handleIframeLoad}
            ></iframe>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-75">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .loader {
          border: 8px solid #f3f3f3; /* Color de fondo */
          border-top: 8px solid #4caf50; /* Color del círculo */
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};
