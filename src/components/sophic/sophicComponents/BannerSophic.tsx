
const BannerSophic = () => {
  return (
    <div data-aos="fade-right" className="relative">
      <img
        className="mt-20 w-full z-0"
        src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/bannercongresoambiental_1.png"
        alt="Banner Sophic"
      />
      <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-[52%] flex space-x-8 xs:bottom-[-33%] xs:space-x-4 sm:bottom-[-40%] sm:space-x-4 md:bottom-[-25%] lg:bottom-[-20%]">
        <div className="relative z-10 w-[65%]  sm:w-[200px] md:w-[220px] lg:w-[230px] xs:w-[140px]">
          <img
            className="w-full h-auto rounded-[40px] px-8 bg-[#F3F3F3] drop-shadow-lg xs:px-5 sm:px-4 sm:rounded-[20px] md:rounded-[20px] lg:rounded-[20px]"
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/logo-sophic.png"
            alt="Logo Unicomfacauca"
          />
        </div>
        <div className="relative z-10 w-[55%] xs:w-[115px] sm:w-[180px] md:w-[195px] lg:w-[200px]">
          <img
            className="w-full h-auto rounded-[40px] px-12 py-1 bg-[#F3F3F3] drop-shadow-lg xs:px-5 xs:py-0 sm:py-0 sm:px-8 sm:rounded-[20px] md:rounded-[20px] lg:rounded-[20px]"
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/comfacauca.png"
            alt="Logo Sophic"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerSophic
