import React from 'react'
import styles from '../../style'
import TextAnim from '../TextAnim'
import Animate from '../Animate'
import Button from '../Button'
import SideAnim from '../SideAnim'


const Second = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
      <div>
      <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>

      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] mx-2   text-white bg-white`}>  
     <h1 className='text-black galgo text-[32px] tracking-wide'> 01. </h1>
     </div> 

<SideAnim>
        {/* header */}
   
        <h2 className={`${styles.flexStart} leading-relaxed neue-medium text-[32px] pbox track   text-black text-8xl tracking-wide mt-20` }>
        All our services are customized to meet the specific needs of each individual and 
   organization.
        </h2>
        {/* header */}
        </SideAnim>     
        <p className='text-[24px] neue-thin mt-5 p-2 '>
        We believe that the one-size-fits-all approaches do not work, and we 
will take the time to understand the specific goals and challenges of each client before 
developing a tailored plan.  
        </p>

  
      </div>

   
      </div>


    </section>
  )
}

export default Second