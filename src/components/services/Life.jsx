import React from 'react'
import { success } from '../../assets'
import styles from '../../style'

const Life = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg mx-2'>
        <img src={success} alt="" />
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 mx-2'>
             Life <br /> Coaching
            </h1>
     </div>
            <div className='p-4'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
            Tailored support to help individuals clarify their goals, overcome obstacles, 
            and achieve personal fulfilment.  
            </p>
       
    </div>
   </section>
  )
}

export default Life