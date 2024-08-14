import React from 'react'
import { life, success } from '../../assets'
import styles from '../../style'
import SideAnim from '../SideAnim'

const Life = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg w-[120px] h-[120px]'>
        <img src={life} alt="" className='w-[110px] h-[110px] mt-2 mx-auto' />
       </div>
       {/* img */}
       <SideAnim>  
       <h1 className='neue-medium text-[32px] text-white  '>
             Life <br /> Coaching
            </h1>
        </SideAnim>  
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white max-w-[330px] '>
            Tailored support to help individuals clarify their goals, overcome obstacles, 
            and achieve personal fulfilment.  
            </p>
       
    </div>
   </section>
  )
}

export default Life