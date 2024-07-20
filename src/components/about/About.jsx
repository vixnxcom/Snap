import React from 'react'
import Head from './Head'
import Secondp from './Secondp'
import { Box } from './Box'
import styles from '../../style'
import Guiding from './Guiding'

const About = () => {
  return (
    <div className='w-full overflow-hidden bg-black' >

      <div className='bg-black h-[400px]' >
      <Head />
    </div>

    <div className='bg-white'>
      <Secondp />
    </div>

     <div className='bg-black h-[500px] '>
     <div className='bg-box'>
      <Box />
     </div>
     </div>

        <div className='bg-purple'>
        <div className=''>
    
    <h2 className={`${styles.flexStart} galgo text-8xl text-white tracking-wide p-8` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
      Guiding Principles
        </h2>
        </div>
        <div className='bg-curve'>
       <Guiding />
       </div>
        </div>
   
   




     </div>
  )
}

export default About