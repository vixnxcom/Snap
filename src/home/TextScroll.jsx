import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cam1, doct,  eye,  lady, motion } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageEffect = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const currentImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(image1Ref.current, { y: 0, opacity: 1 });
      gsap.set(image2Ref.current, { y: "100%", opacity: 0 });
      gsap.set(image3Ref.current, { y: "100%", opacity: 0 });
      
      currentImageRef.current = image1Ref.current;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          
          // First transition (0-33%)
          if (progress < 0.33) {
            // Show first image
            gsap.to(image1Ref.current, { y: 0, opacity: 1, duration: 0.3 });
            gsap.to(image2Ref.current, { y: "100%", opacity: 0, duration: 0.3 });
            gsap.to(image3Ref.current, { y: "100%", opacity: 0, duration: 0.3 });
          } 
          // Second transition (33-66%)
          else if (progress < 0.66) {
            // Show second image sliding up
            const localProgress = (progress - 0.33) * 3; // 0 to 1 within this segment
            gsap.to(image1Ref.current, { 
              y: -100 * localProgress, 
              opacity: 1 - localProgress,
              duration: 0.1 
            });
            gsap.to(image2Ref.current, { 
              y: 100 * (1 - localProgress), 
              opacity: localProgress,
              duration: 0.1 
            });
          } 
          // Third transition (66-100%)
          else {
            // Show third image sliding up
            const localProgress = (progress - 0.66) * 3; // 0 to 1 within this segment
            gsap.to(image2Ref.current, { 
              y: -100 * localProgress, 
              opacity: 1 - localProgress,
              duration: 0.1 
            });
            gsap.to(image3Ref.current, { 
              y: 100 * (1 - localProgress), 
              opacity: localProgress,
              duration: 0.1 
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] bg-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <p className="impact text-[80px]">Capture Every Moment in 3D</p>
      </div>
      
      {/* Image container with vertical sliding effect */}
      <div className="absolute inset-0 flex items-center z-20 justify-center overflow-hidden">
        <img
          ref={image1Ref}
          src={doct}
          alt="First Image"
          className="absolute left-1/2 -translate-x-1/2 w-80"
        />
        <img
          ref={image2Ref}
          src={eye}
          alt="Second Image"
          className="absolute left-1/2 -translate-x-1/2 w-80"
        />
        <img
          ref={image3Ref}
          src={motion}
          alt="Third Image"
          className="absolute left-1/2 -translate-x-1/2 w-80"
        />
      </div>
    </section>
  );
};

export default ScrollImageEffect;