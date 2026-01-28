"use client";

import { useLang } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang} = useLang();

  const isEN = lang === "en";



  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="
        relative mt-6 flex items-center w-12 h-6 
        rounded-full bg-black
        border border-white/30
        inset-shadow-sm inset-shadow-white/40
        inset-ring-4 inset-ring-white/10
        p-0.5
        transition-colors
      "
    >
      <span
        className={`
          absolute flex items-center justify-center
          w-5 h-5 rounded-full
          bg-white/90 text-black text-[8px] font-semibold uppercase
          shadow-md shadow-black/40 inset-ring-2 ring-black/20
          transition-transform duration-300 ease-out
          ${isEN ? "translate-x-0" : "translate-x-6"}
        `}
      >
        {lang}
      </span>
    </button>
  );
};

export default LanguageToggle;
