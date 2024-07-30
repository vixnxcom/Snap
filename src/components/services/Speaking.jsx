import React from 'react'
import { arrow, arrowhite, arroww } from '../../assets'

const Speaking = () => {
  return (
   <section className='mt-10'>
    <div className='flex flex-row '>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-yellow mt-10'>
         <img src={arrowhite} alt="" className='w-[50%] object-contain py-4 px-1' />
        </div>
        <h1 className='galgo text-7xl text-white mx-4 yellow mt-10'>
            Public Speaking
        </h1>
    </div>
   </section>
  )
}

export default Speaking