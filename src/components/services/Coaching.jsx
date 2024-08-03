import React from 'react'
import { arrow, arroww } from '../../assets'
import Animate from '../Animate'

const Coaching = () => {
  return (
   <section className=''>
    
    <div className='flex flex-row'>
      <Animate>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-white'>
         <img src={arroww} alt="" className='w-[50%] object-contain py-4 px-1' />
        </div>
        </Animate> 

        <Animate>
        <h1 className='galgo text-7xl text-white '>
            Coaching
        </h1>
        </Animate>
    </div>
   </section>
  )
}

export default Coaching