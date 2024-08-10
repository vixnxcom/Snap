import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { arrow, less, lesss, more, moree } from '../../assets';
import styles from '../../style';



const Faq = () => {
    const [showItem, setShowItem] = useState(false);

const toggleItem = () => {
    setShowItem(!showItem)
};
    const [showItemm, setShowItemm] = useState(false);

const toggleItemm = () => {
    setShowItemm(!showItemm)
};
    const [showItemmm, setShowItemmm] = useState(false);

const toggleItemmm = () => {
    setShowItemmm(!showItemmm,)
};



  return (
    <section className={`${styles.flexCenter} flex flex-col flex flex-row  mb-20 ` }>
        <div className=' max-w-[470px] mx-auto mt-5'>

     {/* <div className='border-work mt-20 mb-10 '>
 <h2 className='text-white  galgo  text-8xl text-center' >
  FAQs
     

 </h2>
 </div>    */}

{/* 1 card */}
<div className='text-center align-items-center mx-auto justify-content-center'>

    <div className={`${styles.flexCenter} flex `}> 
    <div className='text-start mx-auto p-2'>
        <button onClick={toggleItem} className='flex text-[20px] bg-book  p-4'>
            <h1 className='text-black text-start neue-thin mx-2 mr-10'>What is Champions Global Consulting</h1>
            <img src={showItem ? lesss : moree} className='p-4 w-[40%] mx-2  '/>
        </button>
        </div>
    </div>
{showItem  && (
    <div>
        <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto'>
        We are consulting company. We guide individuals and organizations to unlock their full potential,
         offering tailored solutions that drive success and foster sustainable growth.
        </p>
    </div>
 
 )}

{/* 1 card */}
{/* 1 card */}

<div className={`${styles.flexCenter} flex mt-5`}> 
<div className='text-start mx-auto p-2'>
        <button onClick={toggleItemm} className='flex text-[20px] bg-book  p-4'>
            <h1 className='text-black text-start neue-thin  mx-2 mr-20'>What do we do?</h1>
            <img src={showItemm ? lesss : moree} className='p-4 w-[40%] mx-2  '/>
        </button>
        </div>
    </div>
{showItemm  && (
   <div>
   <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto'>
   At Champions Global-Consulting, we provide customized coaching, mentoring, and consulting services.
    Our team works closely with clients to develop strategies that enhance performance, drive growth, 
    and achieve sustainable success across various industries.
   </p>
</div>
 
 )}

{/* 1 card */}
{/* 1 card */}

<div className={`${styles.flexCenter} flex mt-5`}> 
<div className='text-start mx-auto p-2'>
        <button onClick={toggleItemmm} className='flex text-[20px] bg-book  p-4'>
            <h1 className='text-black text-start neue-thin mx-2 mr-10'>How to book our services?</h1>
            <img src={showItemmm ? lesss : moree} className='p-4 w-[40%] mx-2  '/>
        </button>
        </div>
    </div>
{showItemmm  && (
   <div className='flex flex-col'>

   {/* <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto'>
       
   </p> */}
   <div className='flex flex-row'>

   <div className={`w-[48px] h-[48px] mt-5 p-1 rounded-full ${styles.flexCenter}  text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px] tracking-wide'> 01. </h1>
     </div> 

       <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto '>
       <span className='neue-medium text-black font-bold'>Select a Service</span> - Choose from our available services and pricing plans listed on our website
        </p>     
   </div>
   {/* </p> */}
   <div className='flex flex-row mt-2'>

   <div className={`w-[48px] h-[48px] p-1 mt-5 rounded-full ${styles.flexCenter}  text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px] tracking-wide'> 02. </h1>
     </div> 

       <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto '>
       <span className='neue-medium text-black font-bold'>Review Pricing</span> - Check the details and select the plan that best fits your needs.
        </p>     
   </div>
   {/* </p> */}
   <div className='flex flex-row mt-5'>

   <div className={`w-[48px] h-[48px] p-1 rounded-full ${styles.flexCenter} mt-5  text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px] tracking-wide'> 03. </h1>
     </div> 

       <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto '>
       <span className='neue-medium text-black font-bold'>Make Payment</span> - Complete your booking by making a secure payment through our Paystack account on the website.
        </p>     
   </div>


</div>
 
 )}

{/* 1 card */}

</div>
</div>
    </section>
  )
}

export default Faq