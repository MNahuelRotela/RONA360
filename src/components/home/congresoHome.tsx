import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa";

export const CongresoHome: React.FC = () => {
  const video =
    "https://somosawaqblob.blob.core.windows.net/congress/home/1%C2%BA_Congreso_horizontal-web.mp4";
  const { language, content } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      className=" mt-20 max-w-7xl m-auto flex flex-col items-center justify-center xl:max-w-5xl xl:m-auto lg:max-w-3xl lg:m-auto md:max-w-xl md:m-auto sm:max-w-md sm:m-auto xs:max-w-xs xs:m-auto p-1"
      data-aos="fade-up"
    >
      <div
        className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
        data-aos="fade-up"
      >
        <div className="flex flex-col">
          <h3 className=" text-3xl font-bold text-left text-[#385019] lg:text-2xl">
            {content?.home[language].congreso.title}
          </h3>
          <p className="pr-10  text-justify text-lg mt-8 xl:text-[13px]  lg:text-[13px]  sm:text-[16px] sm: sm:pr-0  xs:text-[16px] xs: xs:pr-0 md:text-[16px] md: md:pr-0">
            {content?.home[language].congreso.description1}
          </p>
          <p className="pr-10  text-justify  text-lg mt-5 xl:text-[13px]  lg:text-[13px]  sm:text-[16px] sm: sm:pr-0 xs:text-[16px] xs: xs:pr-0 md:text-[16px] md: md:pr-0">
            <span>{content?.home[language].congreso.description2}</span>
          </p>
          <p className="pr-10 text-left font-bold  mt-8 mb-8 font-open-sans italic text-lg lg:text-[13px] sm:text-[16px] sm: sm:pr-0 xs:text-[16px] xs: xs:pr-0  xl:text-[13px] md:text-[16px] md: md:pr-0">
            {content?.home[language].congreso.textbold}
          </p>
        </div>
        <div className="flex justify-center relative">
          <video
            ref={videoRef}
            className="w-auto h-full object-cover rounded-xl "
            controls
            preload="auto" autoPlay={false}
            loop={false}
            poster={`https://somosawaqblob.blob.core.windows.net/congress/home/congresogente.png`}
          >
            <source src={video} type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4"
              onClick={handlePlayPause}
            >
              <FaPlay className="text-4xl" />
            </button>
          )}
        </div>
        </div>
        
    </div>
  );
};
