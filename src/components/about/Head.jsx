import React from 'react'
import styles from '../../style'
import TextAnim from '../TextAnim'
import Animate from '../Animate'

const Head = () => {
  return (
    <section className='h-[480px] flex flex-col  bg-welcomee  '>
   
      <div className='mt-36 mx-auto '>
        <Animate>
      <h2 className={`${styles.flexCenter} galgo text-8xl text-shadoww tracking-wide mt-10 text-white` }>
       {/* <span className='rounded-[16px] h-[16px] w-[16px] bg-white text-shadow mr-4'></span> */}
       About Us
        </h2>
        </Animate>  
    </div>

    <div className='mt-10'>

     <Animate>
    <p className={`${styles.flexCenter} neue-medium tracking-wide  text-2xl text-white w-[470px] text-shadoww`}>
      <span className='yellow mr-2 '> Motto:  </span> Unleashing Potential, <br /> Achieving Greatness.
    </p>
    </Animate> 
    </div>
    


    </section>
  )
}

export default Head