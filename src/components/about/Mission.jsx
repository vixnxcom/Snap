import React from 'react'
import styles from '../../style'

const Mission = () => {
  return (
   <section className={`${styles.flexCenter} `}>

    <div className='mission-button bg-arrow  mt-36 mb-10'>
      <div className={`${styles.flexCenter} text-white flex flex-col mt-10`}>
        <div className='bg-vision mt-5'>
        <h1 className={`${styles.flexCenter} neue-medium  mb-2 mt-4 text-[32px]  tracking-wide text-white `}>
        Mission Statement
       </h1>
       </div>

        <p className='neue-thin text-[24px] text-black mb-10 p-8 tracking-wide'>
        "At Champions Global-Consulting, our mission is to provide unparalleled coaching, 
    mentoring, speaking, and leadership consulting services, fostering growth, innovation, and 
      excellence in every client we serve. Through personalized guidance, strategic insights, and 
        transformative solutions, we aim to cultivate a culture of leadership, resilience, and 
     achievement, driving sustainable success and making a positive impact on the world."
        </p>
      </div>
    </div>

   </section>
  )
}

export default Mission