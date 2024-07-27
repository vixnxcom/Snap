import React from 'react'
import { arrow, arroww } from '../../assets'

const Mentoring = () => {
  return (
   <section className='mt-10'>
    <div className='flex flex-row '>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-yellow mt-20'>
         <img src={arroww} alt="" className='w-[50%] object-contain py-4 px-1' />
        </div>
        <h1 className='galgo text-7xl text-white mx-4 yellow mt-20'>
            Mentoring
        </h1>
    </div>
   </section>
  )
}

export default Mentoring