import AOS from "aos";
import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa";

interface MultimediaVideoProps {
  videoUrl: string;
  videodescription: string;
}

export const MultimediaVideo: React.FC<MultimediaVideoProps> = ({ videoUrl, videodescription }) => {
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
  }, []);

  return (
    <div className="mt-11 h-full  flex flex-col items-center justify-center">
      <div className="w-full" data-aos="fade-up">
        <div className="w-full h-full">
          <div className="flex justify-center w-full h-full relative">
            <video
              ref={videoRef}
              className="h-full max-h-[85vh] w-auto object-cover"
              controls
              preload="auto"
              autoPlay={false}
              loop={false}
              // poster={`https://somosawaqblob.blob.core.windows.net/congress/home/wallpappervideo.png`}
            >
              <source src={videoUrl} type="video/mp4" />
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
        <p className="font-extrabold mt-1">Video</p>
        <p>{videodescription}</p>
      </div>
    </div>
  );
};
