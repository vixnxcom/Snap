import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { logo } from '../../assets';
import Hero from './Hero';

const Welcome = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const navigationEntries = performance.getEntriesByType('navigation');
    const navigationType = navigationEntries.length ? navigationEntries[0].type : 'navigate';

    if ((navigationType === 'reload' || navigationType === 'navigate') && !localStorage.getItem('animationPlayed')) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.from('#intro-slider', {
          xPercent: '-100',
          duration: 1.3,
          delay: 0.3,
        }).from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        }).to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '-=30',
          delay: 0.3,
          stagger: 0.5,
        }).to('#intro-slider', {
          xPercent: '-100',
          duration: 1.3,
        }).from('#welcome', {
          opacity: 0,
          duration: 0.5,
        });

        // Set the key in localStorage after the animation completes
        tl.eventCallback('onComplete', () => {
          localStorage.setItem('animationPlayed', 'true');
        });
      }, comp);

      return () => ctx.revert();
    } else {
      // If the key is found, hide the loading element immediately
      const introSlider = document.getElementById('intro-slider');
      if (introSlider) {
        introSlider.style.display = 'none';
      }
      const titles = document.querySelectorAll('#title-1, #title-2, #title-3');
      titles.forEach(title => {
        if (title) {
          title.style.display = 'none';
        }
      });
      const welcome = document.getElementById('welcome');
      if (welcome) {
        welcome.style.opacity = 1;
      }
    }
  }, []);

  return (
    <section className='relative' ref={comp}>
      <div id='intro-slider' className='z-[920] absolute left-0 w-full h-screen top-0 flex flex-col gap-10 tracking-wide bg-welcome'>
        <h1 id='title-1' className='text-9xl text-white flex mt-10 galgo'>
          <span className='mr-4'>
            <img src={logo} className='md:w-[153px] md:h-[146.75px] sm:w-[153px] sm:h-[146.75px] xs:w-[61.2px] xs:h-[58.7px] mr-4 mt-2' />
          </span>
          <p className='mt-2'>Champions Global Consulting</p>
        </h1>
        <h1 id='title-2' className='text-4xl mx-8 mt-16 text-white neue-thin'>Unleashing Potential</h1>
        <h1 id='title-3' className='text-4xl mt-10 mx-8 text-white neue-thin'>Achieving Greatness</h1>
      </div>
      <div className='h-screen flex p-8'>
        <h1 id='welcome' className='z-[900]'>
          <Hero />
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
