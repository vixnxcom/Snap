import React from 'react'
import { success } from '../../assets'
import styles from '../../style'
import SideAnim from '../SideAnim'
import Animate from '../Animate'

const Theme = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-2 '>
      <SideAnim>
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 mx-2 yellow'>
       Theme-Based <br /> Mentoring:
            </h1>
            </SideAnim>
            <div className='p-4'>
           <Animate>
            <p className='neue-medium text-[24px]  w-[200px] text-black '>
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