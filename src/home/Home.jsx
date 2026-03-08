import React from 'react'
import styles from '../style'
import HeroImage from '../components/Image'
import Button from './Button'
import { bot } from '../assets'
import HeroText from './HeroText'
import Customers from './Customers'
import Flash from './Flash'
import SnapshotCarousel from './Flash'
import ScrollImageReveal from './TextScroll'
import ScrollImageEffect from './TextScroll'
import MinimalScrollImage from './TextScroll'
import PreciseScrollImage from './TextScroll'
import BrandMarquee from './Customers'

const Home = () => (
    <section className='w-full overflow-hidden'>

        <div className={`${styles.flexStart} h-[100vh] flex flex-col bg-white`}>
            <div className={`${styles.boxWidth}`}>
                <HeroImage />
    
        </div>
        </div>
   
      
                  <div className=' bg-black h-[54vh]'>
                         <Button />
                        </div> 
{/*     
     
        <div className='grid grid-cols-2 w-[100vw] mt-10 bg-black overflow-hidden'>
          
            <div>
   <HeroText /> 
            </div>
           <div className='h-[50vh] w-[50vw] bg-heme'></div>
        </div> */}
     <div className={`${styles.flexStart}  bg-black`}>
            <div className={`${styles.boxWidth} mt-20`}>
            <SnapshotCarousel />
        </div>
        </div>

         <div className={`${styles.flexStart} min-h-screen`}>
            <div className={`${styles.boxWidth}`}>
          <ScrollImageEffect />
            </div>
            </div>

         <div className={`${styles.flexStart} min-h-screen bg-black`}>
            <div className={`${styles.boxWidth}`}>
          <BrandMarquee />
            </div>
            </div>
    </section>
)

export default Home