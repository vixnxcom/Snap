import React from 'react'
import styles from '../../style'

const Steps = () => {
  return (
   <section>
    <div className='mt-5 p-4'>
    <h1 className='galgo text-6xl text-white tracking-wide tracking-wide'>How to participate</h1>
    </div>

    <div className='mt-2 p-4 flex flex-col'>

   <div className='flex flex-row'>
    <div className={`w-[48px] h-[48px] rounded-full ${styles.flexCenter} mt-2  text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px] tracking-wide'> 01. </h1>
     </div> 
  <p className='neue-medium text-[28px] text-white tracking-wide mt-2 mx-4 ' > Purchase a ticket</p>
     </div>

   <div className='flex flex-row mt-2'>
    <div className={`w-[48px] h-[48px] rounded-full ${styles.flexCenter} mt-2 text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px]  tracking-wide'> 02. </h1>
     </div> 
  <p className='neue-medium text-[28px] text-white tracking-wide mt-2 mx-4 ' > Join our class</p>
     </div>





     </div>
   </section>
  )
}

export default Steps