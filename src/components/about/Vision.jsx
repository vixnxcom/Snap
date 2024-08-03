import React from 'react'
import styles from '../../style'
import Animate from '../Animate'
import TextAnim from '../TextAnim'

const Vision = () => {
  return (
   <section className={`${styles.flexCenter} `}>
    <div className='mission-button mt-28  bg-arrow'>
      <div className={`${styles.flexCenter} text-white flex flex-col mt-10`}>

    
      <div className='bg-vision mt-5'> 
  
        <h1 className={`${styles.flexCenter} neue-medium mt-4 text-[32px]  tracking-wide text-white `}>
        Vision Statement
       </h1>
       
       </div>
   
       <Animate>
        <p className='neue-thin text-[24px] text-black p-8 tracking-wide'>
        "To inspire and empower individuals and organizations worldwide to unleash their full 
         potential and become champions of their own success."

        </p>
       </Animate>

      </div>
    </div>
   </section>
  )
}

export default Vision