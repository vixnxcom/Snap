import React from 'react'
import styles from '../../style'

const Head = () => {
  return (
    <section className='h-[420px] flex flex-col p-8 mt-20 bg-png '>
   
      <div className='mt-20 mx-auto'>
      <h2 className={`${styles.flexCenter} galgo text-8xl text-white tracking-wide mt-10` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
       About Us
        </h2>
    </div>

    <div className=''>
    <p className={`${styles.flexCenter} galgo tracking-wide text-5xl text-white w-[470px]`}>
      <span className='yellow mr-4'> Motto: </span> Unleashing Potential, <br /> Achieving Greatness.
        </p>
    </div>
    


    </section>
  )
}

export default Head