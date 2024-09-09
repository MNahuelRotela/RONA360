import { useTranslation } from "../../../context/TraslationContext";

const ProductosCtel = () => {
  const {language,content}=useTranslation();
  return (
    <div className='font-open-sans' data-aos="fade-up">
      <h1 data-aos="fade-up" className="flex justify-center mb-20 text-center text-4xl font-semibold xs:mb-10 xs:text-lg md:text-2xl md:mb-10 sm:mb-10 sm:text-xl ">{content?.sophic[language].productsCtel.title}</h1>
      <div data-aos="fade-up" className="grid grid-cols-8 justify-center gap-6 md:gap-3 sm:gap-3 xs:gap-2">
        <div className="relative col-start-2 col-span-2">
          <img
            className="w-full"
            style={{ filter: 'brightness(40%)' }}
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_107.png"
            alt="image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-center text-white text-3xl w-56 xs:text-[8px] md:text-sm sm:text-[10px]">{content?.sophic[language].productsCtel.product1}</span>
          </div>
        </div>
        <div className="relative col-span-2">
          <img
            className="w-full"
            style={{ filter: 'brightness(40%)' }}
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_108.png"
            alt="image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-center text-white text-3xl xs:text-[8px] md:text-sm sm:text-[10px]">{content?.sophic[language].productsCtel.product2}</span>
          </div>
        </div>
        <div className="relative col-span-2">
          <img
            className="w-full"
            style={{ filter: 'brightness(40%)' }}
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_109.png"
            alt="image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-center text-white text-3xl xs:text-[8px] md:text-sm sm:text-[10px]">{content?.sophic[language].productsCtel.product3}</span>
          </div>
        </div>
      </div>
      <p data-aos="fade-up" className="flex justify-center mb-10 mt-20 text-center text-[20px] xs:mb-20 xs:mx-5 xs:my-10 xs:text-[12px]">{content?.sophic[language].aclaration}</p>
    </div>
  );
};

export default ProductosCtel;
