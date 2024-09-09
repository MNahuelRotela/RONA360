import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";

export const SobreUam = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div data-aos="zoom-in" className="mx-[5%]">
        <h3 className=" text-dark_gray text-4xl text-center my-10 font-medium">
          {content?.recinto[language].recintoUam.title3.pricnipalTitle}
        </h3>
        <div className=" justify-items-center w-[95%] max-w-[60rem] mx-auto grid grid-rows-2  md:grid-rows-3 sm:grid-rows-3 xs:grid-rows-3 grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4">
          <img className=" rounded-lg xs:h-[100%]" 
            src="https://somosawaqblob.blob.core.windows.net/congress/recinto/rest.png"
            alt="" 
            />
          <div className="  grid grid-rows gap-2 w-[100%] justify-items-center align-middle">
            <div 
              className=" rounded-lg row-spam-2 col-span-2 text-xl font-semibold bg-d_green w-[100%] text-white">
              <p className="text-3xl 2xl:text-3xl ml-6">
                3 
              </p>
              <p className="ml-6">
                {content?.recinto[language].recintoUam.title3.grid1}
              </p>
            </div>
            <div 
              className=" rounded-lg col-start-1text-3xl font-semibold bg-mustard-btn-agenda w-[100%] text-white">
              <p className="text-2xl 2xl:text-3xl ml-6">
                2 
              </p>
              <p className="ml-6">
                {content?.recinto[language].recintoUam.title3.grid2}
              </p>
            </div>
            <div 
              className=" rounded-lg col-start-2text-3xl font-semibold bg-green-btn-nav w-[100%] text-white">
              <p className="text-2xl 2xl:text-3xl ml-6">
                1 
              </p>
              <p className="ml-6">
                {content?.recinto[language].recintoUam.title3.grid3}
              </p>
            </div>
          </div>
          <img 
            className=" rounded-lg xs:h-[100%] " 
            alt="" 
            src="https://somosawaqblob.blob.core.windows.net/congress/recinto/cupula.png"/>
          <div className=" rounded-lg text-3xl font-semibold bg-[#8686B9] w-[100%] text-white">
            <p className="text-4xl 2xl:text-a4xl ml-6 md:text-3xl sm:text-2xl xs:text-xl">
              5 
            </p> 
            <p className="ml-6 md:text-xl sm:text-lg xs:text-base">
              {content?.recinto[language].recintoUam.title3.grid4}
            </p>
          </div> 
          <img 
            className=" rounded-lg h-[100%]" 
            alt="" 
            src="https://somosawaqblob.blob.core.windows.net/congress/recinto/campus.png"/>
          <div className=" rounded-lg xs:w-[100%] text-3xl font-semibold bg-[#449DD6] w-[100%] text-white">
            <p className="text-4xl 2xl:text-a4xl ml-6 md:text-3xl sm:text-2xl xs:text-xl">
              1 
            </p> 
            <p className="ml-6 md:text-xl sm:text-lg xs:text-base">
              {content?.recinto[language].recintoUam.title3.grid5}
            </p>
          </div> 
        </div>

      </div>
    </>
  )
}
