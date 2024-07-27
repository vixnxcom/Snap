import React from 'react'
import styles from '../../style'

const Vision = () => {
  return (
   <section className={`${styles.flexCenter} `}>
    <div className='mission-button mt-36  bg-gray-950 '>
      <div className={`${styles.flexCenter} text-white flex flex-col mt-10`}>
      <div className='bg-vision mt-5'>
        <h1 className={`${styles.flexCenter} neue-medium font-semibold  mb-2 mt-4 text-[32px]  tracking-wide text-black `}>
        Vision Statement
       </h1>
       </div>

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