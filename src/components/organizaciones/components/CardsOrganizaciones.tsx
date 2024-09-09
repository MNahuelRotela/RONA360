import React, { useState } from "react";
import FilterSidebar from "./FiltersOrganizaciones";
import LOGO from "../../../assets/navbar/LOGO.webp";
import Flag from "react-world-flags";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "../../../context/TraslationContext";

interface SocialLinks {
  web: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

interface Organization {
  id: number;
  name: string;
  country: string;
  city: string;
  departamento: string;
  countrycode: string;
  image: string;
  description: string;
  organizacionSocialMedia: SocialLinks;
}

interface Filters {
  ciudad: string[];
  departamento: string[];
}

interface CardsOrganizacionesProps {
  organizations: Organization[];
}

const CardsOrganizaciones: React.FC<CardsOrganizacionesProps> = ({
  organizations,
}) => {
  const [filters, setFilters] = useState<Filters>({
    ciudad: [],
    departamento: [],
  });
  const { language,content }=useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
    

  const filteredOrganizations = organizations.filter((org) => {
    const matchesCity =
      filters.ciudad.length === 0 || filters.ciudad.includes(org.city);
    const matchesDepartamento =
      filters.departamento.length === 0 ||
      filters.departamento.includes(org.departamento);

    return  matchesCity && matchesDepartamento;
  });
  

  const uniqueCities = Array.from(
    new Set(organizations.map((org) => org.city))
  );
  const uniqueDepartamentos = Array.from(
    new Set(organizations.map((org) => org.departamento))
  );

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const openModal = (organization: Organization) => {
    setSelectedOrganization(organization);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrganization(null);
  };

  return (
    <div className="relative flex">
      <div className="">
        <FilterSidebar
          onApplyFilters={handleApplyFilters}
          cities={uniqueCities}
          departamentos={uniqueDepartamentos}
        />
      </div>
      <div className="flex-1 px-4 sm:px-0 xs:px-0 md:px-0 ">
        {filteredOrganizations.length > 0 ? (
          <div className="m-auto">
            <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 gap-4 pt-4 px-4 ">
              {filteredOrganizations.map((org) => (
                <div
                  key={org.id}
                  className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-md mx-1 drop-shadow-md h-full xs:mx-0"
                >
                  <div className="relative h-[230px] flex justify-center items-center sm:h-[180px] xs:h-[140px] md:h-[180px] ">
                    <img
                     style={org.image ? {} : { width: '120px', height: 'auto' }}
                      className="object-contain w-[90%] h-full"
                      src={org.image || LOGO}
                      alt={org.name}
                    />
                  </div>
                  <div className="flex flex-col px-4 pb-4 flex-1 xs:px-2">
                    <div className="flex items-center mb-3">
                      <Flag
                        code={org.countrycode}
                        className="object-contain w-8 h-8 mr-2"
                        alt="country"
                      />
                      <h3 className="text-[18px] font-bold md:text-[19px] sm:text-[17px] xs:text-[15px]">
                        {org.name}
                      </h3>
                    </div>
                    <div className="mt-auto flex items-center text-blue-600 bottom-0">
                      <button
                        onClick={() => openModal(org)}
                        className="flex items-center"
                      >
                        <span className="mr-2 text-[14px]">{content?.organizaciones[language].readMore}</span>
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
        ) : (
          <div className="flex flex-col items-center justify-center p-6 mt-6 border-gray-300 rounded-lg ">
            <img
              className="mb-2"
              width="72"
              height="72"
              src="https://img.icons8.com/pastel-glyph/64/website-error.png"
              alt="website-error"
            />
            <p className="text-xl font-semibold text-gray-700 mb-1">
            {content?.organizaciones[language].warning.warning1}
            </p>
            <p className="text-gray-500">
            {content?.organizaciones[language].warning.warning2}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
 
      {isModalOpen && selectedOrganization && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-h-[90%] overflow-y-auto flex flex-col md:">
            <div className="relative w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col ml-10 w-full xs:ml-5 md:ml-5">
                <div className=" flex flex-col-2 items-center mt-8  md:mb-0">
                  <img
                    className="w-16 h-auto xs:w-10"
                    src={selectedOrganization.image || LOGO}
                    alt={selectedOrganization.name}
                  />
                  <h2 className="text-2xl font-semibold text-center  mb-1 ml-4 font-open-sans xs:text-lg xs:ml-0">
                    {selectedOrganization.name}
                  </h2>
                </div>
                <div className=" flex flex-col justify-between mt-5 mr-24 ml-3 xs:text-[14px] md:text-[14px] xs:ml-0 xs:mr-14 sm:text-[14px]  overflow-y-auto">
                  <p className="text-gray-700 mb-4">
                    {selectedOrganization.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mt-4 mb-8">
                    <div className="flex items-center">
                      <img
                        width="36"
                        height="36"
                        src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-delivery-pin-for-parcel-delivery-location-making-delivery-green-tal-revivo.png"
                        alt="delivery pin"
                      />
                      <h5 className="text-[14px] text-gray-400 ml-2">
                        {selectedOrganization.city}
                      </h5>
                      <p className="text-[14px] text-gray-400 mr-[2px]">,</p>
                      <h5 className="text-[14px] text-gray-400">
                        {selectedOrganization.departamento}
                      </h5>
                      <p className="text-[14px] text-gray-400 mr-[2px]">.</p>
                      <h5 className="text-[14px] text-gray-400">
                        {selectedOrganization.country}
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="flex space-x-4 mb-4">
                      {selectedOrganization.organizacionSocialMedia.web && (
                        <a
                          href={selectedOrganization.organizacionSocialMedia.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <TbWorldWww className="w-6 h-6" />
                        </a>
                      )}
                      {selectedOrganization.organizacionSocialMedia.facebook && (
                        <a
                          href={selectedOrganization.organizacionSocialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <AiFillFacebook className="w-6 h-6" />
                        </a>
                      )}
                      {selectedOrganization.organizacionSocialMedia.instagram && (
                        <a
                          href={selectedOrganization.organizacionSocialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <BsInstagram className="w-6 h-6" />
                        </a>
                      )}
                      {selectedOrganization.organizacionSocialMedia.linkedin && (
                        <a
                          href={selectedOrganization.organizacionSocialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <AiFillLinkedin className="w-6 h-6" />
                        </a>
                      )}
                      {selectedOrganization.organizacionSocialMedia.youtube && (
                        <a
                          href={selectedOrganization.organizacionSocialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <AiFillYoutube className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )}</div>
  );
};


export default CardsOrganizaciones;
