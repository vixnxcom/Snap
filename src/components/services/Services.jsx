import React from 'react'
import Headservice from './Headservice'
import styles from '../../style'
import Coaching from './Coaching'

const Services = () => {
  return (
    <section className='w-full overflow-hidden'>
      
      <div className={`${styles.flexStart} bg-gray-950 h-[600px] `}>
        <div className={`${styles.boxWidth} mt-36`}>
        < Headservice />
    </div>
    </div>

       <div className={`${styles.paddingX}`}>
       <div className={`${styles.boxWidth}`}>
        <Coaching />
       </div>
       </div>


    </section>
  )
}

export default Services