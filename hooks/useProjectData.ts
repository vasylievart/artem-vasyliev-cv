import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { DisplayType, ResourceType, SectionType, TagType } from "@/types";
import { cachedProjectDataLoader } from "@/services/cachedProjectDataLoader";


export function useProjectData<T>(
  resource: ResourceType,
  section?: SectionType,
  display? : DisplayType,
  tag?: TagType
) {
  const { lang } = useLang();

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);
    setError(null);

    cachedProjectDataLoader<T>(resource, lang, section, display, tag, controller.signal)
      .then(setData)
      .catch(err => {
        if (err.name === "AbortError") return;
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [resource, section, tag, display, lang]);

  return { data, loading, error };
}
