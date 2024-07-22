import React from 'react'
import styles from '../../style'
import Button from '../Button'

const SecoPara = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
       <div>
      <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>

      

        {/* header */}
        <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start mt-10` }>
        we are committed to delivering tailored
        </h2>
        {/* header */}
        <div className='mx-auto '>
        <div className='plates '>
       <p className='textt'>crazy</p>
        </div>
        </div>

        <p className='text-[24px] neue-thin mt-5 p-2'>
       
      solutions that inspire growth, drive success, and foster sustainable change.

        </p>
      
      </div>
     <div className=' mb-5'>
      <Button />
     </div>
      </div>
    
    </section>
  )
}

export default SecoPara