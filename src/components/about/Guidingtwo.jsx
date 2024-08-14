import React from 'react'
import styles from '../../style'
import SideAnim from '../SideAnim'

const Guidingtwo = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} text-start `}>
   <div>

     {/* card 5 */}  
  
     {/* <div className='h-[2px] bg-white'></div> */}
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track bg-gray-950 rounded-[48px]'>
   
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  text-black bg-yellow mt-5`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 05. </h1>
     </div> 

    <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] text-white tracking-wide mt-5 mx-2` }>
   We are committed to being transparent and accountable
        </h2>
   </SideAnim>   

    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-white mb-2'>
    We will provide clear, honest 
feedback and progress reports to our clients, and we will be open to feedback and 
suggestions from them as well.
    </p>
     {/* heading */}

    </div> 
    {/* card 5  ///////////////////////////////////////////    */}
     {/* card 6 */}  

    <div className='black'></div>
    </div>

      
</section>
  )
}

export default Guidingtwo
