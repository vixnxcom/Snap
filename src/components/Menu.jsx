import { motion } from 'framer-motion'
import React from 'react'

const Menu = () => {
  return (
    <motion.div className='live'
    initial={{ x:'-100vw'}}
    animate={{x: 0}}
    transition={{delay: 2 , duration: 1 , type: 'spring', stiffness: 500 }}
     >

      <motion.h1 className='z-[999]' whileHover={{scale: 1.5, color: 'red' , duration: 1, originX: 0}}>
        live viraciously...
      </motion.h1>
    </motion.div>
  )
}

export default Menu
