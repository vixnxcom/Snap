import React from 'react'
import { motive, success } from '../../assets'
import styles from '../../style'

const Motive = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg  w-[120px] h-[120px]'>
        <img src={motive} alt="" className='mt-1'/>
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 '>
       Motivational <br /> Coaching
            </h1>
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
          Inspiring individuals to unleash their inner drive, set ambitious 
          goals, and stay motivated on their journey.


            </p>
       
    </div>
   </section>
  )
}

export default Motive