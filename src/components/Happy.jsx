import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import { fire, happy, heart, kitty } from '../assets';


// Animation variants for scaling and opacity
const imgVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

// Rotation animation for once
const rotateVariants = {
  visible: {
    rotate: [0, 360],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: 0,
    },
  },
};

const Happy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Adjust the threshold as needed
  });

  return (
    <section>
      <div className='md:max-w-[40%] w-[80%] mt-20 mx-auto'>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imgVariants}
          style={{ display: 'inline-block' }}
        >
          <motion.img
            src={happy}
            alt="heart"
            style={{ width: '40%', height: '40%' }}
            variants={rotateVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Happy;



