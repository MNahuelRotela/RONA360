// src/components/MultimediaAudio.tsx
import React from 'react';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import LOGO from "../../../assets/navbar/LOGO.webp";

interface MultimediaAudioProps {
  audioUrl: string;
  title: string;
  mediaName: string;
  mediaLogo?: string; // Hacer mediaLogo opcional
}

export const MultimediaAudio: React.FC<MultimediaAudioProps> = ({ audioUrl, title, mediaName,mediaLogo}) => {
  return (

    <div className="mt-4 grid grid-cols-1 bg-gray-50 rounded-xl py-10" >
        <div className=' grid grid-cols-1 mb-4'>
        <div className=' flex justify-center '>
      <img src={mediaLogo || LOGO} alt={mediaName} className='w-10 h-auto  mx-4' />
      <h3 className='font-bold text-center'>{mediaName}</h3>
    </div>
            <h3 className=' flex justify-center text-center font-bold'>{title}</h3>
        </div>
      <div className=' flex justify-center'>
        <ReactH5AudioPlayer
            src={audioUrl}
            onPlay={() => console.log('Playing')}
            style={{ width: '60%', backgroundColor: '#f1f1f1', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};
