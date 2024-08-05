import React from 'react'
import { success } from '../../assets'
import styles from '../../style'
import TextAnim from '../TextAnim'
import SideAnim from '../SideAnim'
import Animate from '../Animate'

const One = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
  
    <div className='flex flex-row gap-2 '>

       <h1 className='neue-medium text-[32px] text-white mb-4 mt-2  yellow'>
       One-on-One <br /> Mentoring:
            </h1>
 
            <div className='p-4'>
    <Animate>      
            <p className='neue-medium text-[24px]  w-[200px] text-black '>
             Personalized mentorship sessions designed to provide guidance, 
support, and advice tailored to individual needs and goals.
 
            </p>          
  </Animate> 
            </div>
             
    </div>
  
   </section>
  )
}

export default One