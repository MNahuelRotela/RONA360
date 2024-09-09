import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContenInmobiliaria from "../../360/catalogo/Tours360Conten"; // Ajusta la ruta según tu estructura de carpetas
import { Pannellum } from '@readr-media/pannellum-react';
import { useTranslation } from '../../../context/TraslationContext';

const VirtualTourViewer: React.FC = () => {
  const { name, propertyId } = useParams<{ name: string; propertyId: string }>();
  const { language } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const inmobiliarias = ContenInmobiliaria[language].real_estate_agencies;
  const agency = inmobiliarias.find(agency => agency.name === name);
  const property = agency?.properties.find(property => property.id === propertyId);

  const [currentRoomId, setCurrentRoomId] = useState<string | null>(property?.rooms[0]?.id || null);

  if (!property) {
    return <div>Propiedad no encontrada.</div>;
  }

  const currentRoom = property.rooms.find(room => room.id === currentRoomId);

  if (!currentRoom) {
    return <div>Habitación no encontrada.</div>;
  }

  // Funciones para desplazarse a la izquierda o derecha en el carrusel
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gray-100 ">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-30 bottom-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 font-black rounded-full text-xl text-white hover:bg-opacity-75 transition-colors"
      >
        ←
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 z-30 bottom-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 font-black rounded-full text-xl text-white hover:bg-opacity-75 transition-colors"
      >
        →
      </button>

      {/* Carrusel de habitaciones superpuesto */}
      <div
        ref={carouselRef}
        className="absolute bottom-0 left-0 right-0 overflow-x-hidden z-20 p-4 bg-black bg-opacity-20 shadow-lg rounded-lg  flex space-x-4 scrollbar-hide"
      >
        {property.rooms.map(room => (
          <div
            key={room.id}
            onClick={() => setCurrentRoomId(room.id)}
            className={`cursor-pointer w-1/5 flex-shrink-0 p-2 rounded-lg text-center transition-colors duration-300 flex flex-col justify-center items-center ${
              currentRoomId === room.id ? 'border-2 border-white' : 'border-2 border-transparent'
            }`}
          >
            <img
              src={room.SM_image_url} // Usa la imagen en miniatura (SM)
              alt={room.name}
              className="h-16 object-cover justify-center items-center rounded-md"
            />
            <p className={`mt-2 text-white ${currentRoomId === room.id ? 'font-bold' : 'font-normal'}`}>
              {room.name}
            </p>
          </div>
        ))}
      </div>

      {/* Recorrido Virtual */}
      <Pannellum
        width="100%"
        height="100vh"
        image={currentRoom.HQ_image_url}
        pitch={0}
        yaw={180}
        hfov={200}
        autoLoad
      >
        {currentRoom.hotspots.map(hotspot => (
          <Pannellum.Hotspot
            key={hotspot.id}
            type={hotspot.type === "info" || hotspot.type === "custom" ? hotspot.type : "info"}
            pitch={hotspot.pitch}
            yaw={hotspot.yaw}
            text={hotspot.text}
            handleClick={() =>
              setCurrentRoomId(property.rooms.find(room => room.name === hotspot.targetRoom)?.id || currentRoomId)
            }
          />
        ))}
      </Pannellum>
    </div>
  );
};

export default VirtualTourViewer;
