export interface ChildrenPropsType {
  children: JSX.Element | JSX.Element[];
}

export type LanguageType = "es" | "en";

export interface ViewTypes {
  home: { es: any; en: any };
  agenda: { es: any; en: any };
  congreso: { es: any; en: any };
  foro: { es: any; en: any };
  prensa: { es: any; en: any };
  recinto: { es: any; en: any };
  sponsors: { es: any; en: any };
  contacto: { es: any; en: any };
  cortina: { es: any; en: any };
  objetivos: { es: any; en: any };
  beneficios: { es: any; en: any };
  footer: { es: any; en: any };
  navbar: { es: any; en: any };
  content404: { es: any; en: any };
  contactform: { es: any; en: any };
  donaciones: { es: any; en: any };
  visitManizales: { es: any; en: any };
  lineasyPropuesta: { es: any; en: any };
  sophic: { es: any; en: any };
  marketplace: { es: any; en: any };
  comoLlegar: { es: any; en: any };
  panelistas: { es: any; en: any };
  noticias: { es: any; en: any };
  page404: { es: any; en: any };
  ecosoc: { es: any; en: any };
  organizaciones: { es: any; en: any };
  tour360: { es: any; en: any };
}

export interface TranslationContextType {
  language: LanguageType;
  content?: ViewTypes;
  setLanguage: (language: LanguageType) => void;
} 