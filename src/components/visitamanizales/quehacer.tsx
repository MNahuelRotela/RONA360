import { useEffect } from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";


export const Quehacer = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    });
  return (
    <>
      <div data-aos="fade-down" className=" mb-20">
        <h3 className="text-dark_gray text-4xl text-center my-10 font-medium">{content?.visitManizales[language].quehacer.h3}</h3>
        <section className="my-20 justify-center h-auto flex w-[78%] mx-auto md:w-[82%] sm:w-[82%] xs:w-[82%]">
            <p className=" text-principal_text text-md mr-[5%] max-w-[40rem] my-auto  sm:mr-[3%] xs:text-[0.80rem] xs:ml-[3%] xs:mr-[5%]">
            {content?.visitManizales[language].quehacer.h4}
            </p>   
            <img 
              src="https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/mapa-manizales.png" 
              className="w-[40%] 2xl:max-w-[35rem] md:h-[14rem] md:w-[52%] sm:max-h-[13rem] xs:h-[9rem] sm:w-[52%] xs:w-[52%] my-auto"
                alt="" />
        </section>
      </div>
    </>
  )
}