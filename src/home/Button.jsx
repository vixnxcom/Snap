import React from 'react'

const Button = () => {
  return (
   
        <div className='bg-black text-white w-full mb-10  mx-auto '>
    <div className='h-[80px] bg-black'></div>
 <div className=' text-center ' style={{
                color: "#d3d3d3",}} >
    <h1 className='impact text-5xl text-left px-4'>IN NUMBERS WE TRUST </h1>

 </div>

 <div className='flex flex-col px-4 grid grid-cols-2 mt-10'>

 <div className='text-white flex flex-col '>
  <h1 className='impact text-[40px]'>7000 
    </h1>
    <p className='neue text-[20px]'>Pieces Sold</p>
 </div>
            
 <div className=' text-white flex flex-col'>
  <h1 className='impact text-[40px]'> 50
     </h1>
     <p className='neue text-[20px] '> Brand Collaborations</p>
 </div>
            
 <div className=' text-white flex flex-col mt-5'>
  <h1 className='impact text-[40px]'> 10
    </h1>
     <p className='neue text-[20px] '>Countries</p>
 </div>
            
        </div>
        </div>

  )
}

export default Button