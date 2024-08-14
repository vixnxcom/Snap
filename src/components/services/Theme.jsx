import React from 'react'
import { success } from '../../assets'
import styles from '../../style'
import SideAnim from '../SideAnim'
import Animate from '../Animate'

const Theme = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-2 '>
    
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-2 py-6 w-full yellow'>
       Theme-Based <br /> Mentoring:
            </h1>
          
            <div className='p-6 '>
           <Animate>
            <p className='neue-medium text-[24px]  w-[190px] text-black '>
            Specialized mentoring programs focusing on specific themes or 
            topics such as career development, leadership, or personal growth
 
            </p>
            </Animate>
            </div>
    </div>
   </section>
  )
}

export default Theme