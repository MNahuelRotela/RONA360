import { createContext, useContext } from "react";
import {
  TranslationContextType,
  LanguageType,
} from "../types/interfaceContext";

export const TranslationContext = createContext<TranslationContextType>({
  language: "es",
  setLanguage(_language: LanguageType) {},
});

export const useTranslation = () => useContext(TranslationContext);
