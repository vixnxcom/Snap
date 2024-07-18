import React from 'react'
import styles from '../../style'

const Intro = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
      <div>
      <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>

        {/* header */}
        <h2 className={`${styles.flexStart} galgo text-6xl tracking-wide mt-20` }>
        Welcome to Champions Global-Consulting,
        </h2>
        {/* header */}
        <p className='text-[24px] neue-thin mt-5 p-2'>
        where excellence meets empowerment. As a
premier consulting firm, we specialize in unlocking the full potential of individuals and
organizations, guiding them towards becoming champions in their respective fields. With a
dedicated team of seasoned coaches, mentors, consultants, and speakers,
        </p>
  
      </div>
      </div>
    </section>
  )
}

export default Intro