
// src/AnimatedNav.jsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


const AnimatedNav = () => {
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const tl = useRef(gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } }).pause());

  useEffect(() => {
    const openBtn = document.querySelector('.open-btn');

    const openNav = () => {
      if (tl.current.reversed()) {
        tl.current.play();
      } else {
        tl.current
          .to(navRef.current, { right: 0 })
          .to(navRef.current, { height: '100vh' }, '-=.1')
          .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
          .to(closeRef.current, { opacity: 1, pointerEvents: 'all' }, '-=.8')
          .to('nav h2', { opacity: 1 }, '-=1');
      }
    };

    const closeNav = () => {
      tl.current.reverse();
    };

    openBtn.addEventListener('click', openNav);
    closeRef.current.addEventListener('click', closeNav);

    return () => {
      openBtn.removeEventListener('click', openNav);
      closeRef.current.removeEventListener('click', closeNav);
    };
  }, []);

  return (
    <div>
      <div className="open-btn">Open Menu</div>
      <nav ref={navRef}>
        <h2>Menu</h2>
        <ul>
        <Link  className='text-[20px] mt-5 hover:text-white neue-ligh ' to='/'>Home </Link>
                  <Link  className='text-[20px] mt-5 hover:text-white neue-ligh' to='/about'>About </Link>
               
        </ul>
        <div className="close" ref={closeRef}>Close</div>
      </nav>
    </div>
  );
};

export default AnimatedNav;
