import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { bot, cam1, cube, eyes, time } from "../assets";
import Button from "../home/Button";

const HeroImage = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  useEffect(() => {
    // Initial icon state
    gsap.set([leftIconRef.current, rightIconRef.current], {
      opacity: 0,
      scale: 0.6,
      y: 30,
    });

    const tl = gsap.timeline();

    // Swipe open panels
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

      // Zoom hero image
      .to(
        imageRef.current,
        {
          scale: 1.4,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )

      // Animate icons in AFTER reveal
      .to(
        leftIconRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      )
      .to(
        rightIconRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

    // Subtle floating effect
    gsap.to(leftIconRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    gsap.to(rightIconRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section>
      <div
        ref={containerRef}
        className=" h-screen w-full  overflow-hidden bg-white flex relative"
      >
        {/* TEXT CONTAINER - Centered on screen */}
        <div className="absolute z-[800]  flex flex-col mx-auto text-center w-full px-4">
          {/* FIRST LINE */}
          <h1 className="text-white impact text-[40px] md:text-[80px] absolute top-20">
            <span className="relative inline-flex items-center">
              THE FUTURE
              {/* LEFT ICON - positioned next to text */}
              <img
                ref={leftIconRef}
                src={eyes}
                alt=""
                className="ml-4 w-24 h-24 will-change-transform inline-block"
              />
            </span>
          </h1>

          {/* SECOND LINE */}
          <h1 className="text-white -right-20 impact  text-[40px] md:text-[80px] whitespace-nowrap mt-4 absolute
           mt-48 top-40">
            <span className="relative inline-flex items-center ">
           
                <img
                  ref={rightIconRef}
                  src={cube}
                  alt=""
                  className=" w-24 h-24 will-change-transform inline-block"
                />
                   IN YOUR 
            

            </span>
            
          </h1>
            <h1 className="text-white impact  mb-0 text-[44px] md:text-[80px]
             whitespace-nowrap mt-4 mt-40 absolute top-80">
               <span className=" relative inline-flex items-center">
                HANDS
               </span>
                {/* RIGHT ICON - positioned next to text */}
           
              </h1>
             
        </div>

 

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
        <div className="w-full h-full mt-20 md:mt-40 mx-auto justify-center flex text-center items-center">
          <img
          ref={imageRef}
          src={cam1}
          alt="Hero"
          className="w-full h-full object-contain md:object-cover"
        /> 
         </div>
      </div>
    </section>
  );
};

export default HeroImage;