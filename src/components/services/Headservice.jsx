import React from 'react'
import styles from '../../style'
import { service } from '../../assets'

const Headservice = () => {
  return (
   <section className={`${styles.paddingX} `}>
    <div >
        {/* head text */}
        <div className=''>
            <h1 className='galgo text-8xl text-white'>
                Our Services
            </h1>
        </div>
        <div className='w-[80%] mx-20'>
            <img src={service} alt="" />
        </div>
        {/* head text */}
    </div>
   </section>
  )
}

export default Headservice