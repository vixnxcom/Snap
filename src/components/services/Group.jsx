import React from 'react'
import { success } from '../../assets'
import styles from '../../style'
import Animate from '../Animate'
import SideAnim from '../SideAnim'

const Group = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    
    <div className='flex flex-row gap-2 '>

       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5  yellow'>
       Group <br /> Mentoring:
            </h1>

            <div className='p-4'>

        <Animate>
            <p className='neue-medium text-[24px]  w-[200px] text-black '>
            Collaborative mentorship experiences where individuals can learn from 
each other's experiences, share insights, and receive collective support.
          </p>
    </Animate>   

            </div>
    </div>
   </section>
  )
}

export default Group