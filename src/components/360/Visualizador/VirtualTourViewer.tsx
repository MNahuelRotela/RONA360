import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContenInmobiliaria from "../../360/catalogo/Tours360Conten"; // Ajusta la ruta según tu estructura de carpetas
import { Pannellum } from '@readr-media/pannellum-react';
import { useTranslation } from '../../../context/TraslationContext';
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Hook personalizado para detectar el tamaño de la ventana
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

const VirtualTourViewer: React.FC = () => {
  const { name, propertyId } = useParams<{ name: string; propertyId: string }>();
  const { language } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const inmobiliarias = ContenInmobiliaria[language].real_estate_agencies;
  const agency = inmobiliarias.find(agency => agency.name === name);
  const property = agency?.properties.find(property => property.id === propertyId);

  const [currentRoomId, setCurrentRoomId] = useState<string | null>(property?.rooms[0]?.id || null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(true); // Controla la visibilidad del carrusel
  const [isLoading, setIsLoading] = useState(true); // Controla el estado de carga de las imágenes

  const currentRoom = property?.rooms.find(room => room.id === currentRoomId);

  // Obtener el tamaño de la ventana
  const windowSize = useWindowSize();

  if (!property) {
    return <div>Propiedad no encontrada.</div>;
  }

  if (!currentRoom) {
    return <div>Habitación no encontrada.</div>;
  }

  // Desplazar el carrusel para que la habitación actual esté visible
  useEffect(() => {
    const currentRoomElement = document.getElementById(`room-${currentRoomId}`);
    currentRoomElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [currentRoomId]);

  // Funciones para desplazarse a la izquierda o derecha en el carrusel
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Determinar si se debe usar la imagen SM o HQ basado en el tamaño de la pantalla
  const imageToUse = windowSize.width <= 640 ? currentRoom.SM_image_url : currentRoom.HQ_image_url;

  // Ajustar el hfov basado en el tamaño de la pantalla
  const hfovValue = windowSize.width <= 640 ? 90 : 200;

  return (
    <div className="relative bg-gray-100 overflow-y-clip">
      {/* Mostrar indicador de carga mientras la imagen esté cargando */}
      {isLoading && (
        <div className="absolute flex flex-col w-full h-full inset-0 items-center justify-center z-40" style={{ backgroundColor: agency?.principalColor }} >
          <img src={agency?.logo_url} alt={agency?.name} className="h-[30vh] w-auto" />
          <p className="text-white font-bold text-2xl">Cargando...</p>
        </div>
      )}

      {/* Botón para desplazarse a la izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute z-30 bottom-10 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 font-black rounded-full text-2xl text-white hover:bg-opacity-75 transition-colors"
      >
        <IoIosArrowBack />
      </button>

      {/* Botón para desplazarse a la derecha */}
      <button
        onClick={scrollRight}
        className="absolute z-30 bottom-10 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 font-black rounded-full text-2xl text-white hover:bg-opacity-75 transition-colors"
      >
        <IoIosArrowForward />
      </button>

      {/* Botón para mostrar/ocultar el carrusel */}
      <button
        onClick={() => setIsCarouselVisible(!isCarouselVisible)}
        className={`absolute z-40 p-2 w-10 h-10 bg-black bg-opacity-50 font-black rounded-full text-2xl text-white hover:bg-opacity-75 transition-colors ${
          isCarouselVisible ? 'bottom-1/4 mb-4 left-1/2 transform -translate-x-1/2 mt-4' : 'bottom-10 left-1/2 transform -translate-x-1/2 mb-4'
        }`}
      >
        {isCarouselVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      {/* Carrusel de habitaciones */}
      <div
        ref={carouselRef}
        className={`absolute bottom-0 left-0 right-0 overflow-x-hidden z-20 p-4 bg-black bg-opacity-20 shadow-lg rounded-lg flex space-x-4 scrollbar-hide transform transition-transform duration-500 ${
          isCarouselVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ transitionProperty: 'transform' }}
      >
        {property.rooms.map(room => (
          <div
          id={`room-${room.id}`} // Añade un id único a cada habitación
          key={room.id}
          onClick={() => setCurrentRoomId(room.id)}
          className={`cursor-pointer w-1/6 sm:w-1/4 xs:w-1/3 flex-shrink-0 p-2 rounded-lg text-center transition-colors duration-300 flex flex-col justify-center items-center ${
            currentRoomId === room.id ? 'border-2 border-white' : 'border-2 border-transparent'
          }`}
        >
          <img
            src={room.SM_image_url} // Usa la imagen en miniatura (SM)
            alt={room.name}
            className="h-full sm:h-auto xs:h-auto sm:w-20 xs:w-20 object-cover justify-center items-center rounded-md"
          />
          <p className={`mt-2 text-base sm:text-sm xs:text-ss text-white ${currentRoomId === room.id ? 'font-bold' : 'font-normal'}`}>
            {room.name}
          </p>
        </div>
        ))}
      </div>

      {/* Recorrido Virtual */}
      <Pannellum
        width="100%"
        height="100vh"
        image={imageToUse}  // Cambiar entre SM y HQ basado en el tamaño de la pantalla
        pitch={0}
        yaw={180}
        hfov={hfovValue}  // Ajustar hfov basado en el tamaño de la pantalla
        autoLoad
        onLoad={() => setIsLoading(false)}  /* Imagen cargada */
        onError={() => setIsLoading(false)}  /* Error al cargar */
      >
        {currentRoom.hotspots.map(hotspot => (
          <Pannellum.Hotspot
            key={hotspot.id}
            type={hotspot.type === 'info' || hotspot.type === 'custom' ? hotspot.type : 'info'}
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
