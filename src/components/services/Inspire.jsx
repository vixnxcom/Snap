import React from 'react'
import styles from '../../style'
import { ppl, seat } from '../../assets'
import SideAnim from '../SideAnim'

const Inspire = () => {
  return (
 <section className={`${styles.flexCenter} max-w-[700px] mx-auto `}>
<div className='max-w-lg w-[98vw]   overflow-hidden shadow-xl  mb-5 mt-5  z-[60] '>
    <div className='h-[200px] p-4'>
    <img src={seat} alt="" className='h-[200px] w-full object-cover' />
    </div>
    <div className={`${styles.flexCenter} flex flex-col p-4`}>
        <h1 className='galgo text-white text-7xl tracking wide mt-2'> Motivational Talks</h1>
        <SideAnim>
        <p className='text-white tracking-wide text-[24px] neue-medium '>Engaging and inspirational speeches
           designed to ignite passion, drive, 
          and action in audiences.
     </p>
     </SideAnim>
    </div>
      
</div>
 </section>
  )
}

export default Inspire