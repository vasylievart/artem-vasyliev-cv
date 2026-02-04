import Image from "next/image";
import { LaptopModalProps,  TagType } from "@/types";



const LaptopPreviewModal = ({ project, onOpen, laptopRef }: LaptopModalProps) => {
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
