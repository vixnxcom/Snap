import React from 'react'
import styles from './style'
import { poster } from './assets'
import Ticket from './components/contact/Ticket'
import Steps from './components/contact/Steps'
import Class from './components/contact/Class'
import Yt from './components/contact/Yt'

const Register = () => {
  return (
    <section className={`${styles.flexStart} bg-purple`}>
      <div>
        {/* Header Spacing */}
        <div className='bg-purple h-[120px]'></div>
        
        {/* Image */}
        <div className='p-1'>
          <img src={poster} alt="Bootcamp Poster" />
        </div>
        
        {/* Content Container */}
        <div className={`${styles.flexCenter} flex flex-col mx-auto md:w-[800px] sm:w-[470px]`}>
          
          {/* Heading */}
          <div className='mt-5 py-4 w-[300px] flex flex-row mx-auto'>
            <div className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mt-3'></div>
            <h1 className='galgo text-6xl text-white tracking-wide'>
              A 3 Week Online Bootcamp Training!
            </h1>
          </div>

          {/* YouTube Video */}
          <div className=' mt-5'>
            <Yt />
          </div>

          {/* Paragraphs */}
          <div className='mt-5 p-6 max-w-sm w-[380px]'>
            <p className='neue-thin text-[28px] text-white tracking-wide'>
              For youths and students in senior secondary classes
            </p>
          </div>

          <div className='p-6 w-[380px]'>
            <p className='neue-thin text-[28px] text-white tracking-wide'>
              <span className='underline tracking-wide'>6pm - 7pm</span> daily from the
            </p>
          </div>

          <div className='p-6 w-[380px]'>
            <p className='neue-thin text-[28px] text-white tracking-wide'>
              <span className='underline tracking-wide'>19th of August</span> to the
            </p>
          </div>

          <div className='p-6 w-[380px]'>
            <p className='neue-thin text-[28px] text-white tracking-wide'>
              <span className='underline tracking-wide'>6th of September 2024</span>
            </p>
          </div>

          {/* Steps Component */}
          <div className='mt-5'>
            <Steps />
          </div>

          {/* Ticket Section */}
          <div className='mt-5 p-4 w-[380px]'>
            <div className='flex items-center'>
              <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
              <p className='neue-medium text-[24px] text-white tracking-wide'>
                Buy your tickets here
              </p>
            </div>
            <Ticket />
          </div>

          {/* Class Section */}
          <div className='mt-5 p-4 w-[380px]'>
            <div className='flex items-center'>
              <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
              <p className='neue-medium text-[24px] text-white tracking-wide'>
                Join our class here
              </p>
            </div>
            <Class />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Register
