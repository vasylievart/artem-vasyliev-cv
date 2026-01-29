"use client";

import { useState } from "react";
import clsx from "clsx";
import { CarouselImage, DisplayType } from "@/types";
import CarouselCard from "./CarouselCard";
import { useCarouselPositions } from "@/hooks/useCarouselPositions";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: CarouselImage[];
  display?: DisplayType;
};

export default function Carousel3D({ images, display }: Props) {
  const [active, setActive] = useState(0);
  const { getSlideClass } = useCarouselPositions(images.length, active);

  const prev = () => {
    setActive((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setActive((i) => (i + 1) % images.length);
  };

  const screen: DisplayType = display ?? "mobile";

  return (
    <div className="carousel_container">
      {images.map((src, i) => (
        <div
          key={i}
          className={clsx(
            "absolute transition-all duration-500 ease-out",
            getSlideClass(i)
          )}
        >
          <CarouselCard
            active={active}
            url={src.url}
            alt={src.alt}
            display={screen}
            description={src.description}
            index={i}
          />
        </div>
      ))}

      <button onClick={prev} className="carousel_button_left">
        <ChevronLeft className="opacity-75" />
      </button>

      <button onClick={next} className="carousel_button_right">
        <ChevronRight className="opacity-75" />
      </button>
    </div>
  );
}
