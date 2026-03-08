import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { vogue, honda } from "../assets";

/**
 * BrandMarquee - A linear moving animation of 10 brand names arranged in 2 rows x 5 columns.
 * Uses Tailwind CSS for styling and GSAP for seamless infinite scroll.
 */
const BrandMarquee = () => {
  // References to the two track containers (one per row)
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Brand data: 10 brands with names and optional images
  const brands = [
    { name: "VOGUE", img: vogue },
    { name: "HONDA", img: honda },
    { name: "PRADA", img: null },
    { name: "CHANEL", img: null },
    { name: "DIOR", img: null },
    { name: "LOUIS VUITTON", img: null },
    { name: "VERSACE", img: null },
    { name: "BALENCIAGA", img: null },
    { name: "SAINT LAURENT", img: null },
    { name: "FENDI", img: null },
  ];

  useEffect(() => {
    // Get the two row elements
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    // --- Duplicate content for seamless loop ---
    const setupInfiniteRow = (rowElement) => {
      if (!rowElement) return;
      const children = Array.from(rowElement.children);
      // Clone each child and append
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        clone.setAttribute("data-clone", "true");
        rowElement.appendChild(clone);
      });
    };

    setupInfiniteRow(topRow);
    setupInfiniteRow(bottomRow);

    // --- GSAP animations ---
    const getAnimationDistance = (rowElement) => {
      return rowElement.scrollWidth / 2;
    };

    // Top row: move left
    gsap.to(topRow, {
      x: () => `-${getAnimationDistance(topRow)}px`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % getAnimationDistance(topRow)),
      },
    });

    // Bottom row: move right
    gsap.to(bottomRow, {
      x: () => `+${getAnimationDistance(bottomRow)}px`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const distance = getAnimationDistance(bottomRow);
          let val = parseFloat(x) % distance;
          if (val > 0) val -= distance;
          return val;
        }),
      },
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(topRow);
      gsap.killTweensOf(bottomRow);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 overflow-hidden bg-transparent">
      <h1 className='impact  mb-20 text-5xl text-left  px-4 md:px-0' style={{ color:'#d3d3d3'}}>BRAND COLLABORATIONS </h1>
      {/* Top row */}
      <div className="mb-8 overflow-hidden">
        <div
          ref={topRowRef}
          className="flex gap-8 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {brands.map((brand, idx) => (
            <div
              key={`top-${idx}`}
              className="w-32 h-20 flex items-center justify-center bg-transparent text-white font-semibold text-lg transition-transform hover:scale-105 border-b-2 border-transparent hover:border-gray-400"
            >
              {brand.img ? (
                <img 
                  src={brand.img} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain brightness-0 invert" 
                />
              ) : (
                brand.name
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="overflow-hidden">
        <div
          ref={bottomRowRef}
          className="flex gap-8 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {brands.map((brand, idx) => (
            <div
              key={`bottom-${idx}`}
              className="w-32 h-20 flex items-center justify-center bg-transparent text-white font-semibold text-lg transition-transform hover:scale-105 border-b-2 border-transparent hover:border-gray-400"
            >
              {brand.img ? (
                <img 
                  src={brand.img} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain brightness-0 invert" 
                />
              ) : (
                brand.name
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;