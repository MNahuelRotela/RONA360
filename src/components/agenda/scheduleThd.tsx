import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from "react";


export const ScheduleThd = () => {
  const { language, content } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const isLongText = (text: string) => {
    return text.length > 25; // Ajusta este número según lo que consideres "largo"
  };

  const isVeryLongText = (text: string) => {
    return text.length > 50; // Ajusta este número según lo que consideres "muy largo"
  };

  return (
    <div data-aos="zoom-in" className=" h-auto w-auto m-auto my-10 xl:h-auto xl:w-[50rem] lg:h-auto lg:w-[43rem] md:h-auto md:w-[35rem] sm:h-auto sm:w-[24rem] sm:mx-auto xs:h-auto xs:w-[19rem] xs:mx-auto">
      <section  className="flex flex-col w-auto h-auto" >
        <div className=" text-textdisabled text-xl mt-10 sm:text-lg xs:text-base"><p className="">{content?.agenda[language].day3.dateComplet}</p></div>
        {/* schedule */}
          {
            content?.agenda[language].day3.events.map(
              (item: {hours: string, nameEvent: string, location:string, id: number}) => (
                <div data-aos="fade-up" className="flex flex-row h-[8.313rem] w-[100%] border-dark_gray border-b-[1px] border-t-4 rounded-xl my-8">
                  <div className="mx-16 flex flex-row h-auto w-full sm:mx-4 xs:mx-2">
                    <div className="flex flex-col w-[50%] m-auto gap-4" key={item.id}>
                        <p className="font-semibold text-xl lg:text-lg md:text-lg sm:text-sm xs:text-ss">{item.hours}</p>
                        <p className={`font-semibold ${isVeryLongText(item.nameEvent) ? 'text-base' : isLongText(item.nameEvent) ? 'text-xl' : 'text-2xl'} lg:text-xl md:text-xl sm:text-base xs:text-sm`}>{item.nameEvent}</p>
                    </div>
                    <div className="flex flex-col w-[50%] items-end">
                      <a href={item.location} className=" contents"><button className="bg-mustard-btn-agenda rounded-xl text-black font-semibold w-48 h-12 text-xl sm:w-24 sm:h-8 sm:text-sm xs:w-20 xs:text-ss my-auto flex justify-center align-middle items-center">{content?.agenda[language].btnAuditorium}</button></a>
                    </div>
                  </div>
                </div>
              )
            )}
      </section>
    </div>
  )
}