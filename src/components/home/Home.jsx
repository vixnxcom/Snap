import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

const Home = () => {
  return (
    <div className='bg-hero' >
    <div >
      <Welcome />
    </div>
    
    <div className='bg-purple '>
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