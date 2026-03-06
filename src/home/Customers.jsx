import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * BrandMarquee - A linear moving animation of 6 brand names arranged in 2 rows x 3 columns.
 * Uses Tailwind CSS for styling and GSAP for seamless infinite scroll.
 */
const BrandMarquee = () => {
  // References to the two track containers (one per row)
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Brand data: 6 names
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Apple",
    "Google",
    "Samsung",
  ];

  useEffect(() => {
    // Get the two row elements
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    // --- Duplicate content for seamless loop ---
    // We clone each brand item and append it to the same row.
    // This gives us two full sets side by side.
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
    // Calculate the width of one set of brands (half of total width because we have two sets)
    // We need to animate by -50% of the total width (which equals one full set width)
    const getAnimationDistance = (rowElement) => {
      // total width includes two sets, so half is one set
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

    // Bottom row: move right (opposite direction for visual interest)
    gsap.to(bottomRow, {
      x: () => `+${getAnimationDistance(bottomRow)}px`,
      duration: 25, // slightly different speed to avoid pattern lock
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const distance = getAnimationDistance(bottomRow);
          // keep value within [-distance, 0] range by wrapping
          let val = parseFloat(x) % distance;
          if (val > 0) val -= distance;
          return val;
        }),
      },
    });

    // Cleanup function to kill animations on unmount
    return () => {
      gsap.killTweensOf(topRowRef.current);
      gsap.killTweensOf(bottomRowRef.current);
    };
  }, []); // Empty dependency ensures this runs once after mount

  // --- Render two rows, each with the original 6 brands (clones added later in effect) ---
  return (
    <div className="w-full max-w-4xl mx-auto py-12 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-inner">
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
              className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 text-gray-800 font-semibold text-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              {brand}
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
              className="w-32 h-20 flex items-center justify-center bg-indigo-50 rounded-xl shadow-md border border-indigo-200 text-indigo-800 font-semibold text-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;