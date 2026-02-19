import React from 'react'
import styles from '../style'
import HeroImage from '../components/Image'
import Button from './Button'
import { bot } from '../assets'
import HeroText from './HeroText'

const Home = () => (
    <section className='w-full overflow-hidden'>

        <div className={`${styles.flexStart} h-[100vh] flex flex-col `}>
            <div className={`${styles.boxWidth}`}>
                <HeroImage />
       
            </div>
                  <div className=' '>
         <Button />
     </div> 
        </div>

    
     
        <div className='grid grid-cols-2 w-[100vw] mt-10 bg-black overflow-hidden'>
          
            <div>
   <HeroText /> 
            </div>
           <div className='h-[50vh] w-[50vw] bg-home'></div>
        </div>
    </section>
)

export default Home