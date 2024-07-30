import React from 'react'
import styles from '../../style'
import Button from '../Button'
import { book, gif } from '../../assets'

const SecoPara = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
       <div>
      <div className=' md:w-[800px] xs:w-[470px] pbox track'>

        {/* header */}
   
        {/* header */}
          <img src={book} alt="" className='w-full h-[400px] mx-auto ' />
 <div className='p-6'>
        <p className='text-[24px] neue-thin  p-2'>
       
      solutions that inspire growth, drive success, and foster sustainable change.

        </p>
     </div>
      </div>
     <div className=' mb-5'>
      <Button />
     </div>
      </div>
    
    </section>
  )
}

export default SecoPara