import React from 'react'
import { arrow, arrowhite, arroww } from '../../assets';
import styles from '../../style';

const Phone = () => {

    const emailAddress = 'championsglobalconsulting@gmail.com';
    // const phoneNumber = '08084683622';
   



  return (
    <section className={`${styles.paddingX}`}>
        <div>
            {/* phone */}
            <div className='text-white  w-[300px] text-[28px] tracking-wide mt-10 '>
                <p className='neue-medium text-[32px]'>For Inquires call</p>
                <h1 className='neue-medium text-[28px] mt-5'>
                <a href='tel:+234808468622'>+234-8084683622<img src={arrowhite} alt="" className='w-[8%] mt-1' /> </a> 
                </h1>
            </div>
            {/* phone */}
            {/* Email */}
            <div className='text-white w-[300px] text-[28px] tracking-wide mt-10'>
                <p className='neue-medium text-[32px] '>Email us</p>
                <h1 className='neue-thin text-[20px] mt-5'>
                <a href={`mailto:${emailAddress}`} >{emailAddress}<img src={arrowhite} alt="" className='w-[8%] mt-1' /> </a>
                </h1>
            </div>
            {/* phone */}
        </div>
    </section>
  )
}

export default Phone
