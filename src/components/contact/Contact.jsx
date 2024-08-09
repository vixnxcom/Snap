import React from 'react'
import { Link } from 'react-router-dom'
import { arrowhite } from '../../assets'

const Contact = () => {
  return (
    <section className='w-full  overfolow-hidden'>
        <div className='bg-purple h-[600px] mt-36'>
   
        <button className=' text-[20px] text-black text-center mx-auto neue-regular flex flex-row  mt-36'>
        <Link to ='/register' className='neue-regular text-center mx-8 flex flex-row cursor-pointer '>Register Today!
        <img src={arrowhite} alt="" className=' w-[12%] mx-4 mb-3'/>
        </Link>
        
  
        </button>
        </div>
    </section>
  )
}

export default Contact