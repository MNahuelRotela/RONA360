import React, { useState } from "react";

interface OrderByOrgProps {
  onSearchChange: (term: string) => void;
  onSortChange: (order: "asc" | "desc" | "") => void;
}

export const OrderByOrg: React.FC<OrderByOrgProps> = ({
  onSearchChange,
  onSortChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">(""); // Initial value is empty string for default

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    onSearchChange(term); // Notify parent component
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = event.target.value as "asc" | "desc" | ""; // Include empty value for reset
    setSortOrder(newSortOrder);
    onSortChange(newSortOrder); // Notify parent component
  };

  return (
    <div className="mt-16">
      
      <div>
      <h1 className="text-4xl font-medium 2xl:hidden xl:hidden lg:hidden md:hidden sm:mb-5 sm:text-3xl">Explorar</h1>

      <div data-aos="fade-right" className=" flex items-center justify-between  xs:items-start  xs:flex xs:flex-col">
        <div className="flex flex-row">
          <div className="flex items-center bg-[#FAFAFA] border-gray-200 p-5 w-[255px] h-[35px] mt-3 sm:w-[190px] sm:p-1">
            <img
              width="19"
              height="19"
              src="https://img.icons8.com/ios/50/737373/search--v1.png"
              alt="search"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#FAFAFA] outline-none ml-2"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
          <h1 className="ml-8 text-4xl font-medium sm:text-2xl sm:hidden xs:hidden">Explorar</h1>
        </div>
        <div className="pr-8 sm:pr-5">
          <select
            name="orderBy"
            className="w-auto p-2 xl:w-48 xs:w-64 sm:w-[7rem] sm:text-[17px] sm:p-1 xs:p-0 xs:mt-3 xs:mb-10"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Order by</option> {/* Default option */}
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
};
