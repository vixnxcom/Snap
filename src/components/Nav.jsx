import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <body className='body '>
        <motion.div className='title' initial={{x: -250, y: -250}} animate={{x: 20, y: 20}}>
        <h1 className='headerr'>
        Pale
       </h1>
        </motion.div>
  
   {/* toggle botton ///////////////////////////////////*/}
   <div className='btn' id='toggle-btn'>
     <div className='btn-outline btn-outline-1'></div>
     <div className='btn-outline btn-outline-2'></div>

     <div id='hamburger'>
     <span></span> 
     </div>

   </div>
 {/*toggle  botton */}
</body>
  
  )
};

export default Nav;
      
