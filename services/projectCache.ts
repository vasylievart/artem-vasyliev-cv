import { ProjectCache } from "@/types";


const cache = new Map<string, ProjectCache<any>>();

export function getCache<T>(key: string): ProjectCache<T> | undefined {
  return cache.get(key) as ProjectCache<T> | undefined;
}

export function setCache<T>(key: string, entry: ProjectCache<T>) {
  cache.set(key, entry as ProjectCache<unknown>);
}

export function deleteCache(key: string) {
  cache.delete(key);
}
