import React from 'react'
import styles from '../../style'
import { bulb, ppl } from '../../assets'

const Mtalks = () => {
  return (
 <section className={`${styles.flexCenter} max-w-[520px] mx-auto `}>
{/* <div className='max-w-sm w-[98vw]  rounded-[48px] overflow-hidden shadow-xl mb-5 mt-5  z-[60] '>
    <div className='h-[200px]'>
    <img src={bulb} alt="" />
    </div>
    <div className={`${styles.flexCenter} flex flex-col p-4`}>
        <h1 className='galgo purple text-7xl tracking wide'> Inspirational Talks </h1>
        <p className=' tracking-wide text-[24px] neue-medium mt-2 mb-5'>Compelling narratives and insights to inspire individuals to embrace 
change, overcome challenges, and pursue their dreams.

</p>
    </div>
      
</div> */}

<div className='max-w-lg w-[98vw]   overflow-hidden shadow-xl  mb-5 mt-5  z-[60] '>
    <div className='h-[200px]'>
    <img src={bulb} alt="" className='h-[200px] w-full object-cover' />
    </div>
    <div className={`${styles.flexCenter} flex flex-col p-4`}>
        <h1 className='galgo text-white text-7xl tracking wide'> Inspirational Talks</h1>
        <p className='text-white tracking-wide text-[24px] neue-medium mt-2 mb-5'> Compelling narratives and insights to inspire individuals to embrace 
        change, overcome challenges, and pursue their dreams..
</p>
    </div>
      
</div>
 </section>
  )
}

export default Mtalks