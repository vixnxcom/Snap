import React from 'react'
import styles from '../../style'

const Mission = () => {
  return (
   <section className={`${styles.flexCenter}`}>
    <div className='mission-button  mt-36'>
      <div className={`${styles.flexCenter} text-white flex flex-col`}>
        <h1 className='neue-medium font-semibold mt-5 mb-2 text-[32px] text-white tracking-wide '>
        Mission Statement:
       </h1>

        <p className='neue-thin text-[24px] text-white mb-10 p-8 tracking-wide'>
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