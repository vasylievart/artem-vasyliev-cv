"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CarouselImage, Project } from "@/types";
import { useProjectData } from "@/hooks/useProjectData";
import { useProjectModal } from "@/hooks/useProjectModal";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import LaptopPreviewModal from "./LaptopPreviewModal";
import MobilePreviewModal from "./MobilePreviewModal";
import CarouselModal from "./CarouselModal";

gsap.registerPlugin(useGSAP);

export default function ProjectCard({ project }: { project: Project }) {
  const laptopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const { tag, display, isOpen, open, close } = useProjectModal();
  const {
    data: images,
    error,
    loading,
  } = useProjectData<CarouselImage[]>(
    "projects-details",
    undefined,
    display,
    tag
  );

  useProjectAnimation({ laptopRef, mobileRef });

  return (
    <div className="project_card_container">
      <div className="laptop_preview">
        <LaptopPreviewModal
          project={project}
          onOpen={open}
          laptopRef={laptopRef}
        />
      </div>

      <div className="mobile_preview">
        <MobilePreviewModal
          project={project}
          onOpen={open}
          mobileRef={mobileRef}
        />
      </div>

      <div className="project_description">
        <p className="px-4">{project.description}</p>
        <span className="flex gap-2 p-4">
          Stack:
          {project.stack.map((s, i) => (
            <Image
              key={i}
              title={s.alt}
              src={s.icon}
              alt={s.alt}
              width={24}
              height={24}
            />
          ))}
        </span>
      </div>

      {isOpen && loading && <p>Loading carousel...</p>}

      {isOpen && error && <p>Failed to load images</p>}

      {isOpen && images && !loading && (
        <CarouselModal images={images} display={display} onClose={close} />
      )}
    </div>
  );
}
