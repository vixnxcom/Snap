import { motion } from 'framer-motion'
import React from 'react'

const Personal = () => {
  return (
    <motion.div className='squarediv'>
      <motion.div className='square'  intitial={{ scale: 0}}
       animate= {{ rotate: 180, scale: 2}}
       transition={{type: 'spring', 
       stiffness: 260,
        damping: 20}}>
     
      </motion.div>
    </motion.div>
  )
}

export default Personal
