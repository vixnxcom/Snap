import React from 'react'
import { Link } from 'react-router-dom'
import { arrowhite, guide } from '../../assets'
import ContactHead from './ContactHead'
import Phone from './Phone'
import styles from '../../style'

const Contact = () => {
  return (
    <section className='w-full  overflow-hidden bg-gray-950'>

        <div className='w-[400px] bg-gray-950'>
           
        <div className={`${styles.flexStart}   `}>
        <div className={`${styles.boxWidth} `}>
        < ContactHead />
    </div>
    </div>
        </div>

        <div>
       <img src={guide} alt="" />
        </div>

        <div>
            <Phone />
        </div>
        
    </section>
  )
}

export default Contact