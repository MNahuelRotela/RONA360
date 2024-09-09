import {
  useTranslation,
} from "../../../context/TraslationContext";


export const Information: React.FC = () => {
  const { language, content } = useTranslation();


  return (
    <div className=" flex relative flex-col bg-[#272727] rounded-3xl z-80 xs:w-full sm:w-full w-3/4 h-fit xs:px-8 px-16 py-4">
      <h3 className="text-2xl font-semibold mb-4 text-center text-white"> {content?.cortina[language].information.h2}</h3>
      <p className="text-base text-white">
      {content?.cortina[language].information.p1}
      </p>
      <p className="text-base text-white mt-4">
      {content?.cortina[language].information.p2}
      </p>
      <ul className="list-disc list-inside mt-4">
        <li className=" xs:my-1 sm:my-1 text-white">{content?.cortina[language].information.li1}</li>
        <li className=" xs:my-1 sm:my-1 text-white">{content?.cortina[language].information.li2}</li>
        <li className=" xs:my-1 sm:my-1 text-white">{content?.cortina[language].information.li3}</li>
        <li className=" xs:my-1 sm:my-1 text-white">{content?.cortina[language].information.li4}</li>
      </ul>
      <p className="mt-4 text-white">
      {content?.cortina[language].information.p3}
      </p>
      <p className="mt-4 text-white">
      {content?.cortina[language].information.p4}
      </p>
      <h3 className="text-2xl font-semibold text-center text-white">{content?.cortina[language].information.h3}</h3>
    </div>
  );
};