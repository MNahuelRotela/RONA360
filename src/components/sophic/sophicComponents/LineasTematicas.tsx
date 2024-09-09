import { useTranslation } from "../../../context/TraslationContext"

const LineasTematicasSophic = () => {
    const { language, content } = useTranslation();
    return (
        <div>
            <h1 data-aos="fade-up" className="flex justify-center mb-16 text-center text-[40px] font-semibold xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">{content?.sophic[language].lineasTematicas.title}</h1>
            <div data-aos="fade-up" className="grid grid-cols-8 gap-4 ml-3 mr-7 text-center xs:grid-cols-1 xs:font-normal sm:grid-cols-1 2xl:text-[20px] lg:text-[15px] xl:text-[10px] xs:gap-2 sm:[5px]">
                <div className="col-start-2 col-end-8 relative w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_205.png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-md">01</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea1}</span>
                    </div>
                </div>
                <div className="relative col-start-2 col-span-2 w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_206.png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white font-semibold text-3xl xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">02</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea2}</span>
                    </div>
                </div>
                <div className="relative col-span-2 w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_207.png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">03</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea3}</span>
                    </div>
                </div>
                <img className="col-span-2 w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_110.png" alt="image" />
                <div className="col-start-2 col-end-8 grid grid-cols-2 gap-4 xs:gap-2 w-full h-full">
                    <div className="relative col-span-1 w-full h-full">
                        <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_111.png" alt="image" />
                    </div>
                    <div className="relative col-span-1 w-full h-full">
                        <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_207%20(1).png" style={{ filter: 'brightness(40%)' }} alt="image" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">04</span>
                            <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea4}</span>
                        </div>
                    </div>
                </div>
                <div className="relative col-start-2 col-span-2 w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_206%20(1).png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">05</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea5}</span>
                    </div>
                </div>
                <div className="relative col-span-2 w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_207%20(2).png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">06</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea6}</span>
                    </div>
                </div>
                <div className="relative col-span-2 w-full h-full">
                    <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_112.png" style={{ filter: 'brightness(40%)' }} alt="image" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0 md:mb-0 md:text-sm">07</span>
                        <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea7}</span>
                    </div>
                </div>
                <div className="col-start-2 col-end-5 grid grid-cols-1 gap-4 xs:gap-2 w-full h-full">
                    <div className="relative w-full h-full">
                        <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Rectangle_207%20(3).png" style={{ filter: 'brightness(40%)' }} alt="image" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="mb-2 text-white text-3xl font-semibold xs:mb-0 xs:text-[9px] xs:text-sm sm:mb-0">08</span>
                            <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea8}</span>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <img className="w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_112%20(1).png" style={{ filter: 'brightness(40%)' }} alt="image" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-white text-3xl font-semibold xs:text-[9px] xs:text-sm sm:mb-0 md:text-sm">09</span>
                            <span className="text-white text-base 2xl:text-2xl xs:text-[9px] xs:text-sm md:text-sm">{content?.sophic[language].lineasTematicas.linea9}</span>
                        </div>
                    </div>
                </div>
                <img className="col-span-3 w-full h-full object-cover" src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_113.png" alt="image" />
            </div>
        </div>
    )
}

export default LineasTematicasSophic
