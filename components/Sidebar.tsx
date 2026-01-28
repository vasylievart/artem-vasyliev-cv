"use client";

import { useLang } from "@/context/LanguageContext";
import Toogle from "@/ui/toogle";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const { t } = useLang();
  const [active, setActive] = useState("about");

 
  useEffect(() => {
    const sections = ["about", "cv", "projects", "contact"];

    const handler = () => {
      const offset = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset && el.offsetTop + el.offsetHeight > offset) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <aside className="sidebar_container">
      <Image
        src="/cv_photo_1.webp"
        alt="profile photo"
        width={272}
        height={272}
        className="rounded-full  inset-shadow-sm inset-shadow-white/20"
        loading="eager"
      />
      <Toogle/>
      
      <nav className="mt-10 w-full">
        {[
          { id: "about", label: t("about") },
          { id: "cv", label: t("cv") },
          { id: "projects", label: t("projects") },
          { id: "contact", label: t("contact") },
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block py-2 px-4 rounded transition ${
              active === id ? "sidebar_active" : "sidebar_hover"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};
