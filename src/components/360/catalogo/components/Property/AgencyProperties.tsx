import React from 'react';
import { useParams } from 'react-router-dom';
import ContenInmobiliaria from '../../Tours360Conten'; // Asegúrate de importar el catálogo correctamente
import PropertyCard from './PropertyCard';
import { useTranslation } from '../../../../../context/TraslationContext';
import { BannerProperty } from './BannerProperties';

// Define los tipos para las propiedades y agencias
interface Property {
  id: string;
  title: string;
  description: string;
  address: string;
  price: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  property_features: {
    garden: boolean;
    garage: boolean;
    pool: boolean;
    terrace: boolean;
    balcony: boolean;
  };
  virtual_tour: {
    HQ_image_url: string;
    SM_image_url: string;
  };
  rooms: {
    id: string;
    name: string;
    description: string;
    HQ_image_url: string;
    SM_image_url: string;
  }[];
}

interface RealEstateAgency {
  id: string;
  name: string;
  address: string;
  contact_email: string;
  contact_phone: string;
  website: string;
  social_media: {
    web: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  properties: Property[];
  logo_url: string;
  principalColor: string;
}

const AgencyProperties: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { language } = useTranslation();

  // Asegúrate de que el catálogo esté bien definido en los tipos de idioma
  const inmobiliarias: RealEstateAgency[] = ContenInmobiliaria[language].real_estate_agencies;

  // Encuentra la agencia que coincide con el nombre
  const agency = inmobiliarias.find((agency) => agency.name === name);

  if (!agency) {
    return <div>Inmobiliaria no encontrada.</div>;
  }

  return (
    <div className=" bg-[#ECE3D4]">
        <BannerProperty/>
    <div className="relative flex bg-[#ECE3D4] pb-4">
      <div className="flex-1  sm:px-0 xs:px-0 md:px-0">
        <div className="m-auto">
          <h1 className="text-2xl font-bold mb-4 py-10 px-5 text-white bg-[#4d3819]">{agency.name}</h1>
          <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 gap-4 pt-4 px-4">
            {agency.properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                agencyName={agency.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AgencyProperties;
