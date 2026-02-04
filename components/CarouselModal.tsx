import Carousel3D from "@/components/Carousel3D";
import {CarouselModalProps } from "@/types";



const CarouselModal = ({ images, display, onClose }: CarouselModalProps) => {
  return (
    <div className="carousel_modal" onClick={onClose}>
      <div
        className="flex w-225 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Carousel3D display={display} images={images} />
      </div>
    </div>
  );
};

export default CarouselModal;
