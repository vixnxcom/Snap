import React, { useEffect, useState } from 'react'
import { top } from '../assets';


const ScrollTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 800);
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

   }, []);

   const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
   };




  return (

    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick= {scrollToTop}>
        <img src={top} alt="" className='w-[56px] h-[56px]'/>
    </button>
  );
};

export default ScrollTop