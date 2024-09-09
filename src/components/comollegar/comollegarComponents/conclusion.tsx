import { useTranslation } from '../../../context/TraslationContext';

const Conclusion = () => {
  const { language, content  } = useTranslation();
  return (
    <div className="w-full h-full mt-20" data-aos="fade-up" >
        <div className="flex justify-center mb-4 text-center text-[35px] font-bold xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
          {content?.comoLlegar[language].conclusion}
        </div>
        <div className="flex justify-center mb-4 text-center text-[35px] font-bold text-[#385019] xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
          {content?.comoLlegar[language].conclusion2}
        </div>
        <div className="flex justify-center mb-20 mt-10 text-center text-[35px] font-semibold italic xs:mb-10 xs:text-lg sm:text-[30px] sm:mb-10 md:text-[30px] md:mb-10">
          {content?.comoLlegar[language].greeting}
        </div>
    </div>
  )
}

export default Conclusion