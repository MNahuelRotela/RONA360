import React from "react";
import { Link } from "react-router-dom";

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
}

interface PropertyCardProps {
  property: Property;
  agencyName: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, agencyName }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-md mx-1 drop-shadow-md h-full xs:mx-0">
      <Link
        to={`/agencies/${encodeURIComponent(agencyName)}/tour/${property.id}`}
        className="relative h-[230px] flex justify-center items-center sm:h-[180px] xs:h-[140px] md:h-[180px]"
      >
        <img
          className="object-cover w-full h-full"
          src={property.virtual_tour.HQ_image_url}
          alt={property.title}
        />
      </Link>
      <div className="flex flex-col px-4 pb-4 flex-1 xs:px-2">
        <Link
          to={`/agencies/${encodeURIComponent(agencyName)}/tour/${property.id}`}
          className="text-[18px] font-bold md:text-[19px] sm:text-[17px] xs:text-[15px] mb-2 block"
        >
          {property.title}
        </Link>
        <p className="text-gray-700 mb-4">{property.address}</p>
        <p className="text-gray-900 font-bold">{property.price}</p>
        <div className="mt-auto flex items-center text-blue-600 bottom-0">
          <Link
            to={`/agencies/${encodeURIComponent(agencyName)}/tour/${property.id}`}
            className="flex items-center"
          >
            <span className="mr-2 text-[14px]">Ver Tour Virtual</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;