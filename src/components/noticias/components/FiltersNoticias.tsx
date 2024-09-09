import React, { useState } from "react";
import { useTranslation } from "../../../context/TraslationContext";
import CardsNoticias from "./CardsNoticias";
import { Link } from "react-router-dom";
import { slugify } from "../../../utils/slugify";

interface Article {
  id: number;
  bannerUrl: string;
  title1: string;
  title2: string;
  shortdescription: string[];
  bannerdescription: string;
  bannerAlt: string;
  category: string;
  date: string;
  articlesocialmedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    web: string;
  };
  media: {
    name: string;
    logoUrl: string;
    logoAlt: string;
  };
  filters: {
    title: string;
    bycategory: string;
  };
}

interface Content {
  noticias: {
    [key: string]: {
      title: string;
      filters: {
        bymedia: string;
        bycategory: string;
        title: string;
      };
      articles: Article[];
    };
  };
}

const FiltersNoticias: React.FC = () => {
  const { language, content } = useTranslation() as {
    language: string;
    content: Content;
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Obtener las categorías y medios únicos
  const articles: Article[] = content?.noticias[language]?.articles || [];
  const uniqueCategories: string[] = [
    ...new Set(articles.map((article: Article) => article.category)),
  ];
  const uniqueMediaNames: string[] = [
    ...new Set(articles.map((article: Article) => article.media.name)),
  ];

  // Filtrar noticias
  const filterNews = () => {
    return articles.filter((article: Article) => {
      const categoryMatch = selectedCategory
        ? article.category === selectedCategory
        : true;
      const mediaMatch = selectedMedia
        ? article.media.name === selectedMedia
        : true;
      const dateMatch = selectedDate ? article.date === selectedDate : true;
      const searchMatch = searchTerm
        ? article.title2.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return categoryMatch && mediaMatch && dateMatch && searchMatch;
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(e.target.value);
  const handleMediaChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedMedia(e.target.value);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedDate(e.target.value);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  // Función para limpiar filtros
  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedMedia("");
    setSelectedDate("");
    setSearchTerm("");
  };

  const filteredArticles = filterNews();
  const hasArticles = filteredArticles.length > 0;

  // Determinar si hay filtros activos
  const isFiltered = selectedCategory || selectedMedia || selectedDate || searchTerm;

  return (
    <div>
      <div
        data-aos="fade-up"
        className="max-w-[1285px] mx-auto xl:max-w-7xl xl:mx-auto xs:max-w-xs xs:m-auto ml-18"
      >
        <div className="mb-16 mt-16">
          <div>
            <h2 className="relative flex items-center justify-center text-4xl text-[#424282] font-semibold mb-14 lg:text-3xl md:text-center sm:text-center  xs:text-2xl xs:text-center">
              <span className="w-32 border-t-2 border-gray-300 mr-4"></span>
              {content?.noticias[language]?.title}
              <span className="w-32 border-t-2 border-gray-300 ml-4"></span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 xl:flex xl:justify-center lg:flex lg:justify-center xs:grid xs:grid-col-1 xs:justify-center md:flex md:justify-center sm:grid sm:grid-col-1 sm:justify-center">
            <h3 className="text-xl mt-1 font-light mr-2">
              {content?.noticias[language]?.filters?.title}
            </h3>
            <select
              name="categoryFilter"
              className="w-60 bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">{content?.noticias[language]?.filters.bycategory}</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              name="mediaFilter"
              className="w-60 bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]"
              value={selectedMedia}
              onChange={handleMediaChange}
            >
              <option value="">{content?.noticias[language]?.filters.bymedia}</option>
              {uniqueMediaNames.map((media) => (
                <option key={media} value={media}>
                  {media}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="dateFilter"
              className="w-60 bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <div className="flex items-center w-[344px] bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <p className="mr-1">🔎</p>
            </div>
            <button
              className="bg-gray-100 border-b-2 border-gray-400 px-5"
              onClick={clearFilters}
            >
              <p className="text-2xl">↻</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        {!isFiltered ? (
          <CardsNoticias articles={articles} />
        ) : hasArticles ? (
          <div data-aos="fade-up" className="grid grid-cols-3 gap-4 2xl:mx-12 xl:mx-12 mx-3 mt-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/sala-de-prensa/${encodeURIComponent(slugify(article.title1))}`}>
              <div className={`overflow-hidden w-full`}>
                <div className="relative pb-[60%]"> {/* Aspect ratio 16:9 */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={article.bannerUrl}
                    alt={article.bannerAlt}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8686B9] bg-opacity-90 p-2 text-left">
                    <h5 className="text-sm text-white">
                      {article.category}
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col h-full justify-between mt-2 2xl:py-4 xl:py-4">
                  <h3 className="text-lg font-semibold mb-2 text-[#8686B9]">
                    {article.title1}
                  </h3>
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title2}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">
                    {article.shortdescription[0]}
                  </p>
                  <p className="text-gray-400 text-sm mt-8">
                    {article.date}
                  </p>
                </div>
              </div>
              <hr className="hidden lg:block md:block sm:block xs:block border-gray-300 h-full mb-10 mt-2" />
            </Link>
            ))}
          </div>
          
        ) : (
          <div className="flex flex-col items-center justify-center p-6 mt-5 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
            <img
              className="mb-2"
              width="64"
              height="64"
              src="https://img.icons8.com/pastel-glyph/64/website-error.png"
              alt="website-error"
            />
            <p className="text-xl font-semibold text-gray-700 mb-1">
              No se encontraron artículos
            </p>
            <p className="text-gray-500">
              Intenta ajustar los filtros para encontrar lo que buscas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersNoticias;
