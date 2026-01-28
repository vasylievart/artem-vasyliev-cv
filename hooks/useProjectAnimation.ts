import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Params = {
  laptopRef: RefObject<HTMLDivElement | null>;
  mobileRef: RefObject<HTMLDivElement | null>;
};

export function useProjectAnimation({ laptopRef, mobileRef }: Params) {
  useGSAP(() => {
    const laptop = laptopRef.current;
    const mobile = mobileRef.current;
    
    if (!laptop || !mobile) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(laptop, {
      scale: 1.05,
      duration: 0.3,
      zIndex: 30,
      ease: "power2.out",
    }, 0);

    tl.to(mobile, {
      x: 0,
      zIndex: 30,
      duration: 0.25,
      ease: "power2.out",
    }, 0);

    tl.to(mobile, {
      x: 60,
      scale: 1,
      duration: 0.25,
      ease: "power1.inOut",
    }, "-=0.05");

    tl.to(mobile, {
      x: -60,
      scale: 0.9,
      zIndex: 10,
      duration: 0.3,
      ease: "power2.inOut",
    });

    const enter = () => tl.play();
    const leave = () => tl.reverse();

    laptop.addEventListener("mouseenter", enter);
    laptop.addEventListener("mouseleave", leave);

    return () => {
      laptop.removeEventListener("mouseenter", enter);
      laptop.removeEventListener("mouseleave", leave);
    };
  }, []);
}
