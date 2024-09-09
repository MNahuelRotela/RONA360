import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LOGO from "../../../../../assets/navbar/LOGO.webp";
import { useTranslation } from "../../../../../context/TraslationContext";

interface SocialLinks {
  web: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

interface RealEstateAgency {
  id: string;
  name: string;
  address: string;
  contact_email: string;
  contact_phone: string;
  website: string;
  social_media: SocialLinks;
  properties: Property[];
  logo_url: string;
  principalColor: string;
}

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

interface Cardstour360Props {
  agencies: RealEstateAgency[];
}

const AgenciesCard: React.FC<Cardstour360Props> = ({ agencies }) => {
  const { language, content } = useTranslation();
  const navigate = useNavigate();

  if (!agencies || agencies.length === 0) {
    return <div>Agencies data is not available</div>;
  }

  const handleRedirect = (name: string) => {
    if (name) {
      navigate(`/agencies/${encodeURIComponent(name)}`);
    } else {
      console.error('Agency name is not available');
    }
  };

  return (
    <div className="relative flex bg-[#ECE3D4]">
      <div className="flex-1 px-4 sm:px-0 xs:px-0 md:px-0">
        <div className="m-auto">
          <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 gap-4 pt-4 px-4">
            {agencies.map((agency) => (
              <div
                key={agency.id}
                className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-md mx-1 drop-shadow-md h-full xs:mx-0"
              >
                <Link
                  to={`/agencies/${encodeURIComponent(agency.name)}`}
                  className="relative h-[230px] flex justify-center items-center sm:h-[180px] xs:h-[140px] md:h-[180px]"
                  style={{ backgroundColor: agency.principalColor }}
                >
                  <img
                    className="object-contain w-[90%] h-full"
                    src={agency.logo_url || LOGO}
                    alt={agency.name}
                  />
                </Link>
                <div className="flex flex-col px-4 pb-4 flex-1 xs:px-2">
                  <Link
                    to={`/agencies/${encodeURIComponent(agency.name)}`}
                    className="text-[18px] font-bold md:text-[19px] sm:text-[17px] xs:text-[15px] mb-2 block"
                  >
                    {agency.name}
                  </Link>
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agency.address)}`, '_blank')}
                    className="text-gray-700 mb-4 block text-left"
                  >
                    {agency.address}
                  </button>
                  <div className="mt-auto flex items-center text-blue-600 bottom-0">
                    <button
                      onClick={() => handleRedirect(agency.name)}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-[14px]">{content?.tour360[language].readMore}</span>
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
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenciesCard;