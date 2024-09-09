import { useState } from "react";
import { useTranslation } from "../../../context/TraslationContext";
import CardsPensa from "./CardsPensa"; // Asegúrate de importar el componente

interface Article {
  id: number;
  bannerUrl: string;
  title: string;
  shortdescription: string[];
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
  prensa: {
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

const FiltersPrensa: React.FC = () => {
  const { language, content } = useTranslation() as {
    language: string;
    content: Content;
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Obtener las categorías y medios únicos
  const articles: Article[] = content?.prensa[language]?.articles || [];
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
        ? article.title.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div>
      <div
        data-aos="fade-up"
        className="max-w-[1285px] mx-auto xl:max-w-7xl xl:mx-auto xs:max-w-xs xs:m-auto ml-18"
      >
        <div className="mb-16 mt-16">
          <div>
            <h2 className="relative flex items-center justify-center text-4xl text-d_green font-semibold mb-14 lg:text-3xl md:text-center xs:text-2xl xs:text-center">
              <span className="w-32 border-t-2 border-gray-300 mr-4"></span>
              {content?.prensa[language]?.title}
              <span className="w-32 border-t-2 border-gray-300 ml-4"></span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 xl:flex xl:justify-center lg:flex lg:justify-center xs:grid xs:grid-col-1 xs:justify-center md:flex md:justify-center sm:grid sm:grid-col-1 sm:justify-center ">
            <h3 className="text-xl mt-1 font-light mr-2">
              {content?.prensa[language]?.filters?.title}
            </h3>
            <select
              name="categoryFilter"
              className="w-60 bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">{content?.prensa[language]?.filters.bycategory}</option>
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
              <option value="">{content?.prensa[language]?.filters.bymedia}</option>
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
            <div className="flex items-center w-[341px] bg-gray-100 border-b-2 border-gray-400 p-2 xl:w-48 xs:w-64 sm:w-[24rem]">
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
              className="bg-gray-100 border-b-2 border-gray-400 px-3 md:px-8"
              onClick={clearFilters}
            >
              <p className="text-2xl">↻</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        {hasArticles ? (
          <CardsPensa articles={filteredArticles} />
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

export default FiltersPrensa;