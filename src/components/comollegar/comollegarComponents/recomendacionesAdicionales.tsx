import { useTranslation } from "../../../context/TraslationContext";

interface Recommendation {
  title:string,
  name: string,
  description: string,
  description2: string,
  bookings: string,
  telephone: string,
  number: string,
  webpage: string
  reservas: string
  release: string

}

const urls = [
  "https://www.getyourguide.es/manizales-l126418/manizales-arrival-or-departure-transfer-la-nubia-airport-t594994/?visitor-id=QSZ8P75UU1VXKXWIXNKZCKJ4C2G14HMR&locale_autoredirect_optout=true",
  "https://colombia.travel/es/manizales",
  "https://www.timeanddate.com/weather/colombia/manizales",
];

const RecomendacionesAdicionales = () => {
  const { language, content } = useTranslation();
  return (
    <div className="max-w-[1336px] mx-auto w-full h-full" data-aos="fade-up">
      <div className="flex justify-center mb-4 text-center text-[40px] font-semibold text-[#385019] xs:mb-10 xs:text-2xl sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
        {content?.comoLlegar[language].additionalRecommendations.title}
        <span className="ml-4 md:ml-0 w-16 md:w-10 sm:w-10 xs:w-10">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
            <linearGradient id="iu22Zjf0u3e5Ts0QLZZhJa_uzeKRJIGwbBY_gr1" x1="11.274" x2="36.726" y1="9.271" y2="34.723" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d43a02"></stop><stop offset="1" stop-color="#b9360c"></stop></linearGradient><path fill="url(#iu22Zjf0u3e5Ts0QLZZhJa_uzeKRJIGwbBY_gr1)" d="M36.902,34.536C40.052,31.294,42,26.877,42,22c0-9.94-8.06-18-18-18S6,12.06,6,22	c0,4.877,1.948,9.294,5.098,12.536c0.018,0.019,0.03,0.04,0.048,0.059l0.059,0.059c0.047,0.048,0.094,0.095,0.142,0.142	l11.239,11.239c0.781,0.781,2.047,0.781,2.828,0l11.239-11.239c0.048-0.047,0.095-0.094,0.142-0.142l0.059-0.059	C36.873,34.576,36.885,34.554,36.902,34.536z"></path><radialGradient id="iu22Zjf0u3e5Ts0QLZZhJb_uzeKRJIGwbBY_gr2" cx="24" cy="22.5" r="9.5" gradientUnits="userSpaceOnUse"><stop offset=".177"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><circle cx="24" cy="22.5" r="9.5" fill="url(#iu22Zjf0u3e5Ts0QLZZhJb_uzeKRJIGwbBY_gr2)"></circle><circle cx="24" cy="22" r="8" fill="#f9f9f9"></circle><radialGradient id="iu22Zjf0u3e5Ts0QLZZhJc_uzeKRJIGwbBY_gr3" cx="23.842" cy="43.905" r="13.637" gradientUnits="userSpaceOnUse"><stop offset=".177"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><path fill="url(#iu22Zjf0u3e5Ts0QLZZhJc_uzeKRJIGwbBY_gr3)" d="M24,30c-4.747,0-8.935,2.368-11.467,5.982l10.052,10.052c0.781,0.781,2.047,0.781,2.828,0	l10.052-10.052C32.935,32.368,28.747,30,24,30z"></path><path fill="#de490d" d="M24,32c-4.196,0-7.884,2.157-10.029,5.42l8.615,8.615c0.781,0.781,2.047,0.781,2.828,0l8.615-8.615	C31.884,34.157,28.196,32,24,32z"></path>
          </svg>
        </span>
      </div>
      <div className="flex justify-center xs:flex-col sm:flex-col md:flex-col xs:items-center md:items-center">
        {content?.comoLlegar[language].additionalRecommendations.recommendations.map((recommendation: Recommendation, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center m-10 lg:m-4 xl:m-4 xs:m-0 w-96 xs:w-80 text-center xs:mb-10"
          >
            <div>
              <img
                src={[
                  "https://somosawaqblob.blob.core.windows.net/congress/como-llegar/reserva.jpg",
                  "https://somosawaqblob.blob.core.windows.net/congress/como-llegar/mapas.jpg",
                  "https://somosawaqblob.blob.core.windows.net/congress/como-llegar/clima.jpg",
                ][index]}
                alt={`image${index}`}
                className="w-96 h-52 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mt-2 xl:text-xl lg:text-lg ">
              {recommendation.title}
            </h3>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center">
                <p className="text-al">{recommendation.description}</p>
              </div>
              {index > 0 && (
                <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                <div className="w-64 mt-4 py-1 text-base font-semibold rounded-lg bg-dark-yellow transition hover:bg-white hover:text-dark-yellow ease-in-out">
                    <button>{content?.comoLlegar[language].additionalRecommendations.buttonTexts[index]}</button>
                </div>
                  </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendacionesAdicionales;
