import { delay, motion } from 'framer-motion'
import React from 'react'
import { lamp } from '../assets'

const List = () => {
   
  return (
    <motion.ul className='listt'  >
        <h3 className='galgo'>You are one, You are :</h3>
        <motion.li whileHover={{scale: 1.5, color: 'red', originX: 0}} transition={{type:'spring' , stiffness:'300', }} >Yoko ono</motion.li>
        <motion.div whileHover={{scale: 1.5, color: 'red', originX: 0 , }} transition={{type:'spring' , stiffness:'300', }} >
            <img src={lamp} className='w-[20%] py-8' />
        </motion.div>
        <motion.li whileHover={{scale: 1.5, color: 'red', originX: 0}} transition={{type:'spring' , stiffness:'300', }}>Una</motion.li>
        <motion.li whileHover={{scale: 1.5, color: 'red', originX: 0}} transition={{type:'spring' , stiffness:'300', }}>Le Uno</motion.li>
      
    </motion.ul>
  )
}

export default List