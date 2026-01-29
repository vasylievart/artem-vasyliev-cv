import { DisplayType, ResourceType, SectionType, TagType } from "@/types";

export const fetchProjectData = async <T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType,
  signal?: AbortSignal
): Promise<T> => {
  const path = tag
    ? `/data/${resource}/${tag}-${display}.${lang}.json`
    : `/data/${resource}/${section}.${lang}.json`;

  const res = await fetch(path, { signal });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};
