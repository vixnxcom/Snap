import React from 'react'
import styles from '../../style'
import Animate from '../Animate'

const Endservice = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col bg-each`}>
        <div className={`${styles.flexCenter} mx-auto flex flex-col `}>
        <Animate>
        <h1 className='neue-medium text-[28px]  text-white  align-items-center text-center  '>
        Each of our services is  <span className='galgo yellow text-7xl tracking-wide'> <br /> crafted</span>
     </h1>
     </Animate>
     <Animate>
     <p className={`${styles.flexCenter} flex flex-col neue-medium text-[28px]  text-white w-[400px] tracking-wide  text-center mx-auto`}>
     with a <span className='galgo yellow text-7xl tracking-wide'>focus</span>  on empowering individuals and organizations to 
reach their
     </p>
     </Animate>

     <Animate>
     <p className={`${styles.flexCenter} flex flex-col neue-medium text-[28px]  text-white w-[400px] tracking-wide  text-center mx-auto`}>
     <span className='galgo yellow text-7xl tracking-wide text-start'> full potential,</span>   overcome obstacles, and thrive in their respective endeavours.

     </p>
     </Animate>
        </div>
    </section>
  )
}

export default Endservice