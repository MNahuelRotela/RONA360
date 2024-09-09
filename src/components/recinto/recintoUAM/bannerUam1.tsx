import { useEffect } from "react";
import { useTranslation } from "../../../context/TraslationContext";
import AOS from "aos";
import PannellumBannerRecinto from "../../360/banner360Recinto";

export const BannerUam1 = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-right" className="relative sm:h-[70vh] xs:h-[70vh]  h-screen mt-20">
      <div className=" relative ">

      <PannellumBannerRecinto />
      </div>
      <div className="absolute top-0 left-0 w-full h-full justify-center xs:bg-gradient-to-t xs:from-black xs:to-transparent xs:z-10 sm:bg-gradient-to-t sm:from-black sm:to-transparent sm:z-10 bg-gradient-to-r from-black to-transparent z-10">
        <div className="flex h-full items-center w-full">
          <div className="  mx-12 p-4">
            <p className="text-white font-semibold text-3xl sm:text-xl xs:text-lg">
              {content?.recinto[language].recintoUam.title1}
            </p>
            <h4 className="text-white flex font-bold text-[3.80rem] items-start w-3/6 my-10 md:text-4xl sm:text-4xl sm:w-4/6 xs:text-3xl xs:w-5/6">
              {content?.recinto[language].recintoUam.location}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};