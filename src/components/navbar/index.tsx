import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LOGO from "../../assets/navbar/LOGO.webp";
import ARROW from "../../assets/navbar/arrow.svg";
import MENU from "../../assets/navbar/menu.svg";
import { AiOutlineDown, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useContext } from "react";
import {
  TranslationContext,
  useTranslation,
} from "../../context/TraslationContext";
import { LanguageType } from "../../types/interfaceContext";
import { Link } from "react-router-dom";
import Aos from "aos";

export const NavBar = () => {
  const { content } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const location = useLocation();
  const isMobile = window.innerWidth <= 1024;

  const { language, setLanguage } = useContext(TranslationContext);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const donationimg = language === "es" ? "https://somosawaqblob.blob.core.windows.net/congress/donation/quierodonar.png" : "https://somosawaqblob.blob.core.windows.net/congress/donation/wanttodonate.png";

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedLanguage: LanguageType
  ) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    setLanguage(selectedLanguage);
    setLanguageDropdownVisible(false); // Ocultar el menú desplegable después de seleccionar el idioma
  };

  useEffect(() => {
    const listElements = document.querySelectorAll(".menu__item--show");
    const list = document.querySelector(".navbar-Responsive");
    const menu = document.querySelector(".btnHamburguer-Responsive");
    const responsiveLinks = document.querySelectorAll(".links_a-Responsive");

    // Función para manejar el click en cada elemento del menú
    const addClick = () => {
      listElements.forEach((element: Element) => {
        element.addEventListener("click", () => {
          // Obtener el submenú del elemento
          const subMenu = element.children[1] as HTMLElement;
          let height = 0;

          // Alternar clase para cambiar el estado del elemento
          if (subMenu.clientHeight === 0) {
            // Cerrar cualquier otro submenú abierto
            closeOtherSubMenus();

            // Obtener la altura del submenú si está oculto
            height = subMenu.scrollHeight;
          }

          // Establecer la altura del submenú
          subMenu.style.height = `${height}px`;
        });
      });
    };

    const handleMenuClick = () => {
      // Alternar clase para mostrar u ocultar el menú principal
      list?.classList.toggle("menu__responsive--show");
      // Si el menú principal se está cerrando, cerrar todos los submenús
      if (!list?.classList.contains("menu__responsive--show")) {
        closeOtherSubMenus();
      }
    };

    const closeOtherSubMenus = () => {
      listElements.forEach((element: Element) => {
        // Obtener el submenú del elemento
        const subMenu = element.children[1] as HTMLElement;
        // Cerrar el submenú
        subMenu.style.height = "0px";
      });
    };

    // Función para manejar el clic en cualquier parte del documento
    const handleDocumentClick = (event: MouseEvent) => {
      // Obtener el elemento que se hizo clic
      const target = event.target as HTMLElement;

      // Verificar si el clic se realizó fuera del menú y submenús
      if (!list?.contains(target) && !menu?.contains(target)) {
        // Cerrar todos los submenús abiertos
        closeOtherSubMenus();
        // Ocultar el menú principal si no se hizo clic en él
        list?.classList.remove("menu__responsive--show");
      }
    };

    addClick();

    // Función para manejar el clic en cualquier enlace con la clase "a-Responsive"
    const handleLinkClick = () => {
      list?.classList.remove("menu__responsive--show");
    };

    // Agregar event listener al botón del menú principal
    menu?.addEventListener("click", handleMenuClick);

    // Agregar event listener para cerrar el menú al hacer clic en cualquier parte del documento
    document.addEventListener("click", handleDocumentClick);

    // Agregar event listener a cada enlace con la clase "a-Responsive"
    responsiveLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("resize", addClick);

    // Remover event listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", addClick);
      menu?.removeEventListener("click", handleMenuClick);
      document.removeEventListener("click", handleDocumentClick);
      responsiveLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className="bg-white px-7 fixed top-0 left-0 w-full h-20 z-50 shadow-md lg:px-14">
      <section className="flex justify-between items-center w-90% h-full my-0 mx-auto max-w-1200">
        <Link to="/">
          <a>
            <img
              className="w-11 h-auto cursor-pointer"
              src={LOGO}
              alt="Logo..."
              loading="lazy"
              draggable="false"
            />
          </a>
        </Link>
        {!(
          location.pathname === "/donations"
        ) && (
        <div data-aos="zoom-in" className="flex items-center justify-center gap-2 fixed right-6 bottom-6 px-8 py-3 heartbeat">
          <Link to="/donations">
          <div className="flex items-center justify-center">
            <div 
              className="relative flex items-center justify-center"
              style={{
                backgroundImage: `url('https://somosawaqblob.blob.core.windows.net/congress/donation/green-heart-shadows.png')`,
                backgroundSize: 'contain', // Cambiado de cover a contain
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '125px', // Ajusta el ancho de acuerdo a tu imagen
                height: '125px', // Ajusta la altura de acuerdo a tu imagen
              }}
            >
              <p className="text-white flex justify-center items-center self-center text-center mx-4 font-bold text-lg">{content?.navbar[language].donacion}</p>
            </div>
          </div>
          </Link>
        </div>
        )}


        <ul className="flex transition-transform duration-500 h-full navbar-Responsive">
          <li className="list-none relative h-full cursor-pointer menu__item--show menu_item">
            <a className="flex t-decoration-none px-4 h-full items-center a-Responsive">
              {content?.navbar[language].congress}{" "}
              <img
                className="arrow-Responsive"
                src={ARROW}
                alt="Arrow..."
                draggable="false"
              />
            </a>
            <ul
              className="bg-black text-white absolute right-0 bottom-0 transform translate-y-full clip-path duration-300 ul-Responsive"
              style={{ clipPath: "var(--clip)" }}
            >
              <li>
                <Link to="/congreso">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].congress}
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link to="/uamforum">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].forum}
                  </a>
                </Link>
              </li> */}
              <li>
                <Link to="/sophic">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].sophic}
                  </a>
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/manifiesto">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].manifesto}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/lineas-tematicas">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].lineas}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/propuesta-de-valor">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].propuesta}
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-none relative h-full cursor-pointer menu__item--show menu_item">
            <a className="flex t-decoration-none px-4 h-full items-center a-Responsive">
              {content?.navbar[language].agenda}
              <img
                className="arrow-Responsive"
                src={ARROW}
                alt="Arrow..."
                draggable="false"
              />
            </a>
            <ul
              className="bg-black text-white absolute right-0 bottom-0 transform translate-y-full clip-path duration-300 ul-Responsive"
              style={{ clipPath: "var(--clip)" }}
            >
              <li>
                <Link to="/agenda">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].schedule}
                  </a>
                </Link>
              </li>
              <li>
            <Link to="/recintoUam">
              <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                {content?.navbar[language].venue}
              </a>
            </Link>
          </li>
            </ul>
          </li>
          <li className="list-none relative h-full cursor-pointer menu__item--show menu_item">
            <a className="flex t-decoration-none px-4 h-full items-center a-Responsive">
              {content?.navbar[language].comoLlegar}
              <img
                className="arrow-Responsive"
                src={ARROW}
                alt="Arrow..."
                draggable="false"
              />
            </a>
            <ul
              className="bg-black text-white absolute right-0 bottom-0 transform translate-y-full clip-path duration-300 ul-Responsive"
              style={{ clipPath: "var(--clip)" }}
            >
              <li>
                <Link to="/como-llegar">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].comoLlegar}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/visita-manizales">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].visitaManizales}
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-none relative h-full cursor-pointer menu__item--show menu_item">
            <a className="flex t-decoration-none px-4 h-full items-center a-Responsive">
              {content?.navbar[language].organizations}
              <img
                className="arrow-Responsive"
                src={ARROW}
                alt="Arrow..."
                draggable="false"
              />
            </a>
            <ul
              className="bg-black text-white absolute right-0 bottom-0 transform translate-y-full clip-path duration-300 ul-Responsive"
              style={{ clipPath: "var(--clip)" }}
            >
              <li>
                <Link to="/marketplace">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    Marketplace
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/organizaciones">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].organizations}
                  </a>
                </Link>
              </li>
            </ul>
          </li> 

          <li>
            <Link to="/patrocinadores">
              <a className="flex t-decoration-none px-4 h-full items-center a-Responsive links_a-Responsive">
                {content?.navbar[language].sponsors}
              </a>
            </Link>
          </li>
          <li>
            <Link to="/contacto">
              <a className="flex t-decoration-none px-4 h-full items-center a-Responsive links_a-Responsive">
                {content?.navbar[language].contact}
              </a>
            </Link>
          </li>
          {/* <li className="list-none relative h-full cursor-pointer menu__item--show menu_item">
            <a className="flex t-decoration-none px-4 h-full items-center a-Responsive">
              {content?.navbar[language].pressRoom}
              <img
                className="arrow-Responsive"
                src={ARROW}
                alt="Arrow..."
                draggable="false"
              />
            </a>
            <ul
              className="bg-black text-white absolute right-0 bottom-0 transform translate-y-full clip-path duration-300 ul-Responsive"
              style={{ clipPath: "var(--clip)" }}
            >
              <li>
                <Link to="/sala-de-prensa">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].pressRoom}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/noticias">
                  <a className="flex bg-green-btn-nav t-decoration-none px-5 py-4 h-full items-center a-Responsive a-inside-Responsive links_a-Responsive">
                    {content?.navbar[language].noticias}
                  </a>
                </Link>
              </li>
            </ul>
          </li>  */}
            <Link to="/sala-de-prensa">
              <a className="flex t-decoration-none px-4 h-full items-center a-Responsive links_a-Responsive">
                {content?.navbar[language].pressRoom}
              </a>
            </Link>
          <li>
            <Link to="/inscripcion">
              <a className="hidden a-Responsive__Register links_a-Responsive">
                {content?.navbar[language].register}
              </a>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <Link to="/donations">
            <img src={donationimg} className=" text-white px-4 py-2 w-28 rounded-md font-sans font-medium transition duration-300  hover:text-black btnRegister-Responsive ">
            </img>
          </Link> */}
          <Link to="/inscripcion">
            <a className="bg-green-btn-nav text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow btnRegister-Responsive">
              {content?.navbar[language].register}
            </a>
          </Link>
          {/* Boton idioma */}
          <div className=" relative xs:top-0 xs:px-4 sm:top-0 sm:px-6 md:top-0 md:px-6 lg:hidden md:hidden sm:hidden xs:hidden">
            <button
              id="language-btn"
              className=" p-3 order-white bg-green-btn-nav border-2 hover:bg-green rounded-md  cursor-pointer flex justify-center items-center transition-all duration-200 text-[#ffffffcc] text-xl hover:font-bold hover:text-2xl text-[#ffffff]"
              onClick={toggleLanguageDropdown}
            >
              {language === "es" ? (
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  ES
                  <AiOutlineDown className="ml-1" />
                </div>
              ) : (
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  EN
                  <AiOutlineDown className="ml-1" />
                </div>
              )}
            </button>

            {/* Lista desplegable */}
            {languageDropdownVisible && (
              <div className="xs:absolute  xs:mt-0  sm:absolute  sm:mt-0  md:absolute  md:mt-0   absolute top-full  mt-2 bg-green-btn-nav border border-gray-300 rounded-md overflow-hidden shadow-lg">
                <button
                  className="  w-full p-2 text-left text-white hover:text-white focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "es")}
                >
                  ES
                </button>
                <button
                  className="  w-full p-2 text-left text-white hover:text-white focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 xl:hidden 2xl:hidden">

        <Link to="/donations">
            <img src={donationimg} className=" text-white px-4 py-2 w-28 rounded-md font-sans font-medium transition duration-300  hover:text-black ">
            </img>
          </Link>

          <div className=" relative xs:top-0 xs:px-4 sm:top-0 sm:px-6 md:top-0 md:px-6">
            <button
              id="language-btn"
              className=" p-3 order-white bg-green-btn-nav border-2 hover:bg-green rounded-md  cursor-pointer flex justify-center items-center transition-all duration-200 text-[#ffffffcc] text-xl hover:font-bold hover:text-2xl text-[#ffffff]"
              onClick={toggleLanguageDropdown}
            >
              {language === "es" ? (
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  ES
                  <AiOutlineDown className="ml-1" />
                </div>
              ) : (
                
                <div className="flex flex-row items-center flex-nowrap text-sm">
                  EN
                  <AiOutlineDown className="ml-1" />
                </div>
              )}
            </button>

            {/* Lista desplegable */}
            {languageDropdownVisible && (
              <div className="xs:absolute  xs:mt-0  sm:absolute  sm:mt-0  md:absolute  md:mt-0   absolute top-full  mt-2 bg-green-btn-nav border border-gray-300 rounded-md overflow-hidden shadow-lg">
                <button
                  className="  w-full p-2 text-left text-white hover:text-white hover:bg-green-600 focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "es")}
                >
                  ES
                </button>
            
                <button
                  className="  w-full p-2 text-left text-white hover:text-white hover:bg-green-600 focus:outline-none"
                  onClick={(e) => handleLanguageChange(e, "en")}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          <div className="hidden btnHamburguer-Responsive">
            <img
              src={MENU}
              alt="Menu..."
              draggable="false"
              loading="lazy"
              className="cursor-pointer block w-12"
            />
          </div>

        </div>
        {isMobile && !(
          location.pathname === "/inscripcion"
        ) && (
          <button
            className="flex items-center gap-2 fixed right-6 bottom-6 bg-white px-8 py-3 rounded-md font-bold text-lg shadow-lg transition duration-300 hover:bg-green-btn-nav hover:text-white"
            onClick={() => {
              window.location.href = "/inscripcion"; // Redirigir a la ruta "/inscripcion"
            }}
          >
            <>
              {content?.navbar[language].register}
              <AiOutlineArrowRight />
            </>
          </button>
        )}
      </section>
    </nav>
  );
};