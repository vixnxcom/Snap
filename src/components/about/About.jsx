import React from 'react'
import Head from './Head'
import Secondp from './Secondp'
import { Box } from './Box'

const About = () => {
  return (
    <div className='w-full overflow-hidden bg-black' >
      <div className='bg-black h-[400px]' >
      <Head />
    </div>
    <div className='bg-white'>
      <Secondp />
    </div>

     <div className='bg-white h-[500px] '>
     <div className='bg-box'>
      <Box />
     </div>
     </div>

     </div>
  )
}

export default About