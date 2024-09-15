import { motion } from 'framer-motion'
import React from 'react'

const Menu = () => {
  return (
    <motion.div className='live'
    initial={{ x:'-100vw'}}
    animate={{x: 0}}
    transition={{delay: 2 , duration: 1 , type: 'spring', stiffness: 500 }}>

      <h1 className='z-[999]'>
        live viraciously...
      </h1>
    </motion.div>
  )
}

export default Menu
