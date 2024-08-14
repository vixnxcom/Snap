import React from 'react'
import styles from '../../style'
import { arrowhite } from '../../assets'
import { Link } from 'react-router-dom'

const Bootcamp = () => {
  return (
   <section>
     {/* bootcamp */}
 <div className=' md:mt-10'>
   <div className='bg-purple h-[40px]'></div>
   <button className='shadow-lg Buttonn text-black  text-center  mx-auto flex flex-row '>
   <Link to ='/register' className={`${styles.flexCenter} mx-auto neue-medium text-[28px] text-center  flex flex-row cursor-pointer p-6`}>Join the Online Bootcamp !
   <img src={arrowhite} alt="" className='w-[56px] mx-2   mb-3'/>
   </Link>
   

   </button>
   <div className='bg-purple h-[40px]'></div>
   </div> 
 {/* bootcamp */}
   </section>
  )
}

export default Bootcamp