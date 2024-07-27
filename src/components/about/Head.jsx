import React from 'react'
import styles from '../../style'

const Head = () => {
  return (
    <section className='h-[480px] flex flex-col  bg-welcomee  '>
   
      <div className='mt-36 mx-auto '>
      <h2 className={`${styles.flexCenter} galgo text-8xl text-shadoww tracking-wide mt-10 text-white` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white text-shadow mr-4'></span>
       About Us
        </h2>
    </div>

    <div className='mt-20'>
    <p className={`${styles.flexCenter} neue-medium tracking-wide text-3xl text-white w-[470px] text-shadoww`}>
      <span className='yellow '> Motto: </span> Unleashing Potential, <br /> Achieving Greatness.
        </p>
    </div>
    


    </section>
  )
}

export default Head