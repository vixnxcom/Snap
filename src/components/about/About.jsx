import React from 'react'
import Head from './Head'
import Secondp from './Secondp'
import { Box } from './Box'
import styles from '../../style'
import Guiding from './Guiding'
import { brand, emp } from '../../assets'
import Guidingtwo from './Guidingtwo'
import Cardtwo from './Cardtwo'
import Guidingthree from './Guidingthree'
import ParaGuid from './ParaGuid'
import Mission from './Mission'
import Vision from './Vision'
import Ceo from './Ceo'
import End from './End'

const About = () => {
  return (
    <section>
    <div className='w-full overflow-hidden ' >
    
      <div className='bg-aboutt  h-[480px] ' >
      <Head />
    </div>

    <div className='bg-gray-950'>
      <Secondp />
    </div>

     <div className='bg-gray-950 h-[470px] '>
     <div className='bg-box'>
      <Box />
     </div>
     </div>



        <div className='bg-gray-950'>
        <div className=''>
    
    <h2 className={`${styles.flexCenter} galgo text-8xl text-white tracking-wide p-8` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span>
      Guiding Principles
        </h2>
        
      

        </div>
        <div className='bg-gray-950 h-[40px]'></div>
        <div className='bg-curvy '>
       <Guiding />
       </div>
    
        </div>
   
      {/* image */}
      <div className='bg-gray-950 h-[40px] '></div>

      <div className='bg-gray-950 p-2 '>
        <img src={emp} alt="" className='md:w-[50%] w-[96%] mx-auto mt-20 mb-20'/>
       </div>
       {/* image */}

       <div className='bg-gray-950'>
       <Guidingtwo />
       </div>
     </div>
     
     
     <div className='bg-curvee '>
      
        <Cardtwo />
        
       </div>
   
    

        <div className='bg-white mt-36'></div>
       <div className='mt-36 bg-gray-950 mb-36'>
        <ParaGuid />
       </div>

       {/* <div className='bg-white h-[240px]'></div> */}
       <div className='bg-office'>
       <div className='mt-36 max-w-md mx-auto'>
        <Vision />
       </div>
       </div>


     <div className='bg-mission'>
       <div className='mt-20 max-w-md mx-auto '>
        < Mission />
       </div>
       </div>

       <div className=''>
        <Ceo />
       </div>
    

       <div className='bg-purple h-[600px] '>
        <div className='mt-20'>
          <End />
        </div>
       </div>
     </section>
  )
}

export default About