import React from 'react'
import { arrow, arroww } from '../../assets'
import Animate from '../Animate'

const Mentoring = () => {
  return (
   <section className='mt-10'>
    <div className='flex flex-row '>
      <Animate>
        <div className='rounded-[80px] w-[80px] h-[80px] bg-yellow mt-20'>

         <img src={arroww} alt="" className='w-[50%] object-contain py-4 px-1' />
        </div>
        </Animate>  
  <Animate>
        <h1 className='galgo text-7xl text-white  yellow mt-20'>
            Mentoring
        </h1>
  </Animate>       
    </div>
   </section>
  )
}

export default Mentoring