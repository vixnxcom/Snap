import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { doct } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageEffect = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          y: "0%", // Start at normal position (visible)
        },
        {
          y: "120vh", // Move past entire screen height
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1.5,
            pin: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] bg-white overflow-hidden flex items-center justify-center"
    >
       <div className="impact  text-[80px]  text-center items-centerjustify-center">
   <p className="z-90"> Capture Every Moment in 3D</p>
    </div>
   
      <img
        ref={imageRef}
        src={doct}
        alt="Scroll Effect"
        className="absolute left-1/2 z-99 -translate-x-1/2 w-80"
      />
    </section>
  );
};

export default ScrollImageEffect;