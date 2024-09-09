import { Link } from "react-router-dom";



export const NotFound = () => {
    return(
<div className=" w-full h-screen overflow-y-hidden lg:px-12 lg:py-4 md:py-4 md:px-12 px-4 py-2 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-2 gap-2 bg-[#F3EADD]">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-8 lg:pb-0">
                <div className="relative flex justify-center items-center">
                    <div className="absolute flex">
                        <div className=" mb-36">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                              Parece que esta página no existe
                            </h1>
                            <p className="my-2 text-gray-800">
                              La página que buscas no se encuentra en este sitio web. Puedes regresar a la página principal o buscar la página que deseas.
                            </p>
                            <Link to="/agencies">
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#C7A26B] text-white hover:bg-[#D89F4B] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                              Regresar a la página de clientes
                            </button>
                            </Link>
                        </div>
                    </div>
                    {/* <div >
                        <img className=" h-[60vh] -my-20 -z-10 ml-48 w-auto justify-center flex self-center items-center" src="https://img.freepik.com/vector-gratis/error-404-ilustracion-concepto-paisaje_114360-7898.jpg" />
                    </div> */}
                </div>
            </div>
            <div className=" w-64 my-10 z-10">
                <img src="https://rona360blob.blob.core.windows.net/rona360/RONA360/RONA.svg" />
            </div>
        </div>

  );
};
