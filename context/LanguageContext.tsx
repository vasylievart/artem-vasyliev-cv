"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "es";

interface LanguageContextProps {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    about: "About Me",
    cv: "CV",
    projects: "Projects",
    contact: "Contact",
    switch: "ES",
  },
  es: {
    about: "Sobre mí",
    cv: "CV",
    projects: "Proyectos",
    contact: "Contacto",
    switch: "EN",
  },
};

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("LanguageContext not found");
  return ctx;
};
