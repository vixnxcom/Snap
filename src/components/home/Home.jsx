import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-purple' >
    <div className='bg-hero' >
      <Welcome />
    </div>
    
    <div className=' '>
    {/* <div className='bg-curve p-2 z-[999]'>

    </div> */}
 <div className='bg-curve '>
  <Intro />
</div> 

 <div className='bg-intro mt-5'>
  <SecoPara />
</div> 
    </div>
   
    </div>
  )
}

export default Home