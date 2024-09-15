import { motion } from 'framer-motion'
import React from 'react'

const Menu = () => {
  return (
    <motion.div className='live'
    initial={{ x:'-100vw'}}
    animate={{x: 0}}
    transition={{delay: 1.0 , duration: 1 }}>

      <h1 className='z-[999]'>
        live viraciously...
      </h1>
    </motion.div>
  )
}

export default Menu
