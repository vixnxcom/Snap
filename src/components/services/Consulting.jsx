import React from 'react'
import { arrow, arrowhite, arroww } from '../../assets'

const Consulting = () => {
  return (
   <section className='mt-10'>
    
    <div className='flex flex-row'>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-black mt-20'>
         <img src={arrowhite} alt="" className='w-[50%] object-contain py-4 px-1 ' />
        </div>
        <h1 className='galgo text-7xl mx-4 mt-20 text-black'>
            Consulting
        </h1>
    </div>
   </section>
  )
}

export default Consulting