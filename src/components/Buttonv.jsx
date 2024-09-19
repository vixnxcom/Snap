import { animate, color, motion } from 'framer-motion'
import { lamp } from '../assets'
import { section } from 'framer-motion/m'
import React from 'react'
import styles from '../style'

const buttonVariants = {
    visible: {
    x: [0, -20, 0, -20, 0],
    
    transition: {delay: 2}
    },

    hover: { 
        scale: 1.2,
        color: 'blue',
        animate :{
         x: [0, 100]
        },
        transition: {
            
             repeat: Infinity,
            repeatType: 'mirror',
            duration: 1,
        }
         
         
    }
}

const Buttonv = () => {

  return (
    <section className={`${styles.flexCenter} galgo mx-auto `}>

    <motion.div className={`${styles.flexCenter} flex flex-col`}
     initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 1.5, 
    duration: 1.5}}>
      <h1 className=' text-[8vw] mx-36'>laugh a liitle bit more</h1>
      <p className='text-[8vw] mx-36'>cackle with the wind</p>

      <motion.div className=' buton text-[5vw] mx-auto h-[auto] '
      variants={buttonVariants} 
      animate='visible'
      whileHover ='hover'>
        {/* <p className='mx-28'>Love for longer</p> */}
      <img src={lamp} alt="" />
        {/* <p>Lust for life</p> */}
      </motion.div>
    </motion.div>
    </section>
  )
}

export default Buttonv
