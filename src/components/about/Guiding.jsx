import React from 'react'
import styles from '../../style'
import { ball, lamp } from '../../assets'
import SideAnim from '../SideAnim'
import TextAnim from '../TextAnim'

const Guiding = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
   <div>
    {/* card 1 */}   
 

    {/* card 1   ///////////////////////////////////////////    */}
     {/* card 2 */}  
    {/* <div className='bg-white h-[8px] '></div> */}
    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track bg-white rounded-[48px]'>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} text-white bg-yellow`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 02. </h1>
     </div> 

     <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] tracking-wide mt-5 mx-2 purple` }>
   We are committed to providing high-quality services that are based on the latest 
   research and best practices.
        </h2>   
    </SideAnim>       

    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-black'>
     Our team members are experts in their fields, and they are 
    continually learning and staying up to date on the latest developments in their areas of 
      expertise.
    </p>
     {/* heading */}

    </div> 
    
    {/* card 2   ///////////////////////////////////////////    */}
     {/* card 3 */}  

    
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track '>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-white`}>  
     <h1 className='yellow galgo text-[32px] tracking-wide'> 03. </h1>
     </div> 

   <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] tracking-wide mt-5 mx-2 text-black` }>
    We believe in the importance of open communication and collaboration.
        </h2>
    </SideAnim>

    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-black '>
    We will 
   work closely with our clients to ensure that they are involved in the planning and 
   execution of their plan, and that they have the information and support they need to 
    succeed.
    </p>
     {/* heading */}
     <div className='flex justify-end items-end align-items-right object-right'>
    <img src={ball} alt=""className='w-[120px] h-[100px]' />
  </div>

    </div> 
   
    {/* card 3  ///////////////////////////////////////////    */}
   {/* card 1 */}   
        <div className='bg-purple h-[2px] '></div>
   <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track'>
     {/* heading */}
     <div className='flex flex-col'>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  text-white bg-black`}>  
     <h1 className='text-white galgo text-[32px] tracking-wide'> 04. </h1>
     </div> 

     <SideAnim>
   <h2 className={`${styles.flexStart} neue-medium text-[32px] text-black tracking-wide mt-5 ` }>
   We are dedicated to the success of our clients
   </h2>    
    </SideAnim>        

    </div>
    <p className='text-[24px] neue-thin mt-2 p-2 text-black mb-2 '>
    We will go above and beyond to help 
them achieve their goals, and we will provide ongoing support and guidance 
throughout the duration of our engagement.
    </p>
     {/* heading */}

    </div> 
    {/* card 4  ///////////////////////////////////////////    */}
    </div>

      
</section>
  )
}

export default Guiding
