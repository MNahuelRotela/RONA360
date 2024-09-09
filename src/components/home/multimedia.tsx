import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useState, useRef,useEffect } from 'react';
import "aos/dist/aos.css";
import { FaPlay } from 'react-icons/fa';

export const Multimedia: React.FC = () => {
    const video = "https://somosawaqblob.blob.core.windows.net/congress/home/videomanizales.MP4"
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
    <div className=" mt-28 w-full flex flex-col items-center justify-center " data-aos="fade-up" >
    <div className="w-full grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" data-aos="fade-up">
      
      <div className="w-full h-full">
      <div className="flex justify-center w-full h-full relative ml-16 md:ml-0 sm:ml-0 xs:ml-0 lg:ml-0 ">
          <video
            ref={videoRef}
            className="w-[42rem] h-full object-cover rounded-xl "
            controls
            preload="auto" autoPlay={false}
            loop={false}
            poster={`https://somosawaqblob.blob.core.windows.net/congress/home/wallpappervideo.png`}
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

      <div className="flex flex-col ml-20 py-10 xs:ml-0 sm:ml-0 lg:ml-0 lg:justify-center ">
        <h3 className="px-10 text-3xl font-bold text-left text-[#385019] xs:text-center lg:px-28 ">
        {content?.home[language].multimedia.title}
            </h3>
        <p className="pl-10 pr-40 text-left text-xl mt-8 xs:px-4 sm:px-4 md:px-10 lg:px-28 xs:ml-0 xs:text-center">
        {content?.home[language].multimedia.description}
        </p>
        
      </div>
    </div>
    </div>
  );
};
