import { useTranslation } from "../../context/TraslationContext";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";

const imageUrl: string =
  "https://somosawaqblob.blob.core.windows.net/somosawaq/";

export const Footer = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="pt-16">
      <footer className="bg-gray">
        <div
          data-aos="zoom-in"
          className="flex flex-col mx-[8%] w-auto items-center content-center md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center xs:flex xs:flex-col xs:items-center xs:justify-center"
        >
          {/* contact */}
          <div className="flex w-[100%] flex-row md:flex-col sm:mr-0 sm:flex-col xs:mr-0 xs:flex-col h-auto my-8 px-4 mr-12 md:mx-auto md:mb-0">
            <div className="flex-col ml-12 w-1/5 md:w-48 sm:w-44 xs:w-40 md:mx-auto sm:mx-auto xs:mx-auto md:mb-10 sm:mb-10 xs:mb-8 gap-10">
              <h3 className="font-bold text-xl md:text-center sm:text-center xs:text-center">
                {content?.footer[language].titleContact}
              </h3>
              <p className="my-5 text-base md:text-center sm:mx-auto xs:mx-auto sm:text-center xs:text-center md:justify-center">
                {content?.footer[language].titleAdress}
              </p>
              <a
                href="mailto: https://www.somosawaq.org/"
                target="_blank"
                className="text-base justify-start md:text-center ml-0 sm:text-center xs:text-center sm:flex sm:justify-center xs:flex xs:justify-center  md:flex md:justify-center"
              >
                {content?.footer[language].titlePage}
              </a>
            </div>
            <div className="w-1/5"></div>
            <div className="flex flex-col md:mx-auto sm:mx-auto xs:mx-auto md:mb-8 sm:mb-10 xs:mb-8 items-center justify-center w-1/5 md:w-1/3 xs:w-1/3">
              <img
                src={`${imageUrl}awaq-footer.png`}
                alt={content?.footer[language].textIcon1}
              />
              {/* network */}
              <div className="flex items-center w-1/3 justify-center space-x-8 mx-2 mt-5 p-2">
                <Link target="_blank" to={"https://www.facebook.com/somosawaq"}>
                  <AiFillFacebook className="h-8 w-10 fill-black hover:fill-d_green" />
                </Link>
                <Link
                  target="_blank"
                  to={
                    "https://www.instagram.com/awaqongd/?igshid=MTk0NTkyODZkYg%3D%3D"
                  }
                >
                  <BsInstagram className="h-7 w-9 fill-black  hover:fill-d_green" />
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/company/awaq-ongd/"}
                >
                  <AiFillLinkedin className="h-8 w-10 fill-black  hover:fill-d_green" />
                </Link>
              </div>
            </div>
            {/* legal information */}
            <div className="w-1/5 "></div>
            <div className="flex-col md:mx-auto md:mb-2 w-1/5 md:w-auto md:text-center sm:mx-auto sm:text-center sm:w-auto xs:mx-auto xs:text-center xs:w-auto">
              <h3 className="text-xl font-bold mb-2 md:text-center">
                {content?.footer[language].titleLegalInformation}
              </h3>
              <ul className="flex flex-col gap-5 text-sm my-8 md:text-center sm:text-center xs:text-center">
                {content?.footer[language].titlePolicie.map(
                  (e: {
                    link: string | undefined;
                    title: string | number;
                    id: number;
                  }) => (
                    <li key={e.id}>
                      <a
                        href={e.link}
                        className=" md:whitespace-pre text-center"
                      >
                        {e.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          {/* ours partners scale 90*/}
          <div
            data-aos="zoom-in"
            className="flex flex-col w-auto h-auto mr-12 md:m-0 sm:m-0 xs:m-0"
          >
            <h3 className="font-bold ml-12 md:mx-0 sm:mx-0 text-center sm:m-0 md:m-0 xs:m-0 xs:mx-0">
              {content?.footer[language].titlePartners}
            </h3>
            <div className="flex-wrap w-auto ml-12 md:mx-0 sm:mx-0 sm:w-auto xs:mx-0 xs:w-auto md:w-[100%] h-auto flex mt-6 items-center justify-center gap-3 ">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper w-[38rem] h-[2.5rem] md:w-[22rem] sm:w-[18rem] md:ml-0 sm:ml-0 xs:w-[16rem] xs:ml-0  md:h-12 lg:h-16 xl:h-16 2xl:h-16"
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={
                  {
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    }
                  }
                }
              >
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className="lg:mb-1 object-contain h-10 w-24 md:h-6 md:w-auto sm:h-6 xs:h-6 sm:w-14 xs:w-14"
                    src={`${imageUrl}logo%20tec%20monterrey.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 w-auto h-auto"
                    src={`${imageUrl}checq.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 w-auto h-auto"
                    src={`${imageUrl}ean-1.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 w-auto h-auto"
                    src={`${imageUrl}microsoft.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 w-auto h-auto"
                    src={`${imageUrl}SALE.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 w-auto h-auto"
                    src={`${imageUrl}sena-1.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    className=" scale-75 lg:scale-90 md:scale-125 sm:scale-125 xs:scale-150 lg:mb-1 object-contain h-9 w-24 md:h-5 md:w-auto sm:h-4 xs:h-3 sm:w-14 xs:w-14"
                    src={`${imageUrl}Github.png`}
                    alt={content?.footer[language]}
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* merits  */}
          <h3 className=" font-bold mt-6">
            {content?.footer[language].titleMerits}
          </h3>
          <div className="text-center flex whitespace-break-spaces w-[33%] xl:w-[40%] lg:w-[48%] xs:w-[70%] flex-row md:mx-auto sm:mx-auto md:mb-8 sm:mb-10 xs:mb-8 xs:mx-auto items-center justify-center md:w-[60%] sm:w-[57%] mt-6">
            {content?.footer[language].projectsMerits.map(
              (e: {
                paragraph1: string;
                id: number;
                link: string;
                img: string;
                title: string;
                paragraph: string;
              }) => (
                <>
                  <div className=" m-auto w-[40%] text-center justify-center mx-auto gap-4">
                    <a
                      href={e.link}
                      target="_blanck"
                      key={e.id}
                      className="text-center mx-auto justify-items-center "
                    >
                      <img
                        src={e.img}
                        alt={e.title}
                        className="py-2 h-16 mt-4 m-auto lg:h-14 md:h-12 sm:h-11 xs:h-10 text-center flex justify-center align-middle"
                      />
                      <p className=" text-center mt-3 align-bottom mx-auto w-auto text-ss sm:w-auto sm:text-[0.590rem] sm:text-center xs:w-auto xs:text-center xs:teem] ">
                        {e.paragraph}
                      </p>
                      <p className=" text-center h-8 mx-auto w-auto text-ss sm:w-auto sm:text-[0.590rem] sm:text-center xs:w-auto xs:text-center xs:text-[0.575rem] ">
                        {e.paragraph1}
                      </p>
                    </a>
                  </div>
                </>
              )
            )}
          </div>
          {/* CopyRight */}
          <div className="flex w-full h-auto mx-[8%]">
            <h4 className="text-center mx-auto my-6 sm:my-4 md:my-7 text-[0.475rem]">
              {content?.footer[language].titleCopyRight}
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
};
