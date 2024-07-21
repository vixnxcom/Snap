import React from 'react'
import { logo, ppl } from '../../assets'
import styles from '../../style'

const Team = () => {
  return (
 <section className={`${styles.paddingX} mt-10`}>
       <div className=''>


       
        {/* first card  second card*/}
        <div className=' flex flex-row space-x-4  gap-4 mx-auto'>
        {/* first card */}
        <div className='flex flex-col'>
        <div className={`${styles.flexCenter}`}>
         <img src={logo} alt="" className='w-[50%] object-contain ' />
        </div>
        {/* text */}
          <div className={`${styles.flexCenter}`}>
          <h1 className='neue-medium text-[28px] text-white '>Dr. Ahmed <br /> Abdulkareem</h1>
          <p></p>
          </div>
          </div>
          {/* text */}
        {/* first card */} 
        {/* second card */}
        <div className='flex flex-col'>
        <div className={`${styles.flexCenter}`}>
         <img src={logo} alt="" className='w-[50%] object-contain ' />
        </div>
        {/* text */}
          <div className={`${styles.flexCenter}`}>
          <h1 className='neue-medium text-[28px] text-white '>Dr. Ahmed <br /> Abdulkareem</h1>
          <p></p>
          </div>
          </div>
          {/* text */}
        {/* second card */} 
        </div>

        {/* first card second card*/}

      






       </div>
 </section>
  )
}

export default Team
