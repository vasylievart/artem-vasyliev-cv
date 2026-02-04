"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 200) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + offset;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler);
    handler(); 

    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return active;
}
