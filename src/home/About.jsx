import React from 'react'
import { run } from '../assets'

const About = () => {
  return (
    <div className='max-w-lg '>
         <div className=' text-center px-4 md:px-16' style={{
                color: "#000000",}} >
    <h1 className='impact text-5xl text-left'>ABOUT US </h1>

 </div>
    <div className='px-4 md:px-16 mb-10 mt-10'>

      <p className='neue text-[24px] max-w-[370px] md:max-w-6xl'>
        <span className='text-black text-5xl impact'> SNUK </span>
        was born from a simple idea: the future should be visible today.
We believe eyewear is more than just something you wear on your face.
{/* It is a tool for expression.
It is a window into innovation. */}
It is a bridge between technology and human creativity.
At   <span className='text-black text-5xl impact'> SNUK 
  </span>, we design eyewear that feels like it belongs in tomorrow.
      </p>

    </div>
   
    </div>
 
  )
}

export default About
