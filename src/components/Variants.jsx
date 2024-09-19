import { motion } from 'framer-motion'
import { delay } from 'framer-motion/dom'
import React from 'react'

const Variants = () => {

    const containerVariants = {
        hidden: {
            opacity: 0,
            x:'100vw',
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                // delay: 0.5,
                mass: 0.4,
                damping: 8,
                when: 'beforeChildren',
                staggerChildren: 2,
            }
        }
    }

  const childVariants = {
    hidden: {
    opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
       delay: 0.2,
       
      }  
    }
 
  }




  return (
    <motion.div className='text-4xl h-screen w-full  hero-titlee' variants={containerVariants}
    initial='hidden'
    animate='visible'>

      <h1>Going in for the  big ride baby...</h1>
      <motion.p variants={childVariants}>let us begin</motion.p>
      <motion.div variants={childVariants}>
      priest on an airplane
      </motion.div>
  

    </motion.div>
  )
}

export default Variants
