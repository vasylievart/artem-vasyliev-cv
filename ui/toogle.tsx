"use client";

import { useLang } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLang();

  const isEN = lang === "en";

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="language_toggle"
    >
      <span
        className={`
          language_switcher
          ${isEN ? "translate-x-0" : "translate-x-6"}
        `}
      >
        {lang}
      </span>
    </button>
  );
};

export default LanguageToggle;
