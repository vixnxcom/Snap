import React from 'react'
import styles from '../../style'
import SideAnim from '../SideAnim'

const Newcard = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} text-start `}>
         <div className='bg-white h-[8px] '></div>
    <div className=''>
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track bg-white  '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  text-white bg-purple`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 06. </h1>
     </div> 

     <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] tracking-wide mt-5 mx-2 purple` }>
   We believe in the importance of diversity and inclusion.
    </h2>
    </SideAnim>    
        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-black  '>
    Our team is made up of 
individuals with a wide range of backgrounds and experiences, and we welcome 
clients from all walks of life.
    </p>
     {/* heading */}

    </div> 
    </div> 
   
    {/* card 6  ///////////////////////////////////////////    */}   
</section>
  )
}

export default Newcard