import React from 'react'
import styles from '../../style'

const Guidingtwo = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
   <div>
    {/* card 1 */}   
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-yellow`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 04. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl purple tracking-wide mt-5 mx-2` }>
   We are dedicated to the success of our clients
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 '>
    We will go above and beyond to help 
them achieve their goals, and we will provide ongoing support and guidance 
throughout the duration of our engagement.
    </p>
     {/* heading */}

    </div> 
    {/* card 4  ///////////////////////////////////////////    */}
     {/* card 5 */}  
    <div className='bg-purple h-[8px] '></div>
    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track bg-black '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  text-white bg-white`}>  
     <h1 className='purple galgo text-[32px] tracking-wide'> 05. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl text-white tracking-wide mt-5 mx-2` }>
   We are committed to being transparent and accountable
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-white '>
    We will provide clear, honest 
feedback and progress reports to our clients, and we will be open to feedback and 
suggestions from them as well.
    </p>
     {/* heading */}

    </div> 
    {/* card 5  ///////////////////////////////////////////    */}
     {/* card 6 */}  
    <div className='bg-purple h-[8px] '></div>
    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track  '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-purple`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 06. </h1>
     </div> 
   <h2 className={`${styles.flexStart} galgo text-5xl tracking-wide mt-5 mx-2` }>
   We believe in the importance of diversity and inclusion.
        </h2>        
    </div>
    <p className='text-[24px] neue-thin mt-2 p-2  '>
    Our team is made up of 
individuals with a wide range of backgrounds and experiences, and we welcome 
clients from all walks of life.
    </p>
     {/* heading */}

    </div> 
    {/* card 6  ///////////////////////////////////////////    */}
    </div>

      
</section>
  )
}

export default Guidingtwo
