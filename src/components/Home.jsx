import { motion } from 'framer-motion'
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import styles from '../style'
import Menu from './Menu'
import { section } from 'framer-motion/m'


const Home = () => {
  return (
    <section className='h-[110vh]'>
  <body className='hero-title flex flex-col'>
    <motion.h1
     animate={{ 
      fontSize:50,
       color: 'red', 
       x: -20,
        y: -50
       }}
     className='text-black '>
      The Age of Uninnocence
      </motion.h1>

   {/* link */}
   <motion.div className={`${styles.flexCenter} w-[50vw] buton text-[5vw]`}>
   <Link to='/button' >
   <motion.button initial={{opacity: 0}} animate={{ scale: 1.5, fontSize:20, opacity:1,  }} >
    Power uP
   </motion.button>

   </Link>
   </motion.div>

   <div className='mt-10 text-[48px]'>
    <Menu/>
   </div>
   {/* link */}
  </body>
 
  </section>
  )
}

export default Home