import { useTranslation } from "../../../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";


export const MessageContact = () => {
  const { content, language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div data-aos="zoom-in" className="w-full h-[100vh] mt-20 ">
        <div className="flex h-[20vh] justify-center items-center bg-slate-200  ">
          <img src="https://somosawaqblob.blob.core.windows.net/congress/logo1c.svg" alt="logo1c" className="h-[18vh] relative" />
          <p className="w-2/3 text-center xs:text-lg sm:text-lg text-3xl text-[#F8BD3C] font-extrabold">
            {content?.contactform[language].messajePage}
          </p>
        </div>

        <div className="flex justify-center bg-slate-100 ">

          <div className="w-full flex flex-col items-center justify-center mx-10 mt-4 ">
            <p className="text-center text-xl font-extrabold mb-4 text-slate-700">
              {content?.contactform[language].messajePage2}
            </p>
            <img src="https://somosawaqblob.blob.core.windows.net/congress/contact/messageilustration2.png" alt="messageilustration" className="h-40 flex" />
            <p className="text-center text-sm font-extrabold text-[#9CC24D] mt-4 mb-4">
              {content?.contactform[language].messajePage3}
            </p>
          </div>

        </div>

      </div>
    </>
  );
};
