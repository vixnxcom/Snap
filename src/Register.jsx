import React from 'react'
import styles from './style'
import { poster } from './assets'
import Ticket from './components/contact/Ticket'
import Steps from './components/contact/Steps'
import Class from './components/contact/Class'
import Yt from './components/contact/Yt'

const Register = () => {
  return (
   <section className={`${styles.flexStart}    bg-purple`}>
    
     <div>
     <div className='bg-purple h-[120px]'></div>
        {/* image////////// */}
        <div className='p-1'>
          <img src={poster} alt="" />
        </div>
        {/* image////////// */}
        <div className={`${styles.flexCenter} flex flex-col mx-auto md:w-[800px] sm:w-[470px]`}>
        {/* heading */}
        <div className='mt-5 p-6 md:max-w-[lg] w-[380px] flex flex-row '>  
        <div className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mt-3 '></div>
          <h1 className='galgo text-6xl text-white tracking-wide '>
          
           A 3 weeks online Bootcamp Training!
          </h1>
        </div>

     <div>
      <Yt />
     </div>

        {/* paragraph */}
       <div className='mt-5 p-6 max-w-[sm] w-[380px] '>
       <p className='neue-thin text-[28px] text-white tracking-wide'>
          For youths and students in senior secondary classes
        </p>
       </div>
        {/* paragraph */}
        {/* paragraph */}
        <div className=''>
       <div className='mt-5 p-6 max-w-[lg] w-[300px]  '>
       <p className='neue-thin text-[28px] text-white tracking-wide'>
        <span className=' underline  tracking-wide'>6pm - 7pm  </span>
             daily from the </p>
       </div>
       <div className='p-6 max-w-[lg] w-[380px]  '>
       <p className='neue-thin text-[28px] text-white tracking-wide'>
    
            <span className=' underline tracking-wide  '> 19th of August </span>  to the 
        </p>
       </div>
       <div className='p-6 max-w-[lg] w-[380px]  '>
       <p className='neue-thin text-[28px] text-white tracking-wide'>
    
      <span className=' underline tracking-wide'> 6th of September 2024 </span>  
        </p>
       </div>
       </div>
        {/* paragraph */}
       {/* <div className='p-4 max-w-[lg]   '>
       <p className='neue-thin text-[28px] text-white tracking-wide'>
    
       for Inquires contact 
       <span className=' underline tracking-wide  '> +234-08084683622  </span>
        </p>
       </div> */}
        {/* paragraph */}
     
    {/* button */} 
    <div>
      <Steps />
    </div>
    <div className='mt-5 p-6  '>
    <p className='neue-medium text-[24px] text-white tracking-wide flex flex-row w-[380px]  '>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mt-3 '></span>Buy your tickets here</p> 
    <Ticket />
    </div>
    <div className='mt-5 p-6  '>
    <p className='neue-medium text-[24px] text-white tracking-wide flex flex-row w-[380px]'>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mt-3 '></span>Join our class here</p>
    <Class/>
    </div>


    {/* button */}
     </div>

     </div>
   </section>
  )
}

export default Register