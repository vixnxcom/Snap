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
import Stat from '../home/Stat'
import Animate from '../Animate'

const About = () => {
  return (
    <section>
    <div className='w-full overflow-hidden ' >
    
      <div className='bg-aboutt  h-[480px] ' >
      <Head />
    </div>



 
    <div className='bg-gray-950 '>
      <Secondp />
    </div>

    <div className='bg-gray-950'>
      <div className='h-[40px] bg-gray-950'></div>
      <Stat />
      <div className='h-[40px] bg-gray-950'></div>
    </div>



     <div className='bg-gray-950 h-[470px] '>
     <div className='bg-box'>
      <Box />
     </div>
     </div>



        <div className='bg-gray-950'>
        <div className=''>
          
       <Animate>
    <h2 className={`${styles.flexCenter} galgo text-8xl text-white tracking-wide` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mb-16'></span>
      Guiding Principles
        </h2>
        </Animate>    
      

        </div>
        <div className='bg-gray-950 h-[40px]'></div>
        <div className='bg-white '>
       <Guiding />
       </div>
    
        </div>
   
      {/* image */}
      {/* <div className='bg-gray-950 h-[40px] '></div> */}

    
      <div className='bg-gray-950 p-2 '>
      <Animate>
        <img src={emp} alt="" className='md:w-[50%] w-[96%] mx-auto mt-20 mb-20'/>
        </Animate>
       </div>
       
       
       {/* image */}

       <div className='bg-gray-950'>
       <Guidingtwo />
       </div>
     </div>
     
     
     <div className='bg-curvee '>    
        <Cardtwo />    
       </div>
   
    

        <div className='bg-gray-950 mt-36'></div>
       <div className='mt-36 bg-gray-950 mb-36'>
        <ParaGuid />
       </div>

     <div className='w-full bg-curvyoffice '>
     {/* <div className='bg-purple  h-[2px]'></div> */}
       <div className='bg-office '>
       <div className='mt-36 max-w-md mx-auto'>
        <Vision />
       </div>
       </div>

       <div className='bg-yelloww  h-[128px]'></div>


     <div className='bg-mission'>
       <div className='mt-20 max-w-md mx-auto '>
        < Mission />
       </div>
       </div>
      {/* <div className='bg-yelloww  h-[40px]'></div> */}
       </div>

       <div className=''>
        <Ceo />
       </div>
    

       <div className='bg-purple h-[580px] '>
        <div className='mt-20'>
          <End />
        </div>
       </div>
     </section>
  )
}

export default About