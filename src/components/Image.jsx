import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { lady } from "../assets";

const HeroImage = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation: Swipe open like a book
    tl.to(leftRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: "power4.out",
    })
      .to(
        rightRef.current,
        {
          xPercent: 100,
          duration: 1.5,
          ease: "power4.out",
        },
        "<"
      )
      // Animation: Zoom in on the image
      .to(
        imageRef.current,
        {
          scale: 1.2,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5" // Overlap the animations slightly
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-gray-900 flex items-center justify-center"
    >
      {/* Left panel */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 h-full w-1/2 bg-black z-10"
      ></div>
      {/* Right panel */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 h-full w-1/2 bg-black z-10"
      ></div>
      {/* Hero Image */}
      <img
        ref={imageRef}
        src={lady}
        alt="Hero"
        className="w-full h-full object-cover scale-1.05"
      />
    </div>
  );
};

export default HeroImage;
