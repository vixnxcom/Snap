import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { art, aug, earth, icon, street, trend,   } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const CardStack = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const stackRef = useRef(null);

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
    
    // Initial stack position - cards tightly stacked
    gsap.set(cards, {
      y: 0,
      rotation: (i) => (i - 2.5) * 3,
      x: 0,
      scale: 0.95,
      opacity: 1,
      zIndex: (i) => i
    });

    // Main timeline for card separation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // Phase 1: Initial slight separation
    tl.to(cards, {
      y: (i) => -30 + i * 15,
      rotation: (i) => (i - 2.5) * 2,
      scale: 0.98,
      duration: 0.5,
      ease: "power1.out"
    })
    // Phase 2: Cards start to spread
    .to(cards, {
      y: (i) => -80 + i * 40,
      rotation: (i) => (i - 2.5) * 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // Phase 3: Full separation
    .to(cards, {
      y: (i) => -200 + i * 70,
      x: (i) => {
        if (i % 2 === 0) return -50 + i * 10;
        return 50 - i * 10;
      },
      rotation: (i) => {
        if (i < 2) return -5;
        if (i > 3) return 5;
        return 0;
      },
      scale: 1.05,
      stagger: 0.05,
      duration: 1.2,
      ease: "back.out(1.2)",
      onUpdate: function() {
        // Ensure titles remain visible during animation
        cards.forEach((card, idx) => {
          const titleEl = card.querySelector('.card-title');
          if (titleEl) {
            gsap.set(titleEl, { opacity: 1, y: 0 });
          }
        });
      }
    })
    // Phase 4: Final positions
    .to(cards, {
      y: (i) => -250 + i * 80,
      x: (i) => {
        if (i % 2 === 0) return -80 + i * 15;
        return 80 - i * 15;
      },
      rotation: (i) => {
        return (i % 2 === 0) ? -8 : 8;
      },
      scale: 1.1,
      boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        // Ensure all titles are visible after separation
        cards.forEach(card => {
          const titleEl = card.querySelector('.card-title');
          const locationEl = card.querySelector('.card-location');
          const elevationEl = card.querySelector('.card-elevation');
          
          gsap.set([titleEl, locationEl, elevationEl], { 
            opacity: 1, 
            y: 0,
            clearProps: "transform"
          });
        });
      }
    });

    // Add floating animation after separation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "bottom center",
      end: "bottom top",
      onEnter: () => {
        cards.forEach((card, i) => {
          // Floating animation for cards
          gsap.to(card, {
            y: `+=${15 + i * 2}`,
            rotation: `${(i % 2 === 0) ? 2 : -2}`,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
          
          // Subtle pulse animation for titles
          const titleEl = card.querySelector('.card-title');
          if (titleEl) {
            gsap.to(titleEl, {
              scale: 1.05,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          }
        });
      },
      onLeaveBack: () => {
        cards.forEach(card => {
          gsap.killTweensOf(card, "y,rotation");
          const titleEl = card.querySelector('.card-title');
          if (titleEl) {
            gsap.killTweensOf(titleEl, "scale");
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-black">
      {/* Intro section */}
      <div className=" flex  flex-col items-center justify-center text-white">
             <div className=' text-center px-4 md:px-16' style={{
                color: "#d3d3d3",}} >
    <h1 className='impact text-5xl text-left mt-10'>OUR BAG </h1>

 </div>
        {/* <p className="text-xl text-gray-300">Scroll to explore the stack</p> */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Card stack section */}
      <div 
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-visible"
        style={{ perspective: "1500px" }}
      >
        <div 
          ref={stackRef}
          className="relative w-[500px] h-[600px]"
        >
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{
                transformOrigin: "center center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Always visible title overlay - improved visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                {/* Title section - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* <h3 className="card-title text-white text-3xl font-bold mb-1 drop-shadow-lg">
                    {image.title}
                  </h3> */}
                  <div className="flex items-center gap-4 text-white/90">
                    {/* <span className="card-location flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {image.location}
                    </span> */}
                    {/* <span className="card-elevation flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {image.elevation}
                    </span> */}
                  </div>
                </div>
              </div>
              
              {/* Card number badge */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold border border-white/30">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
     
              
       <div className="min-h-screen bg-white mt-20 py-20 px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-500 group bg-white"
      >
        {/* Image container with aspect ratio */}
        <div className="w-full max-h-84 p-2 bg-gray-50 flex items-center justify-center">
          <img 
            src={image.url} 
            alt={image.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50">
          <h3 className="text-white text-5xl impact mb-2 drop-shadow-lg">
            {image.title}
          </h3>
       
          <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all">
            Explore
          </button>
        </div>
        
        {/* Card number badge */}
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