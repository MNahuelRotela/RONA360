
import React from 'react';
import { Banner } from './banner.tsx';
import LineasTematicas from './lineasTematicas.tsx';
import { Propuesta } from './propuesta/index.tsx';
import Objetivos from '../objetivos/objetivos.tsx';
import Beneficios from '../beneficios/beneficios.tsx'
import { Slider } from '../agenda/slider/Slider.tsx';
import { TeContamosMas } from './manifiesto/teContamosMas.tsx';
import { useState, useEffect } from 'react';
import { Loader } from '../loader';

interface CongresoProps {
  imageUrl: string;
}


export const Congreso: React.FC<CongresoProps> = () => {
  const [loading, setLoading] = useState(true);

  // Simula un tiempo de carga de 4 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=''>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white h-full w-full">
          <Loader />
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Banner />
        <LineasTematicas />
        <Propuesta />
        <Objetivos />
        <Slider />
        <Beneficios />
        <TeContamosMas/>
      </div>
     
    </div>
  );
};