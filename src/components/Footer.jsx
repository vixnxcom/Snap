import React from 'react'
import styles from '../style'


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} mb-20  mx-auto place-items-center text-center flex flex-col`} >
     <div className=' md:w-[800px] xs:w-[470px] p-6  track  mt-20 text-white'>

  <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start mt-10 ` }>
Champions Global Consulting
</h2>
<p className='text-[24px] neue-thin mt-5 p-2 mr-2 text-start'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corrupti excepturi. Labore repellendus dolorem,
 praesentium 
suscipit tempore sunt ut vitae sequi, 
</p>
</div> 
    </section>
  )
}

export default Footer