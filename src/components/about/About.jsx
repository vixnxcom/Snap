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
import Newcard from './Newcard'

const About = () => {
  return (
    <section>
    <div className='w-full overflow-hidden ' >
    
    
      <div className='bg-aboutt  h-[480px] ' >
    
      <Head />
    </div>
  



 
    <div className='bg-gray-950 '>
      <div className={`${styles.boxWidth} mx-auto`}>
      <Secondp />
    </div>
    </div>

  
    <div className='bg-gray-950 mx-auto'>
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
        <div className={`${styles.boxWidth} mx-auto`}>
      <Animate>
        <img src={emp} alt="" className='md:w-[50%] w-[96%] mx-auto mt-20 mb-20'/>
        </Animate>
       </div>
       </div>
       
       
       {/* image */}

       <div className='bg-gray-950'>
       <Guidingtwo />
       </div>
     </div>
     
     <div className='bg-white'>
<Newcard/>
     </div>

     <div className='bg-curvee '>    
        <Cardtwo />    
       </div>
   
    

        <div className='bg-white mt-20'></div>
        
       <div className='mt-20 bg-white mb-20'>
        <div className={`${styles.boxWidth} mx-auto`}>
        <ParaGuid />
       </div>
       </div>

     <div className='w-full bg-curvyoffice '>
 
       <div className=''>
       <div className='mt-20 max-w-lg mx-auto'>

        <Vision />
       </div>
       </div>

       <div className='bg-yelloww  h-[80px] w-full'></div>
     <div className='bg-mission'>
       <div className='mt-20  max-w-lg mx-auto '>
        < Mission />
       </div>
       </div>
      {/* <div className='bg-yelloww  h-[40px]'></div> */}
       </div>

       <div className=''>
        <Ceo />
       </div>
    
       
       <div className='bg-purple h-[auto] md:h-[400px] mx-auto'>
        <div className={`${styles.flexCenter} mt-16 `}>
          <End />
        </div>
       </div>
     </section>
  )
}

export default About