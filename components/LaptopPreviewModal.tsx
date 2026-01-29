import Image from "next/image";
import { RefObject } from "react";
import { Project, TagType } from "@/types";

type Props = {
  project: Project;
  onOpen: (tag: TagType, display: "desktop") => void;
  laptopRef: RefObject<HTMLDivElement | null>;
};

const LaptopPreviewModal = ({ project, onOpen, laptopRef }: Props) => {
  return (
    <div
      ref={laptopRef}
      onClick={() => onOpen(project.tag as TagType, "desktop")}
      className="flex relative cursor-pointer"
    >
      <Image
        src="/frame/laptop_frame_800.webp"
        alt={project.alt}
        width={360}
        height={255}
      />
      <div className="absolute mt-4 ml-12">
        <Image
          src={project.desktop_image}
          alt={project.alt}
          width={264}
          height={240}
        />
      </div>
    </div>
  );
};

export default LaptopPreviewModal;
