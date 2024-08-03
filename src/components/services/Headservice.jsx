import React from 'react'
import styles from '../../style'
import { service } from '../../assets'
import Animate from '../Animate'

const Headservice = () => {
  return (
   <section className={`${styles.paddingX} `}>
    <div >
        {/* head text */}
        <div className=''>
           <Animate>
            <h1 className='galgo text-8xl text-black '>
                Our Services
            </h1>
            </Animate>
        </div>
        <div className='w-[80%] mx-20 mt-10'>
            <img src={service} alt="" />
        </div>
        {/* head text */}
    </div>
   </section>
  )
}

export default Headservice