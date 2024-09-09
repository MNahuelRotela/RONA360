import { useTranslation } from '../../../../context/TraslationContext';
import AOS from 'aos';
import { useEffect } from 'react';

const BannerAyuda: React.FC = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });


  return (
    <div data-aos="fade-right" className=' mt-20'>
      <div className="w-full h-full px-16 py-20"       
      style={{
        backgroundImage: `linear-gradient(40deg, rgba(0,0,0,0.8688725490196079) 0%, rgba(18,18,18,0.6924019607843137) 35%, rgba(255,255,255,0) 90%), url(https://somosawaqblob.blob.core.windows.net/congress/contact/Contactobanner2.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="flex flex-col w-2/4 md:w-3/4 xs:w-full"></div>
        <h1 className="text-white xs:text-3xl font-bold text-4xl leading-10 mb-4">{content?.contactform[language].title}</h1>
        <p className="text-white mb-4 text-xl font-bold  text-balance">
        {content?.contactform[language].subtitle}
        </p>
        <p className="text-white w-1/2 mb-8  text-balance">
        {content?.contactform[language].subtitle2}
        </p>
      </div>

    </div>
  );
};

export default BannerAyuda;
