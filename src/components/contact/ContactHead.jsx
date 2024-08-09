import React from 'react'
import styles from '../../style'
import Animate from '../Animate'

const ContactHead = () => {
  return (
    <section className={`${styles.paddingX} mt-36 `}>
    <div >
        {/* head text */}
        <div className='mt-20'>
           <Animate>
            <h1 className='galgo text-8xl text-white '>
                Contact Us
            </h1>
            </Animate>
        </div>
        {/* <div className='w-[80%] mx-20 mt-10'>
            <img src={service} alt="" />
        </div> */}
        {/* head text */}
    </div>
   </section>
  )
}

export default ContactHead
