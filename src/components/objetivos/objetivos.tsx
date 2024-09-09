import React, { useEffect } from 'react';
import { useTranslation } from "../../context/TraslationContext.tsx";
import AOS from 'aos';
const Objetivos: React.FC = () => {
    const { language, content } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='w-full h-full mt-24' data-aos="zoom-in">
            <div className="flex justify-center mb-4 text-center text-[40px] xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
                {content?.objetivos[language].title}
            </div>
            <div className='flex justify-center xs:flex-col sm:flex-col md:flex-col'>
                {[1, 2, 3].map((index) => (
                    <div key={index} className='flex flex-col items-center m-10'>
                        <h3 className="text-2xl mb-4 xl:text-xl lg:text-lg">{content?.objetivos[language][`card${index}`].title}</h3>
                        <img
                            src={`https://somosawaqblob.blob.core.windows.net/congress/congress/congresov2/${['analisis', 'explorar', 'alianzas'][index - 1]}.png`}
                            alt={`image${index}`}
                            className="mb-4"
                        />
                        <p className="text-al mb-4 text-left">{content?.objetivos[language][`card${index}`].paragraph}</p>
                        {/* <button className='w-32 h-10 mt-auto text-black bg-ayellow font-bold p-2 rounded-lg'>
                            {content?.objetivos[language].button.paragraph}
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Objetivos;
