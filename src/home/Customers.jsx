import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { vogue } from "../assets";

/**
 * BrandMarquee - A linear moving animation of 6 brand names arranged in 2 rows x 3 columns.
 * Uses Tailwind CSS for styling and GSAP for seamless infinite scroll.
 */
const BrandMarquee = () => {
  // References to the two track containers (one per row)
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Brand data: 6 brands with names and optional images
  const brands = [
    { name: "VOGUE", img: vogue },
    { name: "GUCCI", img: null }, // Replace with actual imports
    { name: "PRADA", img: null },
    { name: "CHANEL", img: null },
    { name: "DIOR", img: null },
    { name: "LOUIS VUITTON", img: null },
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
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % getAnimationDistance(topRow)),
      },
    });

    // Bottom row: move right
    gsap.to(bottomRow, {
      x: () => `+${getAnimationDistance(bottomRow)}px`,
      duration: 25,
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

  // Render function for brand items
  const renderBrandItem = (brand, index, rowType) => (
    <div
      key={`${rowType}-${index}`}
      className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 text-gray-800 font-semibold text-lg transition-transform hover:scale-105 hover:shadow-lg"
    >
      {brand.img ? (
        <img src={brand.img} alt={brand.name} className="max-w-full max-h-full object-contain" />
      ) : (
        brand.name
      )}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto py-12 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-inner">
      {/* Top row */}
      <div className="mb-8 overflow-hidden">
        <div
          ref={topRowRef}
          className="flex gap-8 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {brands.map((brand, idx) => renderBrandItem(brand, idx, "top"))}
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
              className="w-32 h-20 flex items-center justify-center bg-indigo-50 rounded-xl shadow-md border border-indigo-200 text-indigo-800 font-semibold text-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              {brand.img ? (
                <img src={brand.img} alt={brand.name} className="max-w-full max-h-full object-contain" />
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