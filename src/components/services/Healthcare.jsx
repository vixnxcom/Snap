import React from 'react'
import styles from '../../style'
import SideAnim from '../SideAnim'

const Healthcare = () => {
  return (
<section className={`${styles.paddingX} flex flex-col`}>
    <div >
        <div className='gif h-[400px] '>

      <SideAnim>
    <h1 className='neue-medium text-[32px] text-black mb-4 py-36 purple   '>
     Consulting  
     </h1>
     </SideAnim>  
      
     </div>
   

     <p className='neue-thin text-[24px] text-black w-[400px] md:w-[900px] tracking-wide p-6' >
     Strategic guidance and support for students professionals, an  d
organizations to enhance leadership capabilities & excellence, drive organizational 
effectiveness, navigate challenges, and optimize operations.
     </p>
    </div>
</section>
  )
}

export default Healthcare