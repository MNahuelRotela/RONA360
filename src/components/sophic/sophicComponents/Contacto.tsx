import { useTranslation } from "../../../context/TraslationContext";
const Contacto = () => {
  const { language, content  } = useTranslation();
  return (
    <div data-aos="fade-up" className="relative font-open-sans">
      <img
        className="w-full"
        src="https://somosawaqblob.blob.core.windows.net/congress/congreso-sophic/Box_Contacto.png"
        alt="banner"
      />
      <div className="absolute inset-0 ml-[12%] mt-[10%] mr-[3%] flex flex-col space-y-2 text-left uppercase xs:space-y-0 sm:space-y-0 ">
        <span className="2xl:text-base xs:text-[7px]  sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-sm">
        {content?.sophic[language].contact.contact1}
        </span>
        <a
          href="https://www.ambiental.sophicol.org/#"
          target="_blank"
          className="text-base font-bold xs:text-[7px]  sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-sm"
        >
          {content?.sophic[language].contact.page}
        </a>
      </div>
      <div className="absolute inset-0 ml-[18%] mt-[16%] mr-[12%] flex flex-col space-y-2 text-right uppercase pt-2 xs:space-y-0 xs:mt-[18%] sm:mr-[5%] sm:mt-[18%] sm:space-y-0 md:mr-[8%]">
        <span className="text-base xs:text-[7px]   sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-sm">
        {content?.sophic[language].contact.contact2}
        </span>
        <a
          href={`mailto:${content?.sophic[language].contact.email}`}
          target="_blank"
          className="text-base font-bold xs:text-[7px]  sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-sm"
        >
          {content?.sophic[language].contact.email}
        </a>
        <a
          href="https://wa.me/+573014633155"
          target="_blank"
          className="text-base font-bold xs:text-[7px]  sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-sm"
        >
          {content?.sophic[language].contact.whatsapp}
        </a>
      </div>
    </div>
  );
}

export default Contacto;
