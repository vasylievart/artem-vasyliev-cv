import Image from "next/image";
import { RefObject } from "react";
import { Project, TagType } from "@/types";

type Props = {
  project: Project;
  onOpen: (tag: TagType, display: "mobile") => void;
  mobileRef: RefObject<HTMLDivElement | null>;
};

const MobilePreviewModal = ({ project, onOpen, mobileRef }: Props) => {
  return (
    <div
      ref={mobileRef}
      onClick={() => onOpen(project.tag as TagType, "mobile")}
      className="relative w-30 h-60 cursor-pointer"
    >
      <Image
        src="/frame/mobile_frame_160.webp"
        alt={project.alt}
        width={120}
        height={240}
      />
      <div className="mobile_modal">
        <Image src={project.mobile_image} alt={project.alt} fill />
      </div>
    </div>
  );
};

export default MobilePreviewModal;
