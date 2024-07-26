import React, { useEffect, useState } from 'react'
import { top } from '../assets';


const ScrollTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 400);
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
        <img src={top} alt="" className='w-[80px] h-[80px]'/>
    </button>
  );
};

export default ScrollTop