import React from 'react'
import { Link } from 'react-router-dom'
import { arroww } from '../../assets'

const Class = () => {
  return (
<section>
<div className='mt-5 mb-20 p-2'>
      <div className='Button flex flex-row shadow-lg'>

    <div className='p-2 flex flex-row gap-8 mx-auto'> 
    {/* <p className='neue-medium text-[24px] mt-1 hover:tracking-widest'>Buy Tickets</p> */}
    <a href=" https://meet.google.com/vtb-mahr-osq" target="_blank" rel="noopener noreferrer"  className='neue-medium text-[24px] mt-1 hover:tracking-widest' >

        Join class </a>
    <img src={arroww} alt="" className='w-[43.43px] h-[41.55px] ' />
    </div> 
    
      </div>
    </div>
</section> 
  )
}

export default Class