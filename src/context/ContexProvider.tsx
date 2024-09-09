import { useEffect, useState } from "react";
import { TranslationContext } from "./TraslationContext";
import ContenHome from "../components/home/contenHome";
import ContenAgenda from "../components/agenda/contenAgenda";
import ContenCongreso from "../components/congreso/contenCongreso";
import ContenForo from "../components/foro/contenForo";
import ContenPrensa from "../components/prensa/contenPrensa";
import ContenRecinto from "../components/recinto/contenRecinto";
import ContenSponsors from "../components/sponsors/contenSponsors";
import ContenContacto from "../components/contacto/contenContacto";
import ContenCortina from "../components/cortina/contenCortina";
import ContenObjetivos from "../components/objetivos/contenObjetivos";
import { ContenBeneficios } from "../components/beneficios/contenBeneficios";
import ContenFooter from "../components/footer/contentFooter";
import NavBarContent from "../components/navbar/contenNavbar";
import conten404 from "../components/404/conten404";
import ContenContactForm from "../components/contacto/formularios/ayuda/contenContact";
import ContenDonaciones from "../components/donaciones/contenDonaciones";
import ContenVisitManizales from "../components/visitamanizales/contenVisitManizales";
import ContenLineasPropuesta from "../components/lineas/contenLineasPropuesta";
import contenSophic from "../components/sophic/contenSophic";
import { contenMarketplace } from "../components/marketplace/contenMarketplace";
import { contenComoLLegar } from "../components/comollegar/contenComoLLegar";
import ContentPanelistas from "../components/agenda/slider/contenPanelistas";
import {
  LanguageType,
  ChildrenPropsType,
  TranslationContextType,
} from "../types/interfaceContext";
import ContenNoticias from "../components/noticias/contenNoticias";
import ContenPage404 from "../components/pageNotFound/contenPage404";
import ContenEcosoc from "../components/ecosoc/contenEcosoc";
import { ContenOrganizaciones } from "../components/organizaciones/contenOrganizaciones";
import ContenTour360 from "../components/360/catalogo/Tours360Conten";

export const ContextProvider = ({ children }: ChildrenPropsType) => {
  const [language, setLanguage] = useState<LanguageType>("es");
  const [content, setContent] = useState<
    TranslationContextType["content"] | undefined
  >();

  useEffect(() => {
    const HomeModule = ContenHome;
    const AgendaModule = ContenAgenda;
    const CongresoModule = ContenCongreso;
    const ForoModule = ContenForo;
    const PrensaModule = ContenPrensa;
    const RecintoModule = ContenRecinto;
    const SponsorsModule = ContenSponsors;
    const ContactoModule = ContenContacto;
    const CortinaModule = ContenCortina;
    const ObjetivosModule = ContenObjetivos;
    const BeneficiosModule = ContenBeneficios;
    const FooterModule = ContenFooter;
    const NavbarContent = NavBarContent;
    const content404 = conten404;
    const contactform = ContenContactForm;
    const donaciones = ContenDonaciones;
    const visitManizales = ContenVisitManizales;
    const LineasyPropuesta = ContenLineasPropuesta;
    const sophic = contenSophic;
    const marketplace = contenMarketplace;
    const comoLlegar = contenComoLLegar;
    const PanelistasModule = ContentPanelistas;
    const noticias = ContenNoticias;
    const page404= ContenPage404;
    const ecosoc= ContenEcosoc;
    const organizaciones= ContenOrganizaciones;
    const tour360= ContenTour360;




    setContent({
      home: HomeModule,
      agenda: AgendaModule,
      congreso: CongresoModule,
      foro: ForoModule,
      prensa: PrensaModule,
      recinto: RecintoModule,
      sponsors: SponsorsModule,
      contacto: ContactoModule,
      cortina: CortinaModule,
      objetivos: ObjetivosModule,
      beneficios: BeneficiosModule,
      footer: FooterModule,
      navbar: NavbarContent,
      content404: content404,
      contactform: contactform,
      donaciones: donaciones,
      visitManizales: visitManizales,
      lineasyPropuesta: LineasyPropuesta,
      sophic: sophic,
      marketplace: marketplace,
      comoLlegar: comoLlegar,
      panelistas: PanelistasModule,
      noticias:noticias,
      page404: page404,
      ecosoc: ecosoc,
      organizaciones:organizaciones,
      tour360: tour360
    });
  }, [language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleLanguageChange, content }}
    >
      {children}
    </TranslationContext.Provider>
  );
};