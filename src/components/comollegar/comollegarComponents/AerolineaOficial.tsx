import { useTranslation } from "../../../context/TraslationContext";

const AerolineaOficial = () => {
  const { language, content } = useTranslation();
  return (
    <div
      className="max-w-[1336px] mx-auto w-full h-[580px] m-auto mt-28 px-5 xs:h-[760px] sm:h-[940px] md:h-[500px] xs:mt-20 xs:mb-24"
      data-aos="zoom-in"
    >
      <div className="flex justify-center mb-10 text-center text-[30px] font-semibold xs:mb-10 xs:text-3xl sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
        {content?.comoLlegar[language].porAire.officialAirline.title}
      </div>
      <div className="w-full h-[560px] gap-40 flex justify-center items-center xs:h-[630px] xs:block xs:mt-5 sm:block sm:h-[800px] sm:mt-5 md:mt-3 xl:gap-0 lg:gap-0 md:gap-5">
        <div className="w-[831px] h-[500px] font-open-sans text-xl lg:text-base pr-7 xs:text-[16.5px] xs:pr-0 xs:w-full xs:h-[330px] sm:pr-0 sm:w-full sm:h-[430px] sm:text-[20px] md:h-[560px] md:pr-0 md:text-base">
          <h1 className="text-3xl font-bold mb-10 text-[#E30047] lg:text-2xl lg:mb-5 xs:text-2xl">
            {content?.comoLlegar[language].porAire.officialAirline.name}
          </h1>
          <p>
            {content?.comoLlegar[language].porAire.officialAirline.description}
          </p>
          <p>
            {content?.comoLlegar[language].porAire.officialAirline.description2}
          </p>
          <p>
            {content?.comoLlegar[language].porAire.officialAirline.description3}
          </p>
          <div className="flex items-center mt-5 lg:mt-4">
            <p className="text-al md:text-left">
              <span className="font-bold">
                {
                  content?.comoLlegar[language].porAire.officialAirline.contact
                    .telephone
                }
              </span>{" "}
              {
                content?.comoLlegar[language].porAire.officialAirline.contact
                  .number
              }
            </p>
          </div>
          <a
            href="https://clicair.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-64 mt-6  px-4 py-1 font-medium rounded-md bg-[#E30047] transition hover:bg-white hover:text-[#E30047] ease-in-out text-white">
              <button>
                {
                  content?.comoLlegar[language].porAire.officialAirline.contact
                    .webpage
                }
              </button>
            </div>
          </a>
        </div>

        <div className="w-[376px] h-[560px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[300px] xs:m-auto xs:mt-20 md:m-auto">
          <div className="absolute top-3 -left-3 z-10 xs:size-52 sm:size-80 sm:left-0 sm:top-3 overflow-hidden rounded-full">
            <img src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/clic-rojo.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AerolineaOficial;