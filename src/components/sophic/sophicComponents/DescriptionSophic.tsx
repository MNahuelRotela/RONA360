import { useTranslation } from "../../../context/TraslationContext"

const DescriptionSophic = () => {
  const {language,content}=useTranslation();
  return (
    <div data-aos="fade-up" className=" mt-44  mb-28 xs:my-16 sm:mt-32 md:my-24 ">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[56%] text-[20px] text-justify xl:text-[18px] lg:w-[50%] lg:text-[16px] md:text-[12px] md:w-[46%] sm:w-[66%] sm:text-[12px] xs:text-[10px] xs:w-40">
        {content?.sophic[language].descriptions.description1}
        </div>
        <div>
          <div className="relative">
            <img
              className="w-56 md:w-48 sm:w-32 xs:w-28"
              style={{ filter: 'brightness(40%)' }}
              src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_115.png"
              alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="mb-1 text-3xl font-bold text-white text-center  xs:text-sm sm:text-xl md:text-2xl">{content?.sophic[language].date}</span>
              <svg className="xs:w-9" width="54" height="66" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0V6.59107H7.5C3.615 6.59107 0.5 9.55705 0.5 13.1821V59.3196C0.5 61.0677 1.2375 62.7441 2.55025 63.9802C3.86301 65.2163 5.64348 65.9107 7.5 65.9107H56.5C58.3565 65.9107 60.137 65.2163 61.4497 63.9802C62.7625 62.7441 63.5 61.0677 63.5 59.3196V13.1821C63.5 11.4341 62.7625 9.75761 61.4497 8.52155C60.137 7.28548 58.3565 6.59107 56.5 6.59107H53V0H46V6.59107H18V0H11ZM7.5 23.0687H56.5V59.3196H7.5V23.0687ZM32.665 26.3643C29.62 26.3643 27.17 27.0234 25.28 28.3086C23.46 29.6598 22.55 31.5383 22.585 34.1417L22.62 34.2406H29.375C29.41 33.2519 29.725 32.494 30.355 31.9667C30.985 31.4724 31.755 31.2087 32.665 31.2087C33.75 31.2087 34.66 31.5383 35.29 32.1315C35.92 32.7576 36.2 33.6145 36.2 34.6031C36.2 35.6577 35.955 36.5475 35.395 37.3055C34.905 38.0634 34.17 38.7225 33.26 39.2498C31.475 40.3703 30.25 41.359 29.585 42.2488C28.885 43.1056 28.5 44.4897 28.5 46.1375H35.5C35.5 45.1159 35.64 44.292 35.955 43.6988C36.27 43.1056 36.865 42.5124 37.74 41.9851C39.315 41.1942 40.61 40.2385 41.625 38.9203C42.64 37.6021 43.165 36.2509 43.165 34.6031C43.165 32.0985 42.22 30.0882 40.33 28.6052C38.475 27.1223 35.92 26.3643 32.665 26.3643ZM28.5 49.433V56.0241H35.5V49.433H28.5Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 xs:mt-5">
        <div className="relative">
          <img
            className="w-56 md:w-48 sm:w-32 xs:w-28"
            style={{ filter: 'brightness(40%)' }}
            src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/image_116.png"
            alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="mb-2 text-3xl font-bold text-white text-center  xs:text-sm sm:text-xl md:text-2xl">{content?.sophic[language].modalidad}</span>
            <svg className="xs:w-10" width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.0909 0.5C51.6682 0.5 53.8036 2.5655 54 5.2175V5.6V36.2C54 38.8775 51.9873 41.096 49.4591 41.3H49.0909H31.9091V46.4H36.8182V51.5H17.1818V46.4H22.0909V41.3H4.90909C2.33182 41.3 0.196364 39.209 0 36.5825V36.2V5.6C0 2.897 1.98818 0.704 4.54091 0.5H4.90909H49.0909ZM49.0909 5.6H4.90909V36.2H49.0909V5.6ZM27 23.45C32.4245 23.45 36.8182 25.745 36.8182 28.55V31.1H17.1818V28.55C17.1818 25.745 21.5755 23.45 27 23.45ZM27 10.7C29.7245 10.7 31.9091 12.995 31.9091 15.8C31.9091 18.605 29.7245 20.9 27 20.9C24.2755 20.9 22.0909 18.6305 22.0909 15.8C22.0909 12.9695 24.3 10.7 27 10.7Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="mt-10 w-[56%] text-[20px] text-justify xl:text-[18px] lg:w-[50%] lg:text-[16px] md:mt-10 md:text-[12px] md:w-[46%] sm:mt-5 sm:text-[12px] sm:px-5 sm:w-[66%] xs:mt-0 xs:text-[10px] xs:w-40">
        {content?.sophic[language].descriptions.description1}
        </div>
      </div>
    </div>
  )
}

export default DescriptionSophic
