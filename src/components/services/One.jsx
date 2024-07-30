import React from 'react'
import { success } from '../../assets'
import styles from '../../style'

const One = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-2 '>
       {/* img */}
       {/* <div className='services-bg mx-2'>
        <img src={success} alt="" />
       </div> */}
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 mx-2 yellow'>
       One-on-One <br /> Mentoring:
            </h1>
    
            <div className='p-4'>
           
            <p className='neue-medium text-[24px]  w-[200px] text-black '>
             Personalized mentorship sessions designed to provide guidance, 
support, and advice tailored to individual needs and goals.
 
            </p>
            </div>
    </div>
   </section>
  )
}

export default One