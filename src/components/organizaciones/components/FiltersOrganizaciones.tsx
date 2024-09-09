import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../context/TraslationContext";

interface FilterSidebarProps {
  onApplyFilters: (filters: Filters) => void;
  cities: string[];
  departamentos: string[];
}

interface Filters {
  ciudad: string[];
  departamento: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onApplyFilters,
  cities,
  departamentos,
}) => {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedDepartamentos, setSelectedDepartamentos] = useState<string[]>(
    []
  );
  const { language, content } = useTranslation();
  const [showCities, setShowCities] = useState(false);
  const [showDepartamentos, setShowDepartamentos] = useState(false);

  useEffect(() => {
    onApplyFilters({
      ciudad: selectedCities,
      departamento: selectedDepartamentos,
    });
  }, [selectedCities, selectedDepartamentos]);

  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleDepartamentoChange = (departamento: string) => {
    setSelectedDepartamentos((prev) =>
      prev.includes(departamento)
        ? prev.filter((d) => d !== departamento)
        : [...prev, departamento]
    );
  };

  const renderFilter = (
    title: string,
    items: string[],
    selectedItems: string[],
    setShow: (state: boolean) => void,
    show: boolean,
    handleChange: (item: string) => void
  ) => (
    <div className="mb-4">
      <button
        onClick={() => setShow(!show)}
        className="w-full py-2 text-left rounded transition flex items-center justify-between xs:text-[14px]"
      >
        {title}
        <img
          className={`transition-transform ${show ? "rotate-180" : "rotate-0"}`}
          width="16"
          height="16"
          src={
            show
              ? "https://img.icons8.com/sf-ultralight-filled/25/expand-arrow.png"
              : "https://img.icons8.com/forma-thin/24/forward.png"
          }
          alt="toggle"
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-auto ${
          show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 pl-4 space-y-2 xs:space-y-1 xs:pl-1">
          {items.map((item) => (
            <label key={item} className="flex items-center">
              <input
                type="checkbox"
                value={item}
                checked={selectedItems.includes(item)}
                onChange={() => handleChange(item)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 xs:text-[12px]">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div data-aos="fade-right" className="sticky top-0 w-64 p-4 mt-4 drop-shadow-sm border-r h-screen rounded-b-lg sm:w-48 sm:p-2 xs:w-28 xs:p-0">
      <div className="flex flex-col-2 justify-between">
        <h1 className="text-2xl font-semibold mb-4 sm:text-xl sm:font-medium xs:text-xl xs:font-medium">{content?.organizaciones[language].filter}</h1>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVR4nN2VUQrAIAxDe/+LaXup+LPBEMFqilsX6Jex7yehIn8Urol8OwOwh+meGgnol48+gAHoYHmJBHiEFAAsLjFHOCgAHOGgAOoIBwVY1isAI1s+NYJs+dSoZMv3jCkB+PTBOQaQVGpoPYzjElTu2gAAAABJRU5ErkJggg=="
          alt="Logo"
          className="h-8 w-8"
        />
      </div>
      <hr className="border-b-1 border-gray-300 mb-4" />
      {renderFilter(
        "Ciudad",
        cities,
        selectedCities,
        setShowCities,
        showCities,
        handleCityChange
      )}
      {renderFilter(
        "Departamento",
        departamentos,
        selectedDepartamentos,
        setShowDepartamentos,
        showDepartamentos,
        handleDepartamentoChange
      )}
      
    </div>
  );
};

export default FilterSidebar;
