import React from 'react'
import styles from '../../style'
import { arrowhite } from '../../assets'
import { Link } from 'react-router-dom'

const Bootcamp = () => {
  return (
   <section className=' mb-10 mb-5 px-18 '>
     {/* bootcamp */}
  
 <div className=' md:mt-10 '>
  
   <button className='shadow-lg Buttonn text-black gap-2  text-center  mx-auto flex flex-row  '>
   <Link to ='/register' className={`${styles.flexCenter} mx-auto neue-medium text-[24px] text-center  flex flex-row cursor-pointer p-6`}>Join the Online Bootcamp !
   <img src={arrowhite} alt="" className='w-[48px] mx-2 mt-2  mb-3'/>
   </Link>
   

   </button>
  
   </div> 
 {/* bootcamp */}
   </section>
  )
}

export default Bootcamp