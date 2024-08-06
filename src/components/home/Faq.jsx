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
    <section className={`${styles.flexCenter} flex flex-col flex flex-row mt-5 mb-20 ` }>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, molestiae.
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
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, molestiae.
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
   <div>
   <p className='neue-thin text-[20px] text-white max-w-[320px] mt-5 text-start mx-auto'>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, molestiae.
   </p>
</div>
 
 )}

{/* 1 card */}

</div>
</div>
    </section>
  )
}

export default Faq