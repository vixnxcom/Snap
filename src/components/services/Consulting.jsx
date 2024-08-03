import React from 'react'
import { arrow, arrowhite, arroww } from '../../assets'
import Animate from '../Animate'

const Consulting = () => {
  return (
   <section className='mt-10'>
    
    <div className='flex flex-row'>
    <Animate>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-black mt-20'>
         <img src={arrowhite} alt="" className='w-[50%] object-contain py-4 px-1 ' />
        </div>
    </Animate>

        <Animate>
        <h1 className='galgo text-7xl  mt-20 text-black'>
            Consulting
        </h1>
        </Animate> 
        
    </div>
   </section>
  )
}

export default Consulting