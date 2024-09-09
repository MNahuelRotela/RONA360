import {
    useTranslation,
  } from "../../context/TraslationContext";
import { Contador } from "../cortina/Contador/Contador";



export const NotFoundRegistration = () => {
    const { language, content } = useTranslation();
    return(
<div className=" relative">

      <div className="flex relative z-0 mt-20 w-full h-screen  shadow-black shadow-2xl">
        
        <div className=" flex sm:flex-col xs:flex-col xs:items-center xs:justify-start xs:top-4 xs:right-0  sm:items-center sm:justify-start sm:top-4 flex-row absolute w-full h-full justify-center items-start sm:right-0 md:right-0   z-[90]">
          
          <div className="flex flex-col relative  w-auto z-[80] xs:top-0 sm:top-0 sm:mt-4 top-20     ">
            <h1 className="text-white text-2xl font-bold xs:text-center xs:text-xl sm:text-center text-center text-outline leading-3 uppercase    "> {content?.content404[language].register.title1} </h1>
            <h2 className="text-[#FBBD35] text-4xl font-bold xs:text-center xs:text-3xl sm:text-center text-center text-outline mt-4 leading-8 uppercase   "> {content?.content404[language].register.title2}</h2>
            <h2 className="text-[#8DC73F] text-4xl font-bold xs:text-center xs:text-3xl sm:text-center text-center text-outline uppercase  ">{content?.content404[language].register.title3}</h2>
            <h3 className="text-white text-2xl font-semibold xs:text-center xs:text-xl sm:text-center text-center text-outline    ">{content?.content404[language].register.title4}</h3>
            <h3 className="text-white text-2xl font-semibold xs:text-center xs:text-xl sm:text-center text-center text-outline   "> {content?.content404[language].register.title5}</h3>

          </div>
        </div>
          <div className=" flex absolute  z-20  h-3/4 top-1/4 w-full  bg-gradient-to-b from-transparent to-[#000000]    ">
          </div>
        <img
          className="w-full h-full bg-center absolute z-10 xs:object-cover sm:object-cover  sm:h-full"
          src={`https://somosawaqblob.blob.core.windows.net/congress/cortina/cortina.png`}
          alt="cortina"
        />
        <div className="flex w-full h-full absolute items-center justify-center top-24 z-[70]">
          <Contador />
        </div>

      </div>

        
    </div>
  );
};
