import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { slugify } from "../../../utils/slugify";

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
}

interface CardsPensaProps {
  articles: Article[];
}

const CardsPensa: React.FC<CardsPensaProps> = ({ articles = [] }: CardsPensaProps) => {
  const reversedArticles = [...articles].reverse();

  return (
    <div data-aos="fade-up" className="max-w-[1336px] m-auto">
      <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 gap-1 p-4 xs:p-2">
        {reversedArticles.map((article: Article) => (
          <Link key={article.id} to={`/sala-de-prensa/${encodeURIComponent(slugify(article.title))}`}>
            <div>
              <div className="mx-1 drop-shadow-lg">
                <div className="flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <div className="relative pb-[56.25%]"> {/* Aspect ratio 16:9 */}
                    <img
                      className="absolute inset-0 w-full p-3 h-full object-cover"
                      src={article.bannerUrl}
                      alt={article.bannerAlt}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-d_green bg-opacity-90 p-2 mx-3 text-left">
                      <h5 className="text-sm text-white">
                        {article.category}
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-col mx-auto h-full items-center justify-end">
                    <div className="h-48">
                      <h3 className="relative leading-tight text-[17px] font-bold mx-4 mt-3 md:text-[21px]">
                        {article.title}
                      </h3>
                      <h4 className="relative text-sm text-d_green font-semibold mx-4 my-1">
                        {article.media.name}
                      </h4>
                      <h4 className="relative text-sm mx-2 p-2 md:text-[16px]">
                        {article.shortdescription[0]}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col pt-4 xs:pt-16">
                    <div className="flex items-center justify-between p-[10px]">
                      <div className="flex items-center justify-center">
                        {article.articlesocialmedia.facebook && (
                          <Link target="_blank" to={article.articlesocialmedia.facebook}>
                            <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                        {article.articlesocialmedia.instagram && (
                          <Link target="_blank" to={article.articlesocialmedia.instagram}>
                            <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                        {article.articlesocialmedia.linkedin && (
                          <Link target="_blank" to={article.articlesocialmedia.linkedin}>
                            <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                        {article.articlesocialmedia.twitter && (
                          <Link target="_blank" to={article.articlesocialmedia.twitter}>
                            <FaSquareXTwitter className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                        {article.articlesocialmedia.youtube && (
                          <Link target="_blank" to={article.articlesocialmedia.youtube}>
                            <AiFillYoutube className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                        {article.articlesocialmedia.web && (
                          <Link target="_blank" to={article.articlesocialmedia.web}>
                            <TbWorldWww className="h-6 w-8 fill-black hover:fill-d_green" />
                          </Link>
                        )}
                      </div>
                      <h5 className="relative text-[14px] text-gray-400">
                        {article.date}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsPensa;