import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext.tsx";
import AOS from "aos";
import { useEffect } from "react";


export const BannerSponsors = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
      AOS.init({ duration: 2000 });
    });
  return (
    <>
      <div data-aos="fade-right" className=" z-10 bg-cover bg-right-bottom object-fill bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/sponsors/sponsorsbanner.png')] mt-20">
        <div className=" flex h-auto w-auto bg-gradient-to-r from-[#000000] to-[#1E2F2D]/30 ">
          <div className="flex h-fit w-auto my-16 ">
            <div className="w-[100%] mx-[5%] md:w-auto sm:w-auto lg:w-auto sm:m-[3%] xs:m-[3%] xs:w-auto">
                <title>
                {content?.sponsors[language].title}
                </title>

               <h4 className="text-white font-bold text-[2.8rem] w-4/6 my-10 md:text-4xl sm:text-4xl sm:w-4/6 xs:text-3xl xs:w-5/6">
               {content?.sponsors[language].subtitle}
              </h4>
              <p className=" text-white text-lg w-4/6 xs:text-3xl sm:w-4/6 xs:w-5/6">
              {content?.sponsors[language].description}
              </p>
              <button className="text-white text-lg font-medium py-2 px-10 rounded-lg my-10 bg-green-btn-nav transition duration-300 hover:bg-dark-yellow" >
                <Link to="/contacto">
                <a className="">

                {content?.sponsors[language].button}
                </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}