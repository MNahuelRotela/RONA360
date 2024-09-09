import { useParams } from "react-router-dom";
import LOGO from "../../../assets/navbar/LOGO.webp";
import { useTranslation } from "../../../context/TraslationContext";
import { useEffect, useState } from "react";
import { slugify } from "../../../utils/slugify";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MultimediaAudio } from "../../prensa/components/MultimediaAudio";
import { MultimediaVideoNoticias } from "./MultimediaVideoNoticias";
import { MultimediaImagenesNoticias } from "./MultimediaImagenesNoticias";
import { MultimediaIfremsNoticias } from "./MultimediaIfremsNoticias";

interface GalleryItem {
  id: number;
  imageUrl: string;
  imageAlt: string;
  imagedescription: string;
}

interface Ifreme {
  id: number;
  iframeUrl: string;
  iframeAlt: string;
  iframedescription: string;
}

interface Media {
  name: string;
  logoUrl: string;
  logoAlt: string;
  socialmedia: SocialLinks;
}

interface SocialLinks {
  web: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

interface Article {
  id: number;
  bannerUrl: string;
  bannerAlt: string;
  title1:string;
  title2: string;
  shortdescription: string[];
  titledescription: string;
  paragraph: string[];
  category: string;
  date: string;
  social: SocialLinks;
  media: Media;
  bannerdescription: string;
  videoUrl?: string; // Opcional
  audioUrl?: string; // Opcional
  iframe?: Ifreme[]; // Opcional
  videodescription?: string; // Opcional
  gallery?: GalleryItem[]; // Opcional
  
}

export const DetailNoticias = () => {
  const { title2 } = useParams<{ title2: string }>();
  const { language, content } = useTranslation();
  const [article, setNoticia] = useState<Article | null>(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(title2 || "");
    const articleDetail = content?.noticias[language].articles.find(
      (article: Article) => slugify(article.title2) === decodedTitle
    );
    setNoticia(articleDetail || null);
  }, [title2, content, language]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-24 max-w-5xl m-auto px-6 2xl:px-0 xs:px-4">
      <div data-aos="fade-up" className="flex items-center justify-between">
        <div className="flex items-center xs:flex-col xs:items-start xs:gap-y-2 xs:mt-4 sm:flex-col sm:items-start sm:gap-y-2 sm:mt-4">
          <img
            className="w-24 h-auto sm:w-8"
            src={article.media.logoUrl || LOGO}
            alt={article.media.logoAlt}
            loading="lazy"
            draggable="false"
          />
          <div className=" flex-col ml-4 sm:ml-0 xs:ml-0">
            <h1 className="text-4xl font-bold text-d_green  sm:text-2xl ">
              {article.media.name}
            </h1>
              <div className="flex items-center justify-start">
                {article.media.socialmedia.facebook && (
                  <Link target="_blank" to={article.media.socialmedia.facebook}>
                    <AiFillFacebook className="h-6 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
                {article.media.socialmedia.instagram && (
                  <Link target="_blank" to={article.media.socialmedia.instagram}>
                    <BsInstagram className="h-5 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
                {article.media.socialmedia.linkedin && (
                  <Link target="_blank" to={article.media.socialmedia.linkedin}>
                    <AiFillLinkedin className="h-6 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
                {article.media.socialmedia.twitter && (
                  <Link target="_blank" to={article.media.socialmedia.twitter}>
                    <FaSquareXTwitter className="h-6 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
                {article.media.socialmedia.youtube && (
                  <Link target="_blank" to={article.media.socialmedia.youtube}>
                    <AiFillYoutube className="h-6 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
                {article.media.socialmedia.web && (
                  <Link target="_blank" to={article.media.socialmedia.web}>
                    <TbWorldWww className="h-6 w-8 fill-black hover:fill-d_green" />
                  </Link>
                )}
              </div>
            </div>
          
        </div>
        <h2 className="mt-20 font-semibold">{article.category}</h2>
      </div>
      <div data-aos="fade-up">
        <hr className="w-full border-t border-gray-300 mb-8" />
        <h1 className="text-4xl font-medium mb-3 sm:text-2xl xs:text-2xl leading-tight">{article.title2}</h1>
        {article.shortdescription.length > 0 && (
          <>
            {article.shortdescription[0] && (
              <p className="text-md font-normal before:content-['\2022'] before:text-d_green before:text-lg before:mr-2 before:align-middle xs:mb-2">
                {article.shortdescription[0]}
              </p>
            )}
            {article.shortdescription[1] && (
              <p className="text-md font-normal before:content-['\2022'] before:text-d_green before:text-lg before:mr-2 before:align-middle">
                {article.shortdescription[1]}
              </p>
            )}
          </>
        )}
        <p className="text-[13px] text-gray-400 mt-6 mb-2">{article.date}</p>
        <img
          className="w-full h-[20%] max-h-[80vh] object-contain lg:h-64 md:h-64"
          src={article.bannerUrl}
          alt={article.bannerAlt}
        />
        <h3 className="text-sm text-gray-500 mt-2 italic">
          {article.bannerdescription}
        </h3>
        {article.audioUrl && (
        <MultimediaAudio
          audioUrl={article.audioUrl}
          title={article.title2}
          mediaName={article.media.name}
          mediaLogo={article.media.logoUrl}
        />
      )}
      </div>
      <div data-aos="fade-up">
        <h3 className="mt-6 mb-5 text-2xl font-medium">
          {article.titledescription}
        </h3>
        <p className="font-light">{article.paragraph[0]}</p>
        <p className="font-light mt-6">{article.paragraph[1]}</p>
      </div>

      {article.videoUrl && article.videodescription && (
        <MultimediaVideoNoticias
          videoUrl={article.videoUrl}
          videodescription={article.videodescription}
        />
      )}

      {!article.videoUrl && article.gallery && (
        <MultimediaImagenesNoticias gallery={article.gallery}  />
      )}
      <div data-aos="fade-up">
        <p className="mt-7 font-light">{article.paragraph[2]}</p>
        <p className="mt-5 font-light">{article.paragraph[3]}</p>
      </div>
      {article.videoUrl && article.gallery && (
        <MultimediaImagenesNoticias gallery={article.gallery}  />
      )}
      <div className="mt-28">
      {article.iframe && <MultimediaIfremsNoticias iframes={article.iframe}  />}
      </div>
    </div>
  );
};