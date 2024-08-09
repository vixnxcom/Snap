import React from 'react'
import styles from './style'
import { poster } from './assets'
import Ticket from './components/contact/Ticket'

const Register = () => {
  return (
   <section className={`${styles.flexCenter} bg-white`}>
    
     <div>
     <div className='bg-purple h-[120px]'></div>
        {/* image////////// */}
        <div className='p-1'>
          <img src={poster} alt="" />
        </div>
        {/* image////////// */}
        <div className='bg-purple'>
        {/* heading */}
        <div className='mt-5 p-4 sm:max-w-[lg]'>
          <h1 className='galgo text-6xl text-white tracking-wide '>
           A 3 weeks online Bootcamp Training!
          </h1>
        </div>

        {/* paragraph */}
       <div className='mt-5 p-4 max-w-[sm]'>
       <p className='neue-medium text-[28px] text-white tracking-wide'>
          For youths and students in senior secondary classes
        </p>
       </div>
        {/* paragraph */}
        {/* paragraph */}
        <div className='bg-white'>
       <div className='mt-5 p-4 max-w-[lg] w-[390px]  '>
       <p className='neue-medium text-[32px] text-black tracking-wide'>
        <span className='neue-medium font-bold  tracking-wide'>6pm - 7pm  </span>
             daily from the </p>
       </div>
       <div className='p-4 max-w-[lg] w-[390px]  '>
       <p className='neue-medium text-[32px] text-black tracking-wide'>
    
            <span className='neue-medium font-bold tracking-wide  '> 19th of August </span>  to the 
        </p>
       </div>
       <div className='p-4 max-w-[lg] w-[390px]  '>
       <p className='neue-medium text-[32px] text-black tracking-wide'>
    
      <span className='neue-medium font-bold tracking-wide'> 6th of September 2024 </span>  
        </p>
       </div>
       </div>
        {/* paragraph */}
       <div className='p-4 max-w-[lg]   '>
       <p className='neue-medium text-[28px] text-white tracking-wide'>
    
       for Inquires contact
       <span className='neue-medium font-bold tracking-wide  '> +234-08084683622  </span>
        </p>
       </div>
        {/* paragraph */}
     
    {/* button */} 
    <div className='mt-5 p-4'>
    <p className='neue-medium text-[28px] text-white tracking-wide'>Buy your tickets</p> 
    <Ticket />
    </div>
    {/* button */}
     </div>

     </div>
   </section>
  )
}

export default Register