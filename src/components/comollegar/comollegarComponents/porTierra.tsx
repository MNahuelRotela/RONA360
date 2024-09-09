import { useTranslation } from "../../../context/TraslationContext";

interface City {
  name: string;
  from: string;
  duration: string;
  transport: string;
}

const PorTierra = () => {
  const { language, content } = useTranslation();

  return (
    <div className="max-w-[1336px] mx-auto w-full h-full" data-aos="zoom-in">
      <div className="flex justify-center mb-4 text-center text-[40px] font-semibold text-[#385019] xs:mb-10 xs:text-2xl sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
        {content?.comoLlegar[language].porTierra.title} ⛴
      </div>
      <div className="flex justify-center xs:flex-col sm:flex-col md:flex-col xs:items-center md:items-center">
        {content?.comoLlegar[language].porTierra.cities.map((city: City, index: number) => (
          <div key={index} className="relative m-10 lg:m-4 xl:m-4 xs:m-0 w-96 xs:w-80">
            <div className="relative">
              <img
                src={[
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/bogota.jpg',
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/medellin.jpg',
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/pereira.jpg',
                ][index]}
                alt={`image${index}`}
                className="w-96 h-52 object-cover rounded-lg filter brightness-[0.65]"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-thin">
                {city.name}
              </div>
            </div>
            <h3 className="text-2xl mt-2 xl:text-xl lg:text-lg mb-4 text-left">{city.from}</h3>
            <div className="flex flex-col items-left">
              <p className="text-al text-left mb-2">
                <span className="font-bold"> ⏰ {content?.comoLlegar[language].porTierra.durationLabel}:</span> {city.duration}
              </p>
              <p className="text-al text-left mb-2 xs:mb-16">
                <span className="font-bold"> 🚌 {content?.comoLlegar[language].porTierra.transportLabel}:</span> {city.transport}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorTierra;
