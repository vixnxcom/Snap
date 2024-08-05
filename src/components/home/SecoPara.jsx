import React from 'react'
import styles from '../../style'
import Button from '../Button'
import {  intro,  } from '../../assets'
import Animate from '../Animate'
import SideAnim from '../SideAnim'

const SecoPara = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
       <div>
      <div className=' md:w-[800px] xs:w-[470px] pbox track'>

        {/* header */}
   <div className='max-w-[800px] p-2 '>
    <img src={intro} alt="" />
   </div>
        {/* header/////////////////////////////////////////////////////////////////////////////////////// */}
        <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>
     {/* heading */}

     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] border-purple-400  text-white bg-white`}>  
     <h1 className='text-black galgo text-[32px] tracking-wide'> 01. </h1>
     </div> 
     <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] tracking-wide mt-5 mx-2 text-black` }>
   All our services are customized to meet the specific needs of each individual and 
   organization.
        </h2>    
     </SideAnim>
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-black '>
    We believe that the one-size-fits-all approaches do not work, and we 
will take the time to understand the specific goals and challenges of each client before 
developing a tailored plan.
    </p>
     {/* heading */}
    </div> 
        {/* header///////////////////////////////////////////////////////////////////////////////// */}
       

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