import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "../../../context/TraslationContext";
import { slugify } from "../../../utils/slugify";

// Define la interfaz para las noticias
interface Noticia {
  id: number;
  bannerUrl: string;
  title1: string;
  title2: string;
  shortdescription: string[];
  bannerdescription: string;
  bannerAlt: string;
  category: string;
  date: string;
  articlesocialmedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    web: string;
  };
  media: {
    name: string;
    logoUrl: string;
    logoAlt: string;
  };
  filters: {
    title: string;
    bycategory: string;
  };
}

interface CardsNoticiasProps {
  articles: Noticia[];
}

const CardsNoticias: React.FC<CardsNoticiasProps> = ({
  articles = [],
}: CardsNoticiasProps) => {
  const { language, content } = useTranslation();

  // Definir los tamaños de las tarjetas en un array
  const sizes = [
    "w-full h-[550px]", // 0
    "w-full h-[289px]", // 1
    "w-full h-[320px]", // 2
    "w-[400px] h-[330px]", // 3
    "w-[2/3] h-[280px]", // 4
    "w-full h-[458px]", // 5
    "w-full h-[225px]", // 6
    "w-full h-[220px]", // 7
    "w-[500px] h-[508px]", // 8
    "w-full h-[500px]", // 9
    "w-full h-[280px]", // 10
    "w-full h-[280px]", // 11
    "w-[400px] h-[400px]", //12
    "w-full h-[260px]", //13
  ];

  // Ordenar las noticias en orden inverso
  const noticiasOrdenadas = [...articles].reverse();

  // Agrupar las noticias para el diseño basado en el orden inverso
  const Noticia1 = noticiasOrdenadas.slice(0, 1); // Noticia 21
  const Noticia2 = noticiasOrdenadas.slice(1, 2); // Noticias 20 y 19
  const Noticia3 = noticiasOrdenadas.slice(2, 3); // Noticias 20 y 19
  const Noticia4 = noticiasOrdenadas.slice(3, 4); // Noticias 18 y 17
  const Noticia5 = noticiasOrdenadas.slice(4, 5); // Noticias 18 y 17
  const Noticia6 = noticiasOrdenadas.slice(5, 6); // Noticia 16
  const Noticia7 = noticiasOrdenadas.slice(6, 7); // Noticia 15
  const Noticia8 = noticiasOrdenadas.slice(7, 8); // Noticia 14
  //   const Noticia9 = noticiasOrdenadas.slice(8, 9); // Noticia 13
  //   const Noticia10 = noticiasOrdenadas.slice(9, 10); //Noticia 12
  // const Noticia11 = noticiasOrdenadas.slice(10, 11); //Noticia 11
  // const Noticia12y13 = noticiasOrdenadas.slice(11, 13); //Noticia 12
  //   const Noticia14 = noticiasOrdenadas.slice(13, 14); //Noticia 12
  //   const Noticia15 = noticiasOrdenadas.slice(14, 15); //Noticia 12
  //   const Noticia16 = noticiasOrdenadas.slice(15, 16); //Noticia 12
  // const Noticia17 = noticiasOrdenadas.slice(16, 17); //Noticia 12
  // const Noticia18 = noticiasOrdenadas.slice(17, 18); //Noticia 12
  // const Noticia19 = noticiasOrdenadas.slice(18, 19); //Noticia 12
  // const Noticia20 = noticiasOrdenadas.slice(19, 20); //Noticia 12
  // const Noticia21y22 = noticiasOrdenadas.slice(20, 22); //Noticia 12
  // const Noticia23 = noticiasOrdenadas.slice(22, 23); //Noticia 12
  // const Noticia24 = noticiasOrdenadas.slice(23, 24); //Noticia 12
  console.log();
  return (
    <div
      data-aos="fade-up"
      className="mt-4 w-full max-w-[1370px] pl-4 pr-5 mx-auto lg:pl-6 lg:pr-6 md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 xs:pl-2 xs:pr-2"
    >
      <div className="flex lg:flex-col md:flex-col sm:flex-col xs:flex-col">
        {/* Columna lateral con la noticia 21 */}
        <div className="flex-1  lg:mb-6">
          {Noticia1.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div
                key={noticia.id}
                className={` ${sizes[0]} lg:h-full md:h-full sm:h-full xs:h-full`}
              >
                <div>
                  <div className="border-r pr-3 lg:border-none lg:pr-0 md:border-none md:pr-0 sm:border-none sm:pr-0 xs:border-none xs:pr-0">
                    <div className="relative">
                      <img className="w-full h-full" src={noticia.bannerUrl} />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                        <h5 className="text-sm text-white">
                          {content?.noticias[language].banner.title}
                        </h5>
                      </div>
                    </div>
                    <div className="flex flex-col mx-auto h-full justify-end">
                      <div className="">
                        <h3 className="relative leading-tight text-[22px] text-[#6060A2] font-medium mt-2 mb-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                          {noticia.title1}
                        </h3>
                        <h3 className="relative leading-tight text-[22px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                          {noticia.title2}
                        </h3>
                        <h4 className="relative text-sm font-semibold my-2 "></h4>
                        <h4 className="relative text-sm mt-2">
                          {noticia.shortdescription}
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col bottom-0 ">
                      <div className="flex justify-between pt-10 xl:pt-16">
                        <div className="flex">
                          <Link target="_blank" to="">
                            <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                          <Link target="_blank" to="">
                            <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                          </Link>
                          <Link target="_blank" to="">
                            <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        </div>
                        <h5 className="relative text-[14px] text-gray-400">
                          {noticia.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr className=" border-l-2 border-gray-300 h-full mb-10" />

        <div className="flex-[300px] grid grid-cols-2 pl-3 lg:grid-cols-1 lg:pl-0 md:grid-cols-1 md:pl-0 sm:grid-cols-1 sm:pl-0 xs:grid-cols-1 xs:pl-0">
          <div className="flex flex-col ">
            <div className="lg:mb-10 md:mb-10 sm:mb-10 xs:mb-10">
              {Noticia2.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[1]} lg:h-full md:h-full sm:h-full xs:h-full`}
                  >
                    <div>
                      <div className="border-r pr-3 lg:border-none lg:pr-0 md:border-none md:pr-0 sm:border-none sm:pr-0 xs:border-none xs:pr-0">
                        <div className="relative">
                          <img
                            className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <hr className="hidden 2xl:block xl:block border-l h-full mr-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="hidden lg:block md:block sm:block xs:block border-l-2 border-gray-300 h-full mb-10" />

            <div className="lg:mb-10 md:mb-10 sm:mb-10 xs:mb-10">
              {Noticia3.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[1]} lg:h-full md:h-full sm:h-full xs:h-full`}
                  >
                    <div>
                      <div className="border-r pr-3 lg:border-none lg:pr-0 md:border-none md:pr-0 sm:border-none sm:pr-0 xs:border-none xs:pr-0">
                        <div className="relative">
                          <img
                            className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10" />

          <div className="flex flex-col pl-3 lg:pl-0 md:pl-0 sm:pl-0 xs:pl-0">
            <div className="lg:mb-10 md:mb-10 sm:mb-10 xs:mb-10">
              {Noticia4.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[1]} lg:h-full md:h-full sm:h-full xs:h-full`}
                  >
                    <div>
                      <div className="drop-shadow-lg">
                        <div className="relative">
                          <img
                            className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <hr className="border-l h-full" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="lg:mb-10 md:mb-10 sm:mb-10 xs:mb-10">
              {Noticia5.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[1]} lg:h-full md:h-full sm:h-full xs:h-full`}
                  >
                    <div>
                      <div className="drop-shadow-lg">
                        <div className="relative">
                          <img
                            className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-l-2 border-gray-300 h-full" />

      <div className="mt-6 flex flex-1 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1">
        <div
          className={` ${sizes[4]} lg:h-full lg:w-full md:h-full md:w-full sm:h-full sm:w-full xs:h-full xs:w-full`}
        >
          {Noticia6.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="border-r pr-4 lg:border-none lg:pr-0 md:border-none md:pr-0 sm:border-none sm:pr-0 xs:border-none xs:pr-0">
                  <div className="relative lg:flex md:flex sm:flex xs:flex">
                    <img
                      className="w-full h-[160px] lg:h-full md:h-full sm:h-full xs:h-full"
                      src={noticia.bannerUrl}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                      <h5 className="text-sm text-white">{noticia.category}</h5>
                    </div>
                  </div>
                  <div className="flex flex-col mx-auto h-full justify-end">
                    <div className="">
                      <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:flex md:flex sm:flex xs:flex  lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:flex md:flex sm:flex xs:flex lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col mt-9">
                    <div className="flex justify-between">
                      <div className="flex">
                        <h4 className="relative text-[13px] font-semibold lg:flex"></h4>
                      </div>
                      <h5 className="relative text-[12px] text-gray-400 lg:flex">
                        {noticia.date}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10" />

        <div
          className={` ${sizes[4]} flex-1 lg:h-full lg:w-full md:h-full md:w-full sm:h-full sm:w-full xs:h-full xs:w-full`}
        >
          {Noticia7.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="drop-shadow-lg">
                  <div className="flex flex-col-2 lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                    <div className="ml-4 mr-10 lg:ml-0 lg:mr-0 md:ml-0 md:mr-0 sm:ml-0 sm:mr-0 xs:ml-0 xs:mr-0">
                      <h3 className="relative leading-tight text-[22px] text-[#6060A2] font-medium mb-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[22px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="relative text-sm font-semibold my-4 "></h4>
                      <h4 className="relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                      <div className="flex flex-col bottom-0 mt-20 justify-end xl:mt-12">
                        <div className="flex justify-between ">
                          <div className="flex">
                            <Link target="_blank" to="">
                              <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                          </div>
                          <h5 className="relative text-[14px] text-gray-400">
                            {noticia.date}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <img
                          className="w-full mr-5 object-center h-full"
                          src={noticia.bannerUrl}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                          <h5 className="text-sm text-white">
                            {noticia.category}{" "}
                          </h5>
                        </div>
                      </div>
                      <h3 className="text-sm text-gray-500 mt-2 italic mr-5">
                        {noticia.bannerdescription}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-l-2 border-gray-300 h-full" />

      <div className="mt-7 flex lg:flex-col md:flex-col sm:flex-col xs:flex-col">
        <div
          className={`${sizes[7]} flex-1 lg:h-full lg:w-full lg:mb-8 md:h-full md:w-full md:mb-8 sm:h-full sm:w-full sm:mb-8 xs:h-full xs:w-full xs:mb-8`}
        >
          {Noticia8.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="border-r lg:border-none md:border-none sm:border-none xs:border-none">
                  <div className="flex flex-col-2 lg:flex-col md:flex-col sm:flex-col xs:flex-col">
                    <div>
                      <div className="relative">
                        <img
                          className="w-full h-full object-center"
                          src={noticia.bannerUrl}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                          <h5 className="text-sm text-white">
                            {noticia.category}{" "}
                          </h5>
                        </div>
                      </div>
                      <h3 className="text-sm text-gray-500 mt-2 italic mr-5">
                        {noticia.bannerdescription}
                      </h3>
                    </div>
                    <div className=" px-5 lg:px-0 md:px-0 sm:px-0 xs:px-0">
                      <h3 className="relative leading-tight text-[18px] text-[#6060A2] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[22px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="relative text-sm font-semibold my-2 "></h4>
                      <h4 className="relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                      {/* <div className="flex flex-col justify-end mt-8">
                        <div className="flex justify-between ">
                          <div className="flex">
                            <Link target="_blank" to="">
                              <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                          </div>
                          <h5 className="relative text-[14px] text-gray-400">
                            {noticia.date}
                          </h5>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10" />
        <div className={` ${sizes[7]} flex-1`}>
          {Noticia1.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="drop-shadow-lg pl-3 lg:pl-0 md:pl-0 sm:pl-0 xs:pl-0">
                  <div className="flex flex-col-2 lg:flex-col md:flex-col sm:flex-col xs:flex-col">
                    <div>
                      <div className="relative">
                        <img
                          className="w-full h-full object-center"
                          src={noticia.bannerUrl}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                          <h5 className="text-sm text-white">
                            {noticia.category}{" "}
                          </h5>
                        </div>
                      </div>
                      <h3 className="text-sm text-gray-500 mt-2 italic mr-5">
                        {noticia.bannerdescription}
                      </h3>
                    </div>
                    <div className=" px-5 lg:px-0 md:px-0 sm:px-0 xs:px-0">
                      <h3 className="relative leading-tight text-[18px] text-[#6060A2] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[22px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="relative text-sm font-semibold my-2 "></h4>
                      <h4 className="relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                      {/* <div className="flex flex-col  bottom-0 justify-end mt-8">
                        <div className="flex justify-between "> */}
                      {/* <div className="flex">
                            <Link target="_blank" to="">
                              <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                          </div> */}
                      {/* <h5 className="relative text-[14px] text-gray-400">
                            {noticia.date}
                          </h5> */}
                      {/* </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-l-2 border-gray-300 h-full lg:mt-10 lg:mb-10 md:mt-10 md:mb-10 sm:mt-10 sm:mb-10 xs:mt-10 xs:mb-10" />

      <div className="flex mt-6 mb-4 lg:flex-col md:flex-col sm:flex-col xs:flex-col">
        <div className=" max-w-[450px] mr-2 lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%] xs:max-w-[100%]">
          {Noticia1.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div
                key={noticia.id}
                className={`${sizes[9]} lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
              >
                <div>
                  <div className="border-r pr-3 lg:border-none lg:pr-0 md:border-none md:pr-0 sm:border-none sm:pr-0 xs:border-none xs:pr-0">
                    <div className="relative">
                      <img className="w-full h-full" src={noticia.bannerUrl} />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                        <h5 className="text-sm text-white">
                          {noticia.category}
                        </h5>
                      </div>
                    </div>
                    <div className="flex flex-col mx-auto h-full  justify-end">
                      <div className="h-52 lg:h-24 md:h-24 sm:h-24 xs:h-24">
                        <h3 className="relative leading-tight text-[20px] text-[#6060A2] font-medium mt-2 mb-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                          {noticia.title1}
                        </h3>
                        <h3 className="relative leading-tight text-[20px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                          {noticia.title2}
                        </h3>
                        <h4 className="relative text-sm font-semibold my-2 "></h4>
                        <h4 className="relative text-sm mt-2">
                          {noticia.shortdescription}
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between pt-10 lg:pt-16 md:pt-16 sm:pt-20 xs:pt-36">
                        <div className="flex">
                          <Link target="_blank" to="">
                            <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                          <Link target="_blank" to="">
                            <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                          </Link>
                          <Link target="_blank" to="">
                            <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        </div>
                        <h5 className="relative text-[14px] text-gray-400">
                          {noticia.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10 mt-8" />

        <div className="flex-1 grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
          <div className="flex flex-col pl-2 border-r pr-3 lg:border-none lg:pr-0 lg:pl-0 md:border-none md:pr-0 md:pl-0 sm:border-none sm:pr-0 sm:pl-0 xs:border-none xs:pr-0 xs:pl-0">
            <div className=" flex-col ">
              {Noticia1.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[1]} lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
                  >
                    <div>
                      <div className="drop-shadow-lg">
                        <div className="relative">
                          <img
                            className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <hr className="border-l-2 border-gray-300 h-full" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10" />
            <div className="flex-2 flex-col ">
              {Noticia1.map((noticia: Noticia) => (
                <Link
                  key={noticia.id}
                  to={`/noticias/${encodeURIComponent(
                    slugify(noticia.title2)
                  )}`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[10]} lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
                  >
                    <div>
                      <div className="drop-shadow-lg">
                        <div className="relative">
                          <img
                            className="w-full h-[190px] lg:h-full md:h-full sm:h-full xs:h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex justify-between">
                            <div className="flex">
                              <h4 className="relative text-[13px] font-semibold"></h4>
                            </div>
                            <h5 className="relative text-[12px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10" />
          <div className=" flex-col ">
            {Noticia1.map((noticia: Noticia) => (
              <Link
                key={noticia.id}
                to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
              >
                <div
                  key={noticia.id}
                  className={`${sizes[9]} lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
                >
                  <div
                    key={noticia.id}
                    className={`${sizes[9]} lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
                  >
                    <div>
                      <div className="pl-3 lg:pl-0 md:pl-0 sm:pl-0 xs:pl-0">
                        <div className="relative">
                          <img
                            className="w-full h-full"
                            src={noticia.bannerUrl}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                            <h5 className="text-sm text-white">
                              {noticia.category}
                            </h5>
                          </div>
                        </div>
                        <div className="flex flex-col mx-auto h-full  justify-end">
                          <div className="">
                            <h3 className="relative leading-tight text-[20px] text-[#6060A2] font-medium mt-2 mb-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title1}
                            </h3>
                            <h3 className="relative leading-tight text-[20px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                              {noticia.title2}
                            </h3>
                            <h4 className="relative text-sm font-semibold my-2 "></h4>
                            <h4 className="relative text-sm mt-2">
                              {noticia.shortdescription}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between pt-10 mt-20 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0">
                            <div className="flex">
                              <Link target="_blank" to="">
                                <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                              </Link>
                              <Link target="_blank" to="">
                                <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                              </Link>
                              <Link target="_blank" to="">
                                <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                              </Link>
                            </div>
                            <h5 className="relative text-[14px] text-gray-400">
                              {noticia.date}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-l-2 border-gray-300 h-full" />

      <div className="mt-6 flex mb-3 lg:flex-col md:flex-col sm:flex-col xs:flex-col">
        <div
          className={`${sizes[4]} flex-1 lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
        >
          {Noticia1.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="border-r lg:border-none md:border-none sm:border-none xs:border-none">
                  <div className="flex flex-col-2 lg:flex-col md:flex-col sm:flex-col xs:flex-col">
                    <div>
                      <div className="relative">
                        <img
                          className="w-full h-full object-center"
                          src={noticia.bannerUrl}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                          <h5 className="text-sm text-white">
                            {noticia.category}{" "}
                          </h5>
                        </div>
                      </div>
                      <h3 className="text-sm text-gray-500 mt-2 italic mr-5">
                        {noticia.bannerdescription}
                      </h3>
                    </div>
                    <div className=" px-5 lg:px-0 md:px-0 sm:px-0 xs:px-0 ">
                      <h3 className="relative leading-tight text-[18px] text-[#6060A2] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[22px] font-medium lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="relative text-sm font-semibold my-2 "></h4>
                      <h4 className="relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                      <div className="flex flex-col bottom-0 justify-end mt-32 xl:mt-28 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-8 ">
                        <div className="flex justify-between ">
                          <div className="flex">
                            <Link target="_blank" to="">
                              <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                            </Link>
                            <Link target="_blank" to="">
                              <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                            </Link>
                          </div>
                          <h5 className="relative text-[14px] text-gray-400">
                            {noticia.date}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10 mt-2" />
        <div
          className={`${sizes[4]} flex-2 lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full`}
        >
          {Noticia1.map((noticia: Noticia) => (
            <Link
              key={noticia.id}
              to={`/noticias/${encodeURIComponent(slugify(noticia.title2))}`}
            >
              <div key={noticia.id}>
                <div className="pl-4 lg:pl-0 md:pl-0 sm:pl-0 xs:pl-0">
                  <div className="relative">
                    <img
                      className="w-full h-[200px] lg:h-full md:h-full sm:h-full xs:h-full"
                      src={noticia.bannerUrl}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                      <h5 className="text-sm text-white">{noticia.category}</h5>
                    </div>
                  </div>
                  <div className="flex flex-col mx-auto h-full  justify-end">
                    <div className="h-8">
                      <h3 className="relative leading-tight text-[14px] text-[#6060A2] font-medium mt-2 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title1}
                      </h3>
                      <h3 className="relative leading-tight text-[15px] font-medium mt-1 lg:text-[22px] md:text-[22px] sm:text-[22px] xs:text-[22px]">
                        {noticia.title2}
                      </h3>
                      <h4 className="hidden lg:block md:block sm:block xs:block relative text-sm mt-2">
                        {noticia.shortdescription}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col mt-9">
                    <div className="flex justify-between">
                      <div className="flex">
                        <h4 className="relative text-[13px] font-semibold"></h4>
                      </div>
                      <h5 className="relative text-[12px] text-gray-400 lg:mt-14 md:mt-14 sm:mt-14 xs:mt-14">
                        {noticia.date}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-l-2 border-gray-300 h-full lg:mt-2 md:mt-2 sm:mt-2 xs:mt-2" />
    </div>
  );
};

export default CardsNoticias;
