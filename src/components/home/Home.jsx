import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

import Carousel from './Carousel'
import CarouselCard from './CarouselCard'
import Goals from './Goals'
import GoalList from './GoalList'
import Parallaximg from './Parralaximg'
import styles from '../../style'
import Team from './Team'
import Ahmed from './Ahmed'
import Kazeem from './Kazeem'
import Stat from './Stat'


const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-purple' >

      {/* first bg */}

      <div className='bg-purple'>
    <div className='bg-hero bg-heroo' >
      <Welcome />
    </div>

 
    
    <div className=' mt-5'>
    {/* <div className='bg-curve p-2 z-[999]'>

    </div> */}
 <div className='bg-curve '>
  <Intro />
</div> 

 <div className='bg-intro mt-5'>
  <div className={`${styles.flexCenter}  p-6 pbox track `}>
  <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start mt-10 md:w-[800px] xs:w-[470px] ` }>
        we are committed to delivering tailored
        </h2>
  </div>
  <SecoPara />
</div> 
    </div>

    <div className='bg-purple mt-10 '>
 <Parallaximg />
 </div>
    </div>


    {/* second bg */}


 <div className='bg-purple'>
  <div>
    
  <h2 className={`${styles.flexStart} galgo text-8xl text-white tracking-wide mt-20` }>
  <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
      Our Goals
        </h2>
  </div>
  <div>
  <GoalList />
 </div>
 </div>
 
{/* third bg */}
 <div className='bg-purple mx-auto'>


   <div className=''>
    <h2 className={`${styles.flexStart} galgo text-8xl text-white our tracking-wide mt-20 ` }>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span>
        Our Team
     </h2>
    </div>


<div className={`${styles.flexCenter} `}>
 <Kazeem/>
 </div>






</div> 
{/* third bg */}









    </div>
  )
}

export default Home