import { useState } from "react";
import { DisplayType, TagType } from "@/types";

export function useProjectModal() {
  const [tag, setTag] = useState<TagType>();
  const [display, setDisplay] = useState<DisplayType>();
  const [isOpen, setIsOpen] = useState(false);

  const open = (tag: TagType, display: DisplayType) => {
    setTag(tag);
    setDisplay(display);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return { tag, display, isOpen, open, close };
}
