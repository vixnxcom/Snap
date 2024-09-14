import { motion } from 'framer-motion'
import React from 'react'

const Menu = () => {
  return (
    <motion.div className='live'
    initial={{ x:'-100vw'}}
    animate={{x: 0}}>
      <h1>
        live vivaciously...
      </h1>
    </motion.div>
  )
}

export default Menu
