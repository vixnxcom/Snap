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



const File = () => {
  return (
    <div className='w-full h-screen'>
<motion.svg width="80" height="100" viewBox="0 0 80 100" fill="none" 
xmlns="http://www.w3.org/2000/svg" className='mt-40 flex h-[40vh]'

variants={svgVariants}
initial= 'hidden'
animate = 'visible'

>
<motion.path d="M48.7783 1L79 21.7737V99H1V1H48.7783Z" stroke="#05F4F4" stroke-width="2" variants={ pathVariants} />
<motion.line x1="20" y1="29" x2="60" y2="29" stroke="#05F4F4" stroke-width="2" variants={pathVariants}/>
<motion.line x1="20" y1="49" x2="60" y2="49" stroke="#038E8E" stroke-width="2" variants={pathVariants}/>
<motion.line x1="20" y1="69" x2="60" y2="69" stroke="#05F4F4" stroke-width="2"/>
</motion.svg>


    </div>
  )
}

export default File
