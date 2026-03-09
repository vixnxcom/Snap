import React from 'react'
import { star } from '../assets'

const Button = () => {
  return (
   
        <div className='bg-black text-white w-full mb-10  mx-auto '>
    <div className='h-[80px] bg-black'></div>
 <div className=' text-center md:px-16' style={{
                color: "#d3d3d3",}} >
    <h1 className='impact text-5xl text-left px-4 md:px-0'>IN NUMBERS WE TRUST </h1>

 </div>

 <div className='flex flex-col px-4 grid grid-cols-2 mt-10  md:px-16'>

 <div className='text-white flex flex-col '>
  <h1 className='impact text-[40px]'>7000 
    </h1>
    <p className='neue text-[24px]'>Pieces Sold</p>
 </div>
            
 <div className=' text-white flex flex-col'>
  <h1 className='impact text-[40px]'> 50
     </h1>
     <p className='neue text-[24px] '> Partnerships</p>
 </div>
            
 <div className=' text-white flex flex-col mt-5'>
  <h1 className='impact text-[40px]'> 10
    </h1>
     <p className='neue text-[24px] '>Countries</p>
 </div>
 
            
        </div>
        <div className=' text-white flex flex-col mt-5 px-4 md:px-16'>
  <h1 className='impact text-[40px]'> 5 Star Ratings
    </h1>
    <div className='flex flex-row'>
      <img src={star} alt="" className='w-5'/>
      <img src={star} alt="" className='w-5'/>
      <img src={star} alt="" className='w-5'/>
      <img src={star} alt="" className='w-5'/>
      <img src={star} alt="" className='w-5'/>
    </div>
    
 </div>
        </div>

  )
}

export default Button