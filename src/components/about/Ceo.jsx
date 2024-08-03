import React from 'react'
import styles from '../../style'
import { gif, lamp } from '../../assets'
import SideAnim from '../SideAnim'
import Animate from '../Animate'
import TextAnim from '../TextAnim'

const Ceo = () => {
  return (
    <section className={`${styles.flexCenter} mb-5 mt-10 mx-auto place-items-center text-center flex flex-col`}>
     <div className='p-6 md:w-[800px] xs:w-[470px] '>
     
      <SideAnim>
     <h1 className='neue-medium text-[32px] text-start mt-2 tracking-wide '>Through Ahmedcine's leadership at Champions Global-Consulting,</h1> 
     </SideAnim>

        <p className=' neue-thin text-[24px] text-start tracking-wide mb-4'><br /> He seeks to inspire 
       individuals and organizations to reach their full potential. With a focus on excellence, 
        empowerment, and innovation,  </p> 

        <div>


    <img src={lamp} alt="" className='' />
   

   </div>
        <p className=' neue-thin text-[24px] text-start tracking-wide mt-5'>  Ahmedcine embodies our firm's commitment to guiding our 
        clients towards success in their respective fields. </p> 
      
        </div>
        {/* second para/////////////////////////////////////////// */}
  
     
    </section>
  )
}

export default Ceo