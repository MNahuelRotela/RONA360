import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TraslationContext";


export const BannerComoLlegar = () => {
    const { language, content  } = useTranslation();
    return (
        <>
            <div data-aos="fade-right" className="mt-20 z-10 bg-cover object-fill bg-center bg-no-repeat h-max w-full bg-[url('https://somosawaqblob.blob.core.windows.net/congress/como-llegar/banner.webp')]">
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className=" flex h-auto w-full md:items-center md:justify-center sm:items-center sm:justify-center">
                    <div className="flex h-full w-[500px] relative top-10 justify-center items-center text-center backdrop-blur-md ml-20 mb-20 sm:ml-0 xs:ml-0 lg:ml-12 md:ml-0">
                        <div className="flex flex-col mb-5 mx-[5%]">
                            <h4 className="text-white font-bold mb-2 text-3xl w-full mt-5 md:text-4xl sm:text-3xl  xs:text-3xl xs:w-full">
                                {content?.comoLlegar[language].bannerLandingPage.title}
                            </h4>
                            <h4 className="text-white mb-2 text-xl w-full md:text-xl sm:text-lg xs:text-lg xs:w-full">
                                {content?.comoLlegar[language].bannerLandingPage.description}
                            </h4>
                            <h4 className="text-white mb-2 text-lg w-full md:text-xl xs:w-full">
                                {content?.comoLlegar[language].bannerLandingPage.details}
                            </h4>
                            <Link to="/como-llegar">
                                <button className="mt-2 px-4 py-2 text-white font-semibold rounded-lg bg-green-btn-nav transition duration-300 hover:bg-dark-yellow">
                                    {content?.comoLlegar[language].bannerLandingPage.button}
                                </button>
                            </Link>
                        </div>
                    <div className="absolute top-[-10%] left-1/2 transform -translate-x-[50%] flex space-x-8 ">
                        <div className="relative z-10 w-[101%] sm:w-[200px] xs:w-[200px]">
                            <img
                                className="w-full h-auto rounded-md px-10 py-3 bg-white drop-shadow-lg "
                                src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/image_104.png"
                                alt="Logo clic"
                            />
                        </div>
                        <div className="relative z-10 w-[100%]">
                            <img
                                className="w-full h-auto rounded-md px-2 py-1 bg-white drop-shadow-lg"
                                src="https://somosawaqblob.blob.core.windows.net/congress/como-llegar/benidorm.png"
                                alt="Logo Hotel Benidom"
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}