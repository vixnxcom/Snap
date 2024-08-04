import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


const SideAnim = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              element.children, // Animate child elements
              { x: -200, opacity: 0 },
              { x: 0, opacity: 1, duration: 1.2, stagger: 0.3 } // Added stagger for a sequential effect
            );
            observer.unobserve(element); // Stop observing once the animation has triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="animate-containerr" ref={containerRef}>
      {children}
    </div>
  );
};

export default SideAnim;