export function useCarouselPositions(total: number, active: number) {
  const getSlideClass = (index: number): string => {
    const prev = (active - 1 + total) % total;
    const next = (active + 1) % total;

    if (index === active) {
      return "z-50 scale-100 opacity-100 translate-x-0";
    }

    if (index === prev) {
      return "z-30 scale-80 opacity-80 -translate-x-[180px]";
    }

    if (index === next) {
      return "z-30 scale-80 opacity-80 translate-x-[180px]";
    }

    return "opacity-0 scale-50 pointer-events-none";
  };

  return { getSlideClass };
}
