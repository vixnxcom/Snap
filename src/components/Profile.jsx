import { delay, motion } from 'framer-motion'
import React from 'react'

const svgVariants = {
    hidden: {
         rotate: 180,
         opacity: 0,
    },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 1}
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },

   visible: {
   opacity: 1,
   pathLength: 1,
    transition: {
        duration: 2,
        delay: 2,
        ease: 'easeInOut'
    }
   }
}



const Profile = () => {
  return (
    <div className='w-full h-screen'>

<motion.svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-40 flex h-[40vh]'

variants={svgVariants}
initial= 'hidden'
animate = 'visible'>


<circle cx="30" cy="20" r="19" stroke="#04D7D7" stroke-width="2"/>
<motion.path d="M20 41H40C50.4934 41 59 49.5066 59 60V79H1V60C1 49.5066 9.50659 41 20 41Z" 
stroke="#05F4F4" stroke-width="2"variants={pathVariants} />
</motion.svg>


    </div>
  )
}

export default Profile
