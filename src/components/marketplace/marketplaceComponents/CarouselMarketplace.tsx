import React, { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "tailwindcss/tailwind.css";
import { Autoplay, Pagination } from "swiper/modules";
// import { useTranslation } from "../../../context/TraslationContext";
import { Link } from "react-router-dom";

const Jose = "https://via.placeholder.com/150";
const Nicolas = "https://via.placeholder.com/150";
const Nahuel = "https://somosawaqblob.blob.core.windows.net/congress/home/new-donations.jpg";
const Cristina = "https://somosawaqblob.blob.core.windows.net/congress/visitmanizales/marketplace-banner.png";
const eduardo = "https://via.placeholder.com/150";
const olga = "https://somosawaqblob.blob.core.windows.net/congress/marketplace/market-miel.jpg";
const victoria = "https://via.placeholder.com/150";

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: Jose,
    title: "Organizacion 2",
    ubication: "España",
    org: "AWAQ",
    description:
      "Como Director en AWAQ Estaciones Biologicas, ampliaré el modelo utilizado en nuestra organización, en donde nos especializamos en colaborar con empresas y el sector público para garantizar la sostenibilidad medioambiental a largo plazo. Nuestra experiencia en restauración de hábitats y seguimiento científico nos permite ofrecer soluciones eficaces y personalizadas que preservan la biodiversidad, promueven el equilibrio ecológico y satisfacen las necesidades específicas de organizaciones tanto corporativas como del sector público.",
    description_en:
      "As Director at AWAQ Biological Stations, I will expand the model used in our organization, where we specialize in collaborating with companies and the public sector to ensure long-term environmental sustainability. Our experience in habitat restoration and scientific monitoring allows us to offer effective and personalized solutions that preserve biodiversity, promote ecological balance, and meet the specific needs of both corporate and public sector organizations.",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/Espa%C3%B1a.png",
  },
  {
    id: 6,
    imageUrl: victoria,
    title: "Sophic",
    ubication: "Colombia",
    org: "UAM",
    description:
      "Coordinadora Especialización en Formulación, Gerencia y Evaluación de Proyectos de Desarrollo / Coordinadora practica social en la Universidad Autónoma de Manizales",
    description_en:
      "Coordinator Specialization in Formulation, Management and Evaluation of Development Projects / Social practice coordinator at the Autonomous University of Manizales",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/colombia2.png",
  },
  {
    id: 4,
    imageUrl: Nicolas,
    title: "Organizacion 1",
    ubication: "Chile",
    org: "AWAQ",
    description:
      "Como Director del programa Campus de AWAQ , mantenemos relaciones con instituciones universitarias y organismos internacionales para colaborar en diversos proyectos y proteger el desarrollo tecnologico por medio de la Ciber-Seguridad",
    description_en:
      "As Director of the AWAQ Campus program, we maintain relationships with universities and international organizations to collaborate on various projects and protect technological development through Cyber-Security",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/chile2.png",
  },
  {
    id: 5,
    imageUrl: eduardo,
    title: "Gobernación de Caldas",
    ubication: "Colombia",
    org: "UAM",
    description: "Rector en la Universidad Autónoma de Manizales",
    description_en: "Rector at the Autonomous University of Manizales",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/colombia2.png",
  },
  {
    id: 3,
    imageUrl: olga,
    title: "Visit Manizales",
    ubication: "Colombia",
    org: "UAM",
    description:
      "Coordinadora del Doctorado en Sostenibilidad de la Universidad Autonoma de Manizales",
    description_en:
      "Coordinator of the Doctorate in Sustainability at the Autonomous University of Manizales",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/colombia2.png",
  },
  {
    id: 2,
    imageUrl: Nahuel,
    title: "UAM",
    ubication: "Argentina",
    org: "AWAQ",
    description:
      "Director del programa TEDI en AWAQ ONGD, donde coordina y gestiona diversas iniciativas tecnológicas para potenciar el impacto de las actividades ambientales de la organización. El objetivo principal de su intervención es equipar a las organizaciones ambientales con las herramientas y conocimientos necesarios para superar las limitaciones tecnológicas. Al compartir estrategias efectivas y casos de éxito, se busca fortalecer la capacidad de estas organizaciones para llevar a cabo proyectos ambientales más eficientes y sostenibles. Su misión es que los asistentes se vayan con una comprensión clara de cómo pueden aprovechar las tecnologías disponibles para transformar sus iniciativas ambientales, logrando un impacto positivo y duradero en sus comunidades y más allá.",
    description_en:
      "Program Director of TEDI at AWAQ ONGD, where he coordinates and manages various technological initiatives to enhance the impact of the organization's environmental activities. The main objective of his intervention is to equip environmental organizations with the necessary tools and knowledge to overcome technological limitations. By sharing effective strategies and success stories, he aims to strengthen the capacity of these organizations to carry out more efficient and sustainable environmental projects. His mission is for attendees to leave with a clear understanding of how they can leverage available technologies to transform their environmental initiatives, achieving a positive and lasting impact in their communities and beyond.",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/argentina.png",
  },
  {
    id: 2,
    imageUrl: Cristina,
    title: "Awaq ONGD",
    ubication: "México",
    org: "Tec. Monterrey",
    description:
      "Profesora Docente y Coordinadora de Socios Formadores para Tec21 en el Departamento de Computación en el Tecnológico de Monterrey, México.",
    description_en:
      "Professor, Instructor, and Coordinator of Partner Formers for Tec21 in the Department of Computing at Tecnológico de Monterrey, Mexico.",
    countryimg:
      "https://somosawaqblob.blob.core.windows.net/congress/agenda/mexico.png",
  },
];

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  ubication: string;
  org: string;
  countryimg?: string;
  description?: string;
  description_en?: string;
}

const CarouselMarketplace: React.FC = () => {
  // const { language } = useTranslation();
  // const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  // const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  // const handleShowMoreInfo = (slide: Slide) => {
  //   setSelectedSlide(slide);
  //   setShowMoreInfo(true);
  // };

  // const handleCloseMoreInfo = () => {
  //   setShowMoreInfo(false);
  //   setSelectedSlide(null);
  // };

  // Referencia a la instancia de Swiper
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-32 lg:mb-20 lg:mt-16 md:mb-20  flex flex-col items-center justify-center relative xl:max-w-5xl xl:m-auto lg:max-w-3xl lg:m-auto md:max-w-xl md:m-auto sm:max-w-md sm:m-auto xs:max-w-xs xs:m-auto" data-aos="fade-up">
      {/* <div className="absolute right-0 top-0 w-36 h-full bg-white z-10 blur-3xl flex items-center justify-center"></div>
      <div className="absolute right-0 top-0 w-36 h-full bg-white z-10 blur-md"></div> */}
      <div className="absolute left-0 top-0 w-[30%] h-full bg-white z-10 blur-md"></div>
      <div className="absolute left-0 top-0 w-[10%] h-full bg-white z-10"></div>
      <div className="absolute left-0 top-0 w-[30%] h-full bg-white z-10 blur-3xl"></div>
      <div className="w-[330px] flex flex-col absolute left-0 z-20 lg:top-8 lg:left-6 md:top-8 md:left-6">
        <p className="mb-10 text-3xl text-d_green font-semibold leading-tight lg:text-xl md:text-xl">
          See how leading brands use carbon neutral checkout to grow customer
          relationships, sustainably.
        </p>
        <Link to="/404">
          <button className="bg-green-btn-nav text-white px-4 py-2 rounded-md font-sans font-medium transition duration-300 hover:bg-dark-yellow">
          Más organizaciones
          </button>
        </Link>
      </div>
      <Swiper
        ref={swiperRef}
        className="w-full h-full overflow-hidden relative"
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1152: {
            slidesPerView: 4,  // Aquí puedes ajustar el número de slides a mostrar
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 0,
          },

        }}
        autoplay={{
          delay: 3000,
        }}
      >
        {/* Slides mapping */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-1 drop-shadow-lg">
              <div
                className="flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer"
                // onClick={() => handleShowMoreInfo(slide)}
              >
                <img
                  className="2xl:w-96 2xl:h-72 xl:w-96 xl:h-64 lg:w-64 p-4 object-center"
                  src={slide.imageUrl}
                  alt={slide.title}
                />
                <div className="relative flex flex-col mx-auto h-full items-center justify-end">
                  <div className="h-24">
                    <h3 className="relative text-xl font-semibold text-center mx-2 mt-4">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
      <div
        className="swiper-button-prev absolute left-[35%] top-1/2 transform -translate-y-1/4 bg-green-btn-nav text-white rounded-full pr-2 w-16 h-16 flex items-center justify-center cursor-pointer"
        onClick={handlePrev}
      ></div>
      <div
        className="swiper-button-next absolute 2xl:right-[10%] xl:right-[10%] lg:right-[10%] top-1/2 transform -translate-y-1/4 bg-green-btn-nav text-white rounded-full pl-2 w-16 h-16 flex items-center justify-center cursor-pointer"
        onClick={handleNext}
      ></div>
    </div>
  );
};

export default CarouselMarketplace;