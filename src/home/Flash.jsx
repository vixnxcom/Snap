import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { bot, cam1, drew, ibeyi, jump } from "../assets";

const slides = [
  {
    id: 1,
    heading: "Born To Be Wild",
    sub: "Where cold air meets obsession, and craft becomes ritual.",
    img: bot,
  },
  {
    id: 2,
    heading: "Perspective",
    sub: "Patience woven into fabric. No shortcuts, no substitutes.",
    img: cam1,
  },
  {
    id: 3,
    heading: "Less Work.",
    sub: "The finest materials sourced from places most will never see.",
    img: ibeyi,
  },
  {
    id: 4,
    heading: "Dive Deep",
    sub: "Silhouette as language. Shape as intention.",
    img: jump,
  },
  {
    id: 5,
    heading: "Time Capsule",
    sub: "Time is the final editor. Only the essential remains.",
    img: drew,
  },
];

export default function SnapshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayImage, setDisplayImage] = useState(slides[0].img);

  const imgRef = useRef(null);
  const flashRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const progressRef = useRef(null);
  const autoRef = useRef(null);
  const shuffleIntervalRef = useRef(null);
  const isShufflingRef = useRef(false);

  // Function to get random image from slides
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    return slides[randomIndex].img;
  };

  // Function to start shuffling images
  const startShuffle = () => {
    if (isShufflingRef.current) return;
    isShufflingRef.current = true;
    
    // Clear any existing interval
    if (shuffleIntervalRef.current) {
      clearInterval(shuffleIntervalRef.current);
    }
    
    // Start shuffling images rapidly - update React state instead of direct DOM
    shuffleIntervalRef.current = setInterval(() => {
      setDisplayImage(getRandomImage());
    }, 60); // Change image every 60ms during shuffle
  };

  // Function to stop shuffling
  const stopShuffle = () => {
    if (shuffleIntervalRef.current) {
      clearInterval(shuffleIntervalRef.current);
      shuffleIntervalRef.current = null;
    }
    isShufflingRef.current = false;
  };

  const triggerTransition = (nextIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(nextIndex);
        setDisplayImage(slides[nextIndex].img);
        stopShuffle();
        setIsAnimating(false);
      },
    });

    // Text exit
    tl.to([headingRef.current, subRef.current], {
      y: -24,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        // Ensure text is completely hidden before shuffle starts
        gsap.set([headingRef.current, subRef.current], { opacity: 0 });
      }
    });

    // Start shuffling images during the flash effect
    tl.call(startShuffle, [], "+=0.1");

    // Snapshot flash effect — rapid brightness + contrast flicker
    tl.to(
      imgRef.current,
      { filter: "brightness(2.5) contrast(0.3)", duration: 0.06, ease: "none" },
      "<"
    )
    .to(imgRef.current, {
      filter: "brightness(0.1) contrast(2)",
      duration: 0.05,
      ease: "none",
    })
    .to(imgRef.current, {
      filter: "brightness(3) contrast(0.2)",
      duration: 0.04,
      ease: "none",
    })
    .to(imgRef.current, {
      filter: "brightness(0) contrast(1)",
      duration: 0.05,
      ease: "none",
    });

    // White flash overlay
    tl.to(
      flashRef.current,
      { opacity: 1, duration: 0.05, ease: "none" },
      "<"
    ).to(flashRef.current, { opacity: 0, duration: 0.2, ease: "power2.out" });

    // Image scale glitch
    tl.to(
      imgRef.current,
      {
        scale: 1.04,
        x: gsap.utils.random(-6, 6),
        y: gsap.utils.random(-3, 3),
        duration: 0.15,
        ease: "none",
      },
      "<-0.1"
    );

    // Stop shuffle and set final image
    tl.call(() => {
      stopShuffle();
      setDisplayImage(slides[nextIndex].img);
    });

    // Image settle
    tl.to(imgRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      filter: "brightness(1) contrast(1)",
      duration: 0.4,
      ease: "power3.out",
    });

    // Text enter with new slide's text
    tl.fromTo(
      [headingRef.current, subRef.current],
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        onStart: () => {
          // Ensure text elements have the correct content
          if (headingRef.current) headingRef.current.innerText = slides[nextIndex].heading;
          if (subRef.current) subRef.current.innerText = slides[nextIndex].sub;
        }
      },
      "+=0.1"
    );

    // Progress bar
    tl.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 10, ease: "none" },
      "+=0.1"
    );
  };

  const goTo = (index) => {
    clearTimeout(autoRef.current);
    triggerTransition(index);
    autoRef.current = setTimeout(() => {
      goTo((index + 1) % slides.length);
    }, 10000);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopShuffle();
      clearTimeout(autoRef.current);
    };
  }, []);

  useEffect(() => {
    // Set initial text content
    if (headingRef.current) headingRef.current.innerText = slides[0].heading;
    if (subRef.current) subRef.current.innerText = slides[0].sub;
    
    // Initial entrance animations
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );
    
    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 }
    );
    
    gsap.fromTo(
      imgRef.current, 
      { scale: 1.08, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    
    gsap.fromTo(
      progressRef.current, 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 10, ease: "none", delay: 0.8 }
    );

    autoRef.current = setTimeout(() => goTo(1), 10000);
    
    return () => {
      clearTimeout(autoRef.current);
      stopShuffle();
    };
  }, []);

  const slide = slides[current];

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#0d0d0d",
        fontFamily: "impact",
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Main grid */}
      <div className="relative z-20 w-full h-screen flex flex-col lg:flex-row">
        
        {/* LEFT — Text panel */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-end lg:pr-12 xl:pr-24 order-2 lg:order-1">
          <div className="max-w-lg w-full px-8 lg:px-0">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-5xl lg:text-6xl xl:text-7xl font-normal leading-none mb-8 mt-10"
              style={{
                color: "#d3d3d3",
                whiteSpace: "pre-line",
                letterSpacing: "-0.02em",
              }}
            >
              {slide.heading}
            </h1>

            {/* Sub */}
            <p
              ref={subRef}
              className="text-sm leading-relaxed max-w-xs neue w-[200px]"
              style={{ color: "#f5f1eb" }}
            >
              {slide.sub}
            </p>

            {/* Progress bar */}
            <div
              className="mt-5 h-px w-32 overflow-hidden"
              style={{ background: "#1e1c18" }}
            >
              <div
                ref={progressRef}
                className="h-full origin-left"
                style={{ background: "#700303", transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — Photo panel */}
        <div className="w-full lg:w-1/2 h-full flex items-center bg-hero justify-start lg:pl-12 xl:pl-24 order-1 lg:order-2">
          <div className="relative w-full max-w-lg">
            {/* Photo frame */}
            <div
              className="relative overflow-hidden mx-auto lg:mx-0 bg-hero"
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7), inset 0 0 0 1px #2a2720",
              }}
            >
              {/* Flash overlay */}
              <div
                ref={flashRef}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: "#fff", opacity: 0 }}
              />

              {/* Image - using displayImage state for shuffling */}
              <img
                ref={imgRef}
                src={displayImage}
                alt={slide.heading}
                className="w-full h-full object-cover"
                style={{ display: "block", background: "#700303" }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Corner marks */}
              {[
                "top-0 left-0",
                "top-0 right-0",
                "bottom-0 left-0",
                "bottom-0 right-0",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-5 h-5 pointer-events-none`}
                  style={{
                    borderTop: i < 2 ? "1px solid #c8a96e44" : "none",
                    borderBottom: i >= 2 ? "1px solid #c8a96e44" : "none",
                    borderLeft: i % 2 === 0 ? "1px solid #c8a96e44" : "none",
                    borderRight: i % 2 === 1 ? "1px solid #c8a96e44" : "none",
                  }}
                />
              ))}
            </div>

            {/* Vertical label on side */}
            <div
              className="absolute -right-16 top-1/2 hidden lg:flex items-center"
              style={{
                transform: "translateY(-50%) rotate(90deg)",
                transformOrigin: "center",
              }}
            >
              <span
                className="text-xs tracking-[0.4em] uppercase whitespace-nowrap"
                style={{ color: "#2a2720", fontFamily: "monospace" }}
              >
                still life — {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}