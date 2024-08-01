import React from 'react'
import styles from '../../style'

const Questions = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col`}>
        <div className={`${styles.flexCenter} md:w-[800px] xs:w-[470px] flex flex-col imagess mt-6 p-6`}>
        <h1 className='galgo text-7xl  mb-1  text-white   '>
        If you have any questions 

     </h1>
     <p className='neue-thin text-[24px] text-white w-[400px] tracking-wide p-6 mr-2 ' >
 
     or concerns about our 
     services, please do not hesitate to contact us. We look forward to working with you.
     </p>
        </div>
    </section>
  )
}

export default Questions