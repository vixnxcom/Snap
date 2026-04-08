import React, { useRef, useEffect } from 'react'
import { run } from '../assets'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ImageEdit = () => {
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 10,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center", // When top of image hits center of viewport
          end: "bottom center",
          toggleActions: "play none none reverse", // Plays when scrolling down, reverses when up
          // markers: true, // Uncomment to see trigger points
        }
      }
    )
  }, [])

  return (
    <div className='h-[20vh]'> 
      <div className='justify-center items-center flex text-center'>
        <img 
          ref={imageRef}
          src={run} 
          alt="" 
          className='w-80 mx-auto mt-8'
        />
      </div>
      {/* <div className=''>
        <p className='impact neue text-[24px] mt-5 text-black text-center '>
          We believe eyewear is more than just something you wear on your face.
        </p>
      </div>  */}
    </div>
  )
}

export default ImageEdit