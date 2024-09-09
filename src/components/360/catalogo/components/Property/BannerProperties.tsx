import { Link } from "react-router-dom";

export const BannerProperty = () => {
  return (
    <div className="relative h-[50vh] " data-aos="fade-right">
      <div
        className="relative w-full h-[50vh] px-8 py-12 bg-cover xs:py-6 bg-center"
        style={{
          backgroundImage: `url(https://rona360blob.blob.core.windows.net/rona360/RONA360/Agencies%20fondo.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col xs:w-full z-10">
          <h1 className="text-white font-bold xs:text-3xl sm:text-3xl text-3xl leading-10 mb-4 sm:mb-0 font-open-sans">
            Explora nuestro catálogo de clientes
          </h1>
          <h4 className="text-white my-2 text-xl font-open-sans">
            Encuentra los detalles de tu agencia y descubre los recorridos que ya tienes con RONA360
          </h4>

          <h3 className="relative text-white xs:text-xl text-lg font-light font-open-sans mt-2">
            ¿Aún no tienes un recorrido?{" "}
            <br />
            No pierdas la oportunidad de potenciar tus ventas
            <span className="absolute bottom-0 left-0 w-[750px] h-[1px] bg-gray-300 sm:w-[350px] xs:w-[260px]"></span>
          </h3>
          <Link className=" relative w-32 h-5" to="/contactanos">
            <button className="bg-[#4d3819] text-white px-4 mt-5 py-1 w-auto  rounded-md font-sans font-medium transition duration-300 hover:bg-[#D89F4B]">
              Contactanos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
