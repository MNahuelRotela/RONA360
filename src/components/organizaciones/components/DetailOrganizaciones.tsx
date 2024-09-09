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
  name: string;
  image: string;
  organizacionSocialMedia: SocialLinks;
  description: string;
}

export const DetailOrganizaciones = () => {
  const { name } = useParams<{ name: string }>();
  const { language, content } = useTranslation();
  const [organizacion, setOrganizacion] = useState<Article | null>(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(name || "");
    const articleDetail = content?.organizaciones[language].organizations.find(
      (organizacion: Article) => slugify(organizacion.name) === decodedTitle
    );
    setOrganizacion(articleDetail || null);
  }, [name, content, language]);

  if (!organizacion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-24 max-w-5xl m-auto px-6 2xl:px-0 xs:px-4">
      <div data-aos="fade-up" className="flex flex-col items-start space-y-4">
        {/* Flex container for logo and title */}
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-auto"
            src={organizacion.image || LOGO}
            alt="Logo"
            loading="lazy"
            draggable="false"
          />
          <h1 className="text-4xl font-bold text-d_green">{organizacion.name}</h1>
        </div>

        {/* Social media links */}
        <div className="flex space-x-4 mt-2">
          {organizacion.organizacionSocialMedia.facebook && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.facebook}>
              <AiFillFacebook className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
          {organizacion.organizacionSocialMedia.instagram && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.instagram}>
              <BsInstagram className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
          {organizacion.organizacionSocialMedia.linkedin && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.linkedin}>
              <AiFillLinkedin className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
          {organizacion.organizacionSocialMedia.twitter && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.twitter}>
              <FaSquareXTwitter className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
          {organizacion.organizacionSocialMedia.youtube && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.youtube}>
              <AiFillYoutube className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
          {organizacion.organizacionSocialMedia.web && (
            <Link target="_blank" to={organizacion.organizacionSocialMedia.web}>
              <TbWorldWww className="h-6 w-6 fill-black hover:fill-d_green" />
            </Link>
          )}
        </div>

        {/* Description */}
        <div className="mt-6">
          <p className="font-light text-gray-700">{organizacion.description}</p>
        </div>
      </div>
    </div>
  );
};
