import React from 'react'
import styles from '../../style'
import { arrow, logo } from '../../assets'
import { Link } from 'react-router-dom'



const Hero = () => {
   return (
     <section className={`${styles.flexStart} `} >
       <div className='mt-20'>
 
       <h1 className=' mt-20 shadow-text text-start text-white' >
         <div className='mb-5 galgo tracking-wide text-7xl'>Stimulating the  <span className='purple'>Mind</span> </div>
         <div className='mb-5 galgo tracking-wide text-7xl '>and <span className='purple'> Unraveling difficult</span> </div>
         <div className='mb-5 galgo tracking-wide text-7xl'>Thought Processes </div>
      </h1>

{/* central div */}
<div className='md:flex md:flex-row md:gap-16'>
      <div className='bg-book w-[320px] h-[auto] rounded-[12px]  mt-5' >
       <div className='flex flex-row text-center mt-10 bg-video w-[300px] h-[140px]'>
       <div className='text-[24px] mx-8  mt-5 neue-thin '>

       </div>
       </div>    
          </div> 

      <button className=' w-[320px]  arrow  rounded-[12px] bg-arrow mt-8 text-white' >
       <Link to ='/about' className='flex flex-row text-center md:mt-4  w-[300px] h-[140px]'>
       <p className='text-[24px] mx-8  mt-5 neue-thin  text-shadow'>Book a Service</p>
        <img src={arrow} alt="" className='object contain w-[54px] h-[51px] mx-4 mt-4'/>
       </Link>    
          </button> 

 </div>         
    </div>
    </section>
  )
}

export default Hero