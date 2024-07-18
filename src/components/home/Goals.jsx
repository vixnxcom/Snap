import React from 'react'
import { ppl } from '../../assets'
import styles from '../../style'

const Goals = () => {
  return (
   <section className={`${styles.flexCenter} flex mx-auto place-items-center text-center images`}>
    
     <div>
      <img src={ppl} alt="" className='md:w-[80%] w-[100%] mx-auto'/>
      <h2 className={`${styles.flexCenter} galgo text-7xl tracking-wide mt-5 w-[410px] mb-5 mx-auto` }>
        We Believe in the Importance of Communication and Collaboration
        </h2>
     </div>
   </section>
  )
}

export default Goals