import React from 'react'
import styles from '../../style'
import { ppl } from '../../assets'

const Mtalks = () => {
  return (
 <section className={`${styles.flexCenter} max-w-[520px] mx-auto `}>
<div className='w-[96vw] bg-yellow rounded-[48px] '>
    <div className='h-[200px]'>
    <img src={ppl} alt="" />
    </div>
    <div className={`${styles.flexCenter} flex flex-col p-4`}>
        <h1 className='galgo text-black text-7xl tracking wide'> Inspirational Talks </h1>
        <p className='text-black tracking-wide text-[24px] neue-medium mt-2 mb-5'>Compelling narratives and insights to inspire individuals to embrace 
change, overcome challenges, and pursue their dreams.

</p>
    </div>
      
</div>
 </section>
  )
}

export default Mtalks