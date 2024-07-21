import React from 'react'
import { arrow } from '../assets'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className=' p-2'>
      <div className='Button flex flex-row'>

    <Link to='/about' className='p-2 flex flex-row gap-8 mx-auto'> 
    <p className='neue-medium text-[24px] mt-4'>Read More</p>
    <img src={arrow} alt="" className='w-[64px] h-[64px] ' />
    </Link> 
    
      </div>
    </div>
  )
}

export default Button

