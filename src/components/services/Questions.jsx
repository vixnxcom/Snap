import React from 'react'
import styles from '../../style'
import SideAnim from '../SideAnim'
import TextAnim from '../TextAnim'

const Questions = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col  mt-5 `}>
        <div className={`${styles.flexCenter} md:w-[800px] mb-10  xs:w-[400px] flex flex-col imagess mt-6 p-2`}>
          <TextAnim>
        <h1 className='galgo text-8xl  text-white   '>
        If you have any questions 

     </h1>
     </TextAnim>
   
     <p className='neue-thin text-[24px] text-white w-[380px] md:w-[600px] tracking-wide p-4 mb-5  ' >
 
     or concerns about our 
     services, please do not hesitate to contact us. We look forward to working with you.
     </p>
  
        </div>
    </section>
  )
}

export default Questions