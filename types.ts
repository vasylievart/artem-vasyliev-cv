import { RefObject } from "react";

export type Lang = "en" | "es";

export interface LanguageContextProps {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

export interface AboutMeProp {
  title: string;
  story: string;
  skills: Skills[];
}

export type Skills = {
  technology: string;
  icon: string;
  type: string;
};

export interface CvProps {
  title: string;
  area: string;
  location: string;
  languages: {
    lang: string;
    level: string;
  }[];
  skills: {
    competence_1: string;
    competence_2: string;
    competence_3: string;
    competence_4: string;
    competence_5: string;
  };
  education: {
    institution: string;
    formation: string;
    degree: string;
  }[];
}

export interface CarouselCardProps {
  active: number;
  url: string;
  alt: string;
  display: DisplayType;
  description: string;
  index: number;
}

export type CarouselImage = {
  url: string;
  description: string;
  alt: string;
};

export type Project = {
  name: string;
  url: string;
  desktop_image: string;
  mobile_image: string;
  alt: string;
  tag: string;
  description: string;
  stack: Stack[];
};

export type Stack = {
  icon: string;
  alt: string;
};

export type ResourceType = "cv" | "projects" | "projects-details" | "skills";

export type SectionType = "cv" | "projects" | "skills";

export type TagType = "coctails-tour" | "charge-connecting";

export type DisplayType = "desktop" | "mobile";

export type ProjectCache<T> = {
  data?: T;
  promise?: Promise<T>;
  timestamp: number;
};

export type AnimationParams = {
  laptopRef: RefObject<HTMLDivElement | null>;
  mobileRef: RefObject<HTMLDivElement | null>;
};

export type LaptopModalProps = {
  project: Project;
  onOpen: (tag: TagType, display: "desktop") => void;
  laptopRef: RefObject<HTMLDivElement | null>;
};

export type MobileModalProps = {
  project: Project;
  onOpen: (tag: TagType, display: "mobile") => void;
  mobileRef: RefObject<HTMLDivElement | null>;
};

export type Carousel3DProps = {
  images: CarouselImage[];
  display?: DisplayType;
};

export type CarouselModalProps = {
  images: CarouselImage[];
  display?: DisplayType;
  onClose: () => void;
};
