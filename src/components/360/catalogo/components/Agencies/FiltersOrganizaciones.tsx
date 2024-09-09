// import React, { useState, useEffect } from "react";
// import { useTranslation } from "../../../../context/TraslationContext";

// interface FilterSidebarProps {
//   onApplyFilters: (filters: Filters) => void;
//   realEstateNames: string[];
//   realEstateIds: string[];
// }

// interface Filters {
//   search: string;
// }

// const FilterSidebar: React.FC<FilterSidebarProps> = ({
//   onApplyFilters,
//   // realEstateNames,
//   // realEstateIds,
// }) => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const { language, content } = useTranslation();

//   useEffect(() => {
//     onApplyFilters({
//       search: searchTerm,
//     });
//   }, [searchTerm]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div data-aos="fade-right" className="sticky top-0 w-64 p-4 mt-4 drop-shadow-sm border-r h-screen rounded-b-lg sm:w-48 sm:p-2 xs:w-28 xs:p-0">
//       <div className="flex flex-col justify-between">
//         <h1 className="text-2xl font-semibold mb-4 sm:text-xl sm:font-medium xs:text-xl xs:font-medium">
//           {content?.tour360[language].filter}
//         </h1>
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVR4nN2VUQrAIAxDe/+LaXup+LPBEMFqilsX6Jex7yehIn8Urol8OwOwh+meGgnol48+gAHoYHmJBHiEFAAsLjFHOCgAHOGgAOoIBwVY1isAI1s+NYJs+dSoZMv3jCkB+PTBOQaQVGpoPYzjElTu2gAAAABJRU5ErkJggg=="
//           alt="Logo"
//           className="h-8 w-8"
//         />
//       </div>
//       <hr className="border-b-1 border-gray-300 mb-4" />
//       <div className="mb-4">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder={content?.tour360[language].searchPlaceholder || "Buscar por nombre o ID"}
//           className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;
