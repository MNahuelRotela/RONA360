import React, { useState } from "react";
import { BannerOrganizaciones } from "./components/BannerOrganizaciones";
import CardsOrganizaciones from "./components/CardsOrganizaciones";
import { ContenOrganizaciones } from "./contenOrganizaciones";
import { useTranslation } from "../../context/TraslationContext";
import { OrderByOrg } from "./components/OrderByOrg";

// Función para normalizar el texto
const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD') // Descompone los caracteres acentuados
    .replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos
};

export const Organizaciones: React.FC = () => {
  const { language } = useTranslation(); // Asegúrate de tener esta función o hook
  const content = ContenOrganizaciones[language];
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>(''); // Permitir el valor vacío

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSortChange = (order: 'asc' | 'desc' | '') => {
    setSortOrder(order);
  };

  const filteredAndSortedOrganizations = content.organizations
    .filter(org => 
      normalizeText(org.name).includes(normalizeText(searchTerm))
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'desc') {
        return b.name.localeCompare(a.name);
      } else {
        return 0; // Sin orden cuando sortOrder es vacío
      }
    });

  return (
    <div>
      <BannerOrganizaciones />
      <div className="px-2">
        <OrderByOrg
          onSearchChange={handleSearchChange}
          onSortChange={handleSortChange}
        />
        <CardsOrganizaciones
          organizations={filteredAndSortedOrganizations}
        />
      </div>
    </div>
  );
};
