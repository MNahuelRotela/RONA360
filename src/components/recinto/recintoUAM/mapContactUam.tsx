import { useTranslation } from "../../../context/TraslationContext";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import GoogleMaps from "../googleMaps";
import AOS from "aos";
import { useEffect } from "react";


export const MapContactUam = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div data-aos="zoom-in" className="mx-[5%] w-auto">
        <h3 className=" text-dark_gray text-4xl text-center my-10 font-medium">{content?.recinto[language].recintoUam.title4.principalTitle}</h3>
        <section className="flex mx-auto flex-row w-[95%] max-w-[95rem] md:flex-col sm:flex-col xs:flex-col">
          {/* map of uam*/}
          <div className="w-[50%] md:mx-auto md:w-[80%] sm:mx-auto sm:w-[80%] xs:mx-auto xs:w-[92%]">
            <div className="justify-items-center w-auto mx-auto">
              <div className=" h-[30rem] w-[30rem] 2xl:w-[35rem] mx-auto my-10 xl:h-[25rem] xl:w-[25rem] lg:h-[23rem] lg:w-[23rem]  md:h-[18rem] md:w-[25rem] sm:h-[15rem] sm:w-[22rem] sm:mx-auto xs:h-[12rem] xs:w-[18rem] xs:mx-auto">
                  <GoogleMaps/>
              </div>
            </div>
          </div>
          {/* contact uam */}
          <div className="w-[50%] flex justify-end items-end pb-[2.625rem] md:mx-auto md:w-[70%] sm:w-[70%] xs:w-[80%] sm:mx-auto xs:mx-auto">
            <div className="w-[80%] h-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%]">
                <section className="h-[50%] flex flex-col justify-end">
                  <h4 className="font-bold text-xl">{content?.recinto[language].recintoUam.title4.titleUam}</h4>
                  <p className="text-base text-principal_text">{content?.recinto[language].recintoUam.title4.locationUam}</p>
                  <h4 className="font-bold text-xl">{content?.recinto[language].recintoUam.title4.telTitleUam}</h4>
                  <p className="text-base text-principal_text">{content?.recinto[language].recintoUam.title4.telUam}</p>
                  <p className="text-base text-principal_text">{content?.recinto[language].recintoUam.title4.telUam1}</p>
                  <p className="text-base text-principal_text">{content?.recinto[language].recintoUam.title4.telUam2}</p>
                </section>
                {/* redes uam */}
                <section className="h-[50%] flex justify-end">
                  <div className="flex items-end gap-6 p-4">
                    <a href="https://www.facebook.com/UAMManizales" target="_blanck"><FaFacebook className="fill-dark_gray hover:fill-d_green h-12 w-12" /></a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FUAMManizales" target="_blanck"  className="mb-[-7px]"><FontAwesomeIcon icon={faXTwitter} className=" text-dark_gray hover:text-d_green h-12 w-12"/></a>
                    <a href="https://www.instagram.com/uammanizales/" target="_blanck" ><SiInstagram className="fill-dark_gray hover:fill-d_green h-12 w-12"  /></a>
                  </div>
                </section>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
