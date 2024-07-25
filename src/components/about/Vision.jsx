import React from 'react'
import styles from '../../style'

const Vision = () => {
  return (
   <section className={`${styles.flexCenter} `}>
    <div className='mission-button mt-36  '>
      <div className={`${styles.flexCenter} text-white flex flex-col`}>
        <h1 className='neue-medium font-semibold mt-5 mb-2 text-[32px] text-white tracking-wide '>
        Vision Statement:
       </h1>

        <p className='neue-thin text-[24px] text-white mb-10 p-8 tracking-wide'>
        "To inspire and empower individuals and organizations worldwide to unleash their full 
         potential and become champions of their own success."

        </p>
      </div>
    </div>
   </section>
  )
}

export default Vision