import React from 'react'
import styles from '../../style'
import TextAnim from '../TextAnim'
import SideAnim from '../SideAnim'


const Secondp = () => {
  return (
   <section>
    <div className=' md:w-[800px] xs:w-[470px] p-6 text-white  track'>

   <SideAnim>
    <h2 className='galgo text-8xl tracking-wide text-start mt-10'>
    Our mission is to empower you
        </h2>
    </SideAnim>
    
        <p className='text-[24px] neue-thin mt-5  mr-2'>
         to surpass your goals, conquer challenges, and lead with
        confidence. Together, let's embark on a transformative journey towards greatness.
        </p>
    </div>
   </section>
  )
}

export default Secondp