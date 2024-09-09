import React from 'react';
import { useParams } from 'react-router-dom';
import ContenInmobiliaria from "../../360/catalogo/Tours360Conten"; // Ajusta la ruta según tu estructura de carpetas
import { Pannellum } from '@readr-media/pannellum-react';
import { useTranslation } from '../../../context/TraslationContext';

const TourViewer: React.FC = () => {
  const { name, propertyId } = useParams<{ name: string; propertyId: string }>();
  const { language } = useTranslation();

  const inmobiliarias = ContenInmobiliaria[language].real_estate_agencies;
  const agency = inmobiliarias.find(agency => agency.name === name);
  const property = agency?.properties.find(property => property.id === propertyId);

  if (!property) {
    return <div>Propiedad no encontrada.</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      {/* Encabezado con detalles de la propiedad y la agencia */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={agency?.logo_url} alt={`${agency?.name} Logo`} style={{ height: '100px', marginRight: '20px' }} />
        <div>
          <h2 style={{ margin: 0, color: agency?.principalColor }}>{property.title}</h2>
          <p>{property.description}</p>
          <p><strong>Dirección:</strong> {property.address}</p>
          <p><strong>Precio:</strong> {property.price}</p>
          <p><strong>Habitaciones:</strong> {property.bedrooms} | <strong>Baños:</strong> {property.bathrooms} | <strong>Área:</strong> {property.area}</p>
        </div>
      </div>

      {/* Recorrido Virtual */}
      {property.rooms.map(room => (
        <div key={room.id} style={{ marginBottom: '40px' }}>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
          <Pannellum
            width="100%"
            height='500px'
            image={room.HQ_image_url}
            pitch={0}
            yaw={180}
            hfov={170}
            autoLoad
          >
            {room.hotspots.map(hotspot => (
              <Pannellum.Hotspot
                key={hotspot.id}
                type={hotspot.type === "info" || hotspot.type === "custom" ? hotspot.type : "info"}
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                text={hotspot.text}
                handleClick={() => console.log(`Navigate to ${hotspot.targetRoom}`)} // Implementar lógica de navegación
              />
            ))}
          </Pannellum>
        </div>
      ))}

      {/* Información de contacto de la agencia */}
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: agency?.principalColor, color: '#fff' }}>
        <h3>Contacto de la Agencia</h3>
        <p><strong>Agencia:</strong> {agency?.name}</p>
        <p><strong>Dirección:</strong> {agency?.address}</p>
        <p><strong>Email:</strong> <a href={`mailto:${agency?.contact_email}`} style={{ color: '#fff' }}>{agency?.contact_email}</a></p>
        <p><strong>Teléfono:</strong> <a href={`tel:${agency?.contact_phone}`} style={{ color: '#fff' }}>{agency?.contact_phone}</a></p>
        <p><strong>Sitio web:</strong> <a href={agency?.website} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>{agency?.website}</a></p>
        <div>
          {agency?.social_media.facebook && <a href={agency.social_media.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>Facebook</a>}
          {agency?.social_media.twitter && <a href={agency.social_media.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>Twitter</a>}
          {agency?.social_media.instagram && <a href={agency.social_media.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>Instagram</a>}
          {agency?.social_media.linkedin && <a href={agency.social_media.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>LinkedIn</a>}
        </div>
      </div>
    </div>
  );
};

export default TourViewer;
