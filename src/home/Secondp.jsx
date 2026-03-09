import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const paragraphs = [
  "It is a tool for <span class='text-blue-800'>expression</span>.",
  "It is a window into <span class='text-gray-500'>innovation</span>."
];

const Secondp = () => {
  const containerRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    // Set initial positions vertically
    gsap.set(paragraphRefs.current[0], { y: "0%" });
    gsap.set(paragraphRefs.current[1], { y: "100%" });

    const tl = gsap.timeline({ 
      repeat: -1,
      defaults: { duration: 1, ease: "power2.inOut" } 
    });

    // First cycle: paragraph 0 goes up, paragraph 1 comes up from bottom
    tl.to(paragraphRefs.current[0], { y: "-100%" })
      .to(paragraphRefs.current[1], { y: "0%" }, "<")
      .to({}, { duration: 2 })
      
      // Second cycle: paragraph 1 goes up, paragraph 0 comes up from bottom
      .to(paragraphRefs.current[1], { y: "-100%" })
      .to(paragraphRefs.current[0], { y: "0%" }, "<")
      .to({}, { duration: 2 });

  }, []);

  return (
    <div className="flex justify-center items-center" style={{ height: '250px' }}>
      <div 
        ref={containerRef}
        className="h-[200px] overflow-hidden w-full max-w-[1200px] relative"
      >
        <div className="relative w-full h-full">
          {paragraphs.map((text, index) => (
            <div
              key={index}
              ref={(el) => (paragraphRefs.current[index] = el)}
              className="absolute w-full flex justify-center"
              style={{ 
                left: 0,
                top: 0
              }}
            >
              <p
                className="impact text-5xl md:text-[80px] uppercase text-center"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondp;