import React from 'react'
import styles from '../../style'
import Button from '../Button'
import {  intro,  } from '../../assets'
import Animate from '../Animate'

const SecoPara = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
       <div>
      <div className=' md:w-[800px] xs:w-[470px] pbox track'>

        {/* header */}
   <div className='max-w-[800px] p-2'>
    <img src={intro} alt="" />
   </div>
        {/* header */}
      
 <div className='p-6'>
        <p className='text-[24px] neue-thin  p-2'>
       
      solutions that inspire growth, drive success, and foster sustainable change.

        </p>
     </div>
      </div>
     <div className=' mb-5'>

      <Animate>
      <Button />
      </Animate>
      
     </div>
      </div>
    
    </section>
  )
}

export default SecoPara