import { useTranslation } from "../../../context/TraslationContext";
interface Airport {
  name: string;
  city: string;
  ubication: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
  };
  transport: {
    title: string;
    description: string;
  };
}

const PorAire = () => {
  const { language, content  } = useTranslation();
  return (
    <div className="w-full h-full mt-48 xs:mt-32" data-aos="fade-up" >
      <div className="flex justify-center mb-4 text-center text-[40px] font-semibold text-[#385019] xs:mb-10 xs:text-[25px] sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
        {content?.comoLlegar[language].porAire.title} ✈
      </div>
      <div className="flex justify-center mb-4 text-center text-[25px] font-semibold xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
        {content?.comoLlegar[language].porAire.title2}
      </div>
      <div className="flex justify-center xs:flex-col sm:flex-col md:flex-col xs:items-center md:items-center">
        {content?.comoLlegar[language].porAire.airports.map((airport: Airport, index: number) => (
          <div key={index} className="flex flex-col items-start m-10 w-96 lg:m-4 xl:m-4 xs:m-0 xs:w-80 xs:items-center xs:text-left md:items-center md:text-left">
            <div>
              <img
                src={[
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/la-nubia.jpg',
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/aer-pereira.jpg',
                  'https://somosawaqblob.blob.core.windows.net/congress/como-llegar/aer-medellin.jpg',
                ][index]}
                alt={`image${index}`}
                className="w-96 h-52 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl mt-2 xl:text-xl lg:text-lg mb-4 xs:text-left md:text-left xs:text-xl">{airport.name}</h3>
            <div className="flex flex-col xs:items-start xs:w-full md:items-start md:w-full">
            <div className="flex items-center">
                <p className="text-al md:text-left mb-2">
                  <span className="font-bold">📍 {airport.ubication.title}:</span> {airport.ubication.description}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-al md:text-left mb-2">
                  <span className="font-bold">🛫 {airport.services.title}:</span> {airport.services.description}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-al md:text-left mb-2 xs:mb-16">
                  <span className="font-bold">🚌{airport.transport.title}:</span> {airport.transport.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default PorAire
