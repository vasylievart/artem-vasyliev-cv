import { fetchProjectData } from "@/api/fetchProjectData";
import { deleteCache, getCache, setCache } from "./projectCache";
import { DisplayType, ResourceType, SectionType, TagType } from "@/types";

const TTL = 5* 60* 1000; 


export async function cachedProjectDataLoader<T>(
  resource: ResourceType,
  lang: string,
  section?: SectionType,
  display?: DisplayType,
  tag?: TagType,
  signal?: AbortSignal
): Promise<T> {
  const key = `${resource}:${section ?? "none"}:${display ?? "none"}:${lang}:${tag ?? "none"}`;
  const now = Date.now();

  const cached = getCache<T>(key);

  if (cached?.data && now - cached.timestamp < TTL) {
    console.log("[CACHE HIT]", key);
    return cached.data;
  }


  if (cached?.promise) {
    console.log("[CACHE PENDING]", key);
    return cached.promise;
  }

  console.log("[CACHE MISS]", key);

  const promise = fetchProjectData<T>(resource, lang, section, display, tag, signal)
    .then(data => {
      console.log("[CACHE STORE]", key);
      setCache(key, { data, timestamp: Date.now() });
      return data;
    })
    .catch(err => {
      console.log("[CHACHE DELETE]", key);
      deleteCache(key);
      throw err;
    });

  setCache(key, { promise, timestamp: now });

  return promise;
}
