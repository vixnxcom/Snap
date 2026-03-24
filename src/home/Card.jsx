import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { art, aug, earth, icon, street, trend } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const CardStack = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const stackRef = useRef(null);
  const gridCardsRef = useRef([]); // NEW REF

  const images = [
    {
      url: trend,
      title: "Trend Fusion",
      location: "Swiss Alps",
      elevation: "4,478m"
    },
    {
      url: art,
      title: "Art Collab",
      location: "Scottish Highlands",
      elevation: "1,345m"
    },
    {
      url: earth,
      title: "Virtual Overlay",
      location: "Canadian Rockies",
      elevation: "2,876m"
    },
    {
      url: aug,
      title: "Smart Frames",
      location: "Himalayas",
      elevation: "6,812m"
    },
    {
      url: icon,
      title: "Augmented Vision",
      location: "Black Forest",
      elevation: "1,493m"
    },
    {
      url: street,
      title: "Street Capsule",
      location: "Monteverde",
      elevation: "1,440m"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, {
      y: 0,
      rotation: (i) => (i - 2.5) * 3,
      x: 0,
      scale: 0.95,
      opacity: 1,
      zIndex: (i) => i
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
        pin: true
      }
    });

    tl.to(cards, {
      y: (i) => -30 + i * 15,
      rotation: (i) => (i - 2.5) * 2,
      scale: 0.98,
      duration: 0.5,
      ease: "power1.out"
    })
      .to(cards, {
        y: (i) => -80 + i * 40,
        rotation: (i) => (i - 2.5) * 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(cards, {
        y: (i) => -200 + i * 70,
        x: (i) => (i % 2 === 0 ? -50 + i * 10 : 50 - i * 10),
        rotation: (i) => {
          if (i < 2) return -5;
          if (i > 3) return 5;
          return 0;
        },
        scale: 1.05,
        stagger: 0.05,
        duration: 1.2,
        ease: "back.out(1.2)"
      })
      .to(cards, {
        y: (i) => -250 + i * 80,
        x: (i) => (i % 2 === 0 ? -80 + i * 15 : 80 - i * 15),
        rotation: (i) => (i % 2 === 0 ? -8 : 8),
        scale: 1.1,
        boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
        duration: 1,
        ease: "elastic.out(1,0.5)"
      });

    /* GRID CARD FLIP ANIMATION */
    gsap.from(gridCardsRef.current, {
      scrollTrigger: {
        trigger: gridCardsRef.current[0],
        start: "top 80%"
      },
      rotateY: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      transformPerspective: 1000
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-black">

      {/* Intro */}
      <div className="flex flex-col items-center justify-center text-white">
        <div
          className="text-center px-4 md:px-16"
          style={{ color: "#d3d3d3" }}
        >
          <h1 className="impact text-5xl text-left mt-10">OUR BAG</h1>
        </div>
      </div>

      {/* STACK */}
      <div
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-visible"
        style={{ perspective: "1500px" }}
      >
        <div ref={stackRef} className="relative w-[500px] h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ transformOrigin: "center center" }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold border border-white/30">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="min-h-screen bg-white mt-20 py-5 mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (gridCardsRef.current[index] = el)}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-500 group bg-white"
            >
              <div className="w-full max-h-84 p-2 bg-gray-50 flex items-center justify-center">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50">
                <h3 className="text-white text-5xl impact mb-2 w-[250px] drop-shadow-lg">
                  {image.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-black font-bold border border-gray-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CardStack;