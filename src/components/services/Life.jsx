import React from 'react'
import { life, success } from '../../assets'
import styles from '../../style'

const Life = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg w-[120px] h-[120px]'>
        <img src={life} alt="" className='w-[110px] h-[110px] mt-2 mx-auto' />
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 '>
             Life <br /> Coaching
            </h1>
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
            Tailored support to help individuals clarify their goals, overcome obstacles, 
            and achieve personal fulfilment.  
            </p>
       
    </div>
   </section>
  )
}

export default Life