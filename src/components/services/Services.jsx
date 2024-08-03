import React from 'react'
import Headservice from './Headservice'
import styles from '../../style'
import Coaching from './Coaching'
import Life from './Life'
import Career from './Career'
import Motive from './Motive'
import Mindset from './Mindset'
import Exec from './Exec'
import Mentoring from './Mentoring'
import One from './One'
import Group from './Group'
import Theme from './Theme'
import Speaking from './Speaking'
import Inspire from './Inspire'
import Mtalks from './Mtalks'
import Consulting from './Consulting'
import Healthcare from './Healthcare'
import { book, gif } from '../../assets'
import Endservice from './Endservice'
import Questions from './Questions'
import Loader from '../home/Loader'
import Animate from '../Animate'

const Services = () => {
  return (
    <section className='w-full overflow-hidden bg-gray-950'>
      
      <div className={`${styles.flexStart} bg-bookservice h-[500px] md:h-[800px] mt-28 `}>
        <div className={`${styles.boxWidth} mt-10 mb-10`}>
        < Headservice />
    </div>
    </div>
   

     <div className='bg-purple h-[4px]'></div> 

       <div className={`${styles.paddingX} bg-gray-950 mt-20`}>
       <div className={`${styles.boxWidth} `}>
        <Coaching />
       </div>
       </div>
 {/* col start */}
 <div className='md:grid md:grid-cols-2 md:gap-4'>

        <div className='bg-gray-950 mt-10'>
          <Life />
        </div>
 
        <div className='bg-gray-950 mt-10'>
          <Career />
        </div>

        <div className='bg-gray-950 mt-10'>
          <Motive />
        </div>

        <div className='bg-gray-950 mt-10'>
          <Mindset />
        </div>

        <div className='bg-gray-950 mt-10'>
          <Exec />
      
        </div>

</div>
{/* col end */}   

        <div className={`${styles.paddingX} bg-white mt-20`}>
       
       <div className={`${styles.boxWidth} `}>
        <Mentoring />
       </div>
       </div>

  {/* col start */}
 <div className='sm:grid md:grid-cols-2 md:gap-4'>

       <div className='bg-white '>
        <div className='bg-white h-[40px]'></div>
          <One />
        </div>

       <div className='bg-white '>
        <div className='bg-white h-[40px]'></div>
          <Group />
        </div>

       <div className='bg-white  '>
        <div className='bg-white h-[40px]'></div>
          <Theme />
        </div>
        

 </div>
 {/* col end */}   
 <div className='bg-white h-[40px] md:hidden'></div>

        <div className={`${styles.paddingX} bg-gray-950 mt-20`}>
   
       <div className={`${styles.boxWidth} `}>
        <Speaking />
       </div>
       </div>

  {/* col start */}
  <div className='md:grid md:grid-cols-2 md:gap-4'>
       <div className='mt-10 '>
    
          <Inspire />
        </div>

       <div className='mt-10 mb-20'>
    
          <Mtalks />
        </div>

 </div>
 {/* col end */}   


        <div className={`${styles.paddingX} bg-white mt-20`}>
       <div className={`${styles.boxWidth} `}>
        <Consulting />
       </div>
       </div>



       <div className='bg-white '>
        
        <div className='bg-white h-[40px]'></div>
          <Healthcare/>
        </div>
    
   <div className='bg-white h-[40px]'></div>
        <div className='bg-each'>
       
        <Endservice />
       </div>

   {/* <div className='bg-white h-[40px]'></div> */}
        <div className='bg-purple h-[480px]'>
       
        <Questions />
       </div>

      
    </section>
  )
}

export default Services