import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

import Carousel from './Carousel'
import CarouselCard from './CarouselCard'
import Goals from './Goals'
import GoalList from './GoalList'
import Parallaximg from './Parralaximg'
import styles from '../../style'
import Team from './Team'
import Ahmed from './Ahmed'
import Kazeem from './Kazeem'
import Stat from './Stat'
import Image from './Image'
import { arrowhite, book, guide, wave  } from '../../assets'
import Slider from './Slider'
import Animate from '../Animate'
import TextAnim from '../TextAnim'
import Faq from './Faq'
import Register from '../../Register'
import { Link } from 'react-router-dom'
import Second from './Second'
import Button from '../Button'
import Bootcamp from './Bootcamp'


const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-purple' >

      {/* first bg */}

      {/* <div className='bg-purple '> */}
    <div className='bg-hero bg-heroo' >
      <Welcome />
    </div>



 {/* bootcamp */}
  <div className='bg-purple h-[200px]'>
  </div>
 {/* bootcamp */}

  <div className=' mt-10'> 
 <div className='bg-curvebook mt-24'>
  <Intro />
  <img src={book} alt="" className='w-full h-[400px] mx-auto max-w-[800px] ' />
  <div className={`${styles.flexCenter} md:w-[800px] xs:w-[470px]  p-6 pbox track mx-auto `}>

  <p className='text-[24px] neue-thin mt-5 p-2 mb-5'>
  With a 
dedicated team of seasoned coaches, mentors, consultants, and speakers, we are committed to 
delivering tailored solutions that inspire growth, drive success, and foster sustainable change.
   </p>
     
  </div>
  </div>
{/* </div>  */}


 <div className='bg-curvybook mt-5'>
  <div className={`${styles.flexCenter}  p-6 pbox track `}>

  <TextAnim>
  <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start mt-10 md:w-[800px] xs:w-[470px] ` }>
      <span className='rounded-[16px] h-[16px] w-[16px] bg-black mr-4 mb-16'></span>
      Guiding Principles  
        </h2>
  </TextAnim>  
        
  </div>
  <img src={wave} alt="" className='w-full h-[400px] mx-auto max-w-[800px] ' />
  <div className='' >
    <Second />
  </div>
  <div className=' mb-5'>

<Animate>
<Button />
</Animate>

</div>

</div> 

 

    <div className='bg-purple mt-10 '>
 <Parallaximg />
 </div>
    </div>


    {/* second bg */}


 <div className='bg-purple'>
  <div>
    <Animate>
  <h2 className={`${styles.flexStart} galgo text-8xl text-white tracking-wide mt-20` }>
  <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
      Our Goals
        </h2>
    </Animate>     
  </div>
  <div>
  <GoalList />
 </div>
 </div>
 
{/* third bg */}
 <div className='bg-purple mx-auto'>


   <div className=''>

    <Animate>
    <h2 className={`${styles.flexStart} galgo text-8xl text-white our tracking-wide mt-20 ` }>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span>
        Leadership
     </h2>
     </Animate>

    </div>


<div className={`${styles.flexCenter} mt-10 `}>
 <Kazeem/>
 </div>


 <div className='bg-book mt-10'>

    <Animate>
    <h2 className={`${styles.flexStart} galgo text-8xl text-black  tracking-wide mt-20  ` }>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-black mr-4 '></span>
       Our Reviews
     </h2>
     </Animate>
     
     <TextAnim>
     <p className={`${styles.flexCenter} text-black  tracking-wide  neue-thin text-[28px] `}>
      What people are saying about us</p>
      </TextAnim>
   

<div className={`${styles.flexCenter} mt-5 mx-auto`}>

  <Slider />
  
</div>

   <div className='bg-purple mt-10 '>
   <Animate>
    <h2 className={`${styles.flexStart} galgo text-8xl text-white  tracking-wide mt-20  ` }>
     <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span> 
       FAQs
     </h2>
     </Animate>
     
     <TextAnim>
     <p className={`${styles.flexCenter} text-white tracking-wide  neue-thin text-[28px] `}>
      Frequently asked questions</p>
      </TextAnim>
   
    <div className='mt-5'>
      <Faq />
    </div>
    <div className='h-[100px] bg-purple'></div>
   </div>


</div>



</div> 
{/* third bg */}









    </div>
  )
}

export default Home