import { useTranslation } from "../../../context/TraslationContext";

const Description2Sophic = () => {
const {language,content}=useTranslation();
    return (
        <div data-aos="fade-up" className="my-36 mx-52 text-2xl xs:mx-10 xs:my-14 xs:text-[14px] sm:mx-10 sm:text-[14px] sm:my-20 md:mx-24 md:my-20 xl:my-32 md:text-[16px] xl:mx-36 lg:mx-36">
            <div className="flex justify-center mt-20 text-center xs:mt-0">
            {content?.sophic[language].descriptions.description3}
            </div>
            <div className="flex justify-center mb-20 text-center xs:mb-0">
            {content?.sophic[language].descriptions.description4}
            </div>
        </div>
    );
}

export default Description2Sophic;
