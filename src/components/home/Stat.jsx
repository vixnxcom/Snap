import React from 'react'
import styles from '../../style'

const Stat = () => {
  return (
    <section className={`${styles.flexCenter} w-[90vw] h-[auto] mx-auto bg-purple shadow-lg rounded-[12px] `}>
        <div className={`${styles.flexCenter} flex flex-row gap-12 p-6`}>
            {/* first card */}
            <div>
                <h1 className='galgo tracking-wide text-8xl text-white'>100%</h1>
                <p className='neue-medium text-[24px] text-white mt-2'>Commitment</p>
                <p className='neue-thin text-[16px] text-white mt-2'>to our job</p>
            </div>
            {/* first card */}
            {/* first card */}
            <div>
                <h1 className='galgo tracking-wide text-8xl text-white'>100%</h1>
                <p className='neue-medium text-[24px] text-white mt-2'>Satisfactory Rate</p>
                <p className='neue-thin text-[16px] text-white mt-2'>to clients</p>
            </div>
            {/* first card */}
        </div>
    </section>
  )
}

export default Stat