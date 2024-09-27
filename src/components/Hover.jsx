
import { motion } from 'framer-motion'

import React from 'react'
import { heart } from '../assets'


const Hover = () => {
  return (
    <div className='wrapperx'>
    <motion.img
    className="box" src={heart}
    /**
     * Setting the initial keyframe to "null" will use
     * the current value to allow for interruptable keyframes.
     */
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3 }}
    
  />
<div className=''>
<h2 className='neue-medium text-white text-[4vw] capitalize mt-10'>
  We love in this place
 </h2>
</div>
  
  </div>
  )
 
}

export default Hover