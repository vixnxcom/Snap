import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { heart,  } from '../assets';

const Scroll = () => {
  // Move useScroll inside the component
  const { scrollYProgress } = useScroll();
  
  // Define the scale transformation using the correct scrollYProgress
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <section className='bodys'>
      <div className='wrapper'>
        <motion.div className='container' style={{ scale }}>
          {/* <motion.div className='item' style={{ scaleY: scrollYProgress }}>
          </motion.div> */}

         <motion.img 
            className='item' 
            src={heart}
            alt='Animated Item' 
            style={{ scaleY: scrollYProgress }}   // Add a transition for the image scale as well
            transition={{ duration: 1 }} // duration in second
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Scroll;
