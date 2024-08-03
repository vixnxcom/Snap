import React from 'react'
import { arroww } from '../assets'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className=' p-2'>
      <div className='Button flex flex-row'>

    <Link to='/about' className='p-2 flex flex-row gap-8 mx-auto'> 
    <p className='neue-medium text-[24px] mt-1 hover:tracking-widest'>Read More</p>
    <img src={arroww} alt="" className='w-[43.43px] h-[41.55px] ' />
    </Link> 
    
      </div>
    </div>
  )
}

export default Button

