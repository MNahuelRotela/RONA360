import { useTranslation } from "../../../context/TraslationContext";

const TransporteLocal = () => {
    const { language, content  } = useTranslation();
    return (
        <div className='max-w-[1336px] mx-auto w-full h-full mt-20' data-aos="zoom-in">
            <div className="flex justify-center mb-16 text-center text-[30px] font-semibold xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
                {content?.comoLlegar[language].porTierra.localTransportManizales.title}
            </div>
            <div className='flex flex-col-2 justify-center gap-20 xs:flex xs:flex-col sm:flex sm:flex-col sm:items-center xs:gap-0'>
                <div className="flex flex-col">
                <div className=' xs:mt-14 sm:mt-14'>
                    <img className="w-[585px] h-[260px] object-cover rounded-lg" src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/taxis.jpg" alt="taxis" />
                </div>
                <div className=' mt-5 flex flex-col '>
                    <span className='text-xl font-bold xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.comoLlegar[language].porTierra.localTransportManizales.options.option1.type}</span>
                    <span className='text-xl xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.comoLlegar[language].porTierra.localTransportManizales.options.option1.available}</span>
                </div>
                </div>
                <div className="flex flex-col">
                <div className=''>
                    <img className="w-[588px] h-[260px] object-cover rounded-lg" src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/buses.jpg" alt="bus" />
                </div>
                <div className=' flex flex-col mt-5'>
                    <span className='text-xl font-bold xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.comoLlegar[language].porTierra.localTransportManizales.options.option2.type}</span>
                    <span className='text-xl xs:text-sm xs:flex xs:justify-center sm:flex sm:justify-center md:justify-center'>{content?.comoLlegar[language].porTierra.localTransportManizales.options.option2.available}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TransporteLocal