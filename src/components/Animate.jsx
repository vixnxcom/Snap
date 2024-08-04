import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


const Animate = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              element.children, // Animate child elements
              { y: 200, opacity: 0 }, // Start from 200px below
              { y: 0, opacity: 1, duration: 1.2, stagger: 0.4 } // Move to original position
            );
            observer.unobserve(element); // Stop observing once the animation has triggered
          }
        });
      },
      { threshold: 0.2 } // Trigger when 10% of the element is visible
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
    <div className="vertical-animate-container" ref={containerRef}>
      {children}
    </div>
  );
};

export default Animate;
