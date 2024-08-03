import React from 'react'
import styles from '../../style'
import SideAnim from '../SideAnim'


const End = () => {
  return (
    <section className={`${styles.flexCenter} mb-20  mx-auto place-items-center text-center flex flex-col`} >
     <div className=' md:w-[800px] xs:w-[470px] p-6  track end mt-10 mb-10 text-white'>

<SideAnim>
  <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start ` }>
Join us as we embark
</h2>
</SideAnim>

<SideAnim>
<p className='text-[24px] neue-thin  p-2 mr-2 text-start'>
on a transformative journey under Ahmedcine's guidance, where every 
step forward is a testament to the power of empowerment and leadership.
</p>
</SideAnim>

</div> 
    </section>
  )
}

export default End