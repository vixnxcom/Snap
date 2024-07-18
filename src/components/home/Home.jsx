import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

import Carousel from './Carousel'
import CarouselCard from './CarouselCard'
import Goals from './Goals'
import GoalList from './GoalList'


const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-purple' >
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
  <SecoPara />
</div> 
    </div>
  

 <div className='bg-white mt-10 mb-10'>
 <Goals />
 </div>

 <div className='h-[400px]'>
  <GoalList />
 </div>

    </div>
  )
}

export default Home