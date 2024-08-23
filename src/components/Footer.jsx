import React from 'react';
import styles from '../style';
import Social from './contact/Social';


const Footer = () => {
  return (
    <section className={`${styles.flexCenter}  mx-auto text-center flex flex-col bg-gray-950 `}>
      <div className='p-6 mt-10 text-white'>
        <h2 className=' text-8xl galgo md:text-6xl lg:text-8xl tracking-wide text-start'>
          Champions Global <br  className='md:hidden'/> Consulting
        </h2>
        <div className='loader'></div>
        <div className='text-xl md:text-2xl tracking-wide text-start mt-5 neue-medium'>
          <h2>Unleashing Potential, Achieving Greatness</h2>
        </div>

        <div className='text-6xl md:text-4xl   tracking-wide text-start mt-10'>
          <h2 className='galgo'>Contact Us</h2>
          <p className='mt-5 text-xl md:text-2xl neue-thin'>
          info.globalcgc@gmail.com
          </p>
          <p className='mt-5 text-xl md:text-2xl neue-thin'>
            +234- 8084683622
          </p>

          <div>
        <Social />
      </div>
        </div>
      
    
      </div>

        {/* foot */}
  
        <div className=' h-[2px] bg-purple mt-20 w-full'></div>
     
        {/* foot */}
        <div className='text-white'>
       <p className='neue-thin text-[16px] mt-5 tracking-wide'> &copy; Championsglobalconsulting. All Rights Reserved 2024.</p>
        </div>
        <div className='text-white flex flex-row tracking-wide mb-5'>
       <p className='neue-thin text-[16px] mt-5'>Developed by </p>
        <a href="https://read.cv/Vixndotcom" target="_blank" className='mt-5 mx-2 cursor-pointer'
        rel="noopener noreferrer"> vixndotcom</a>
        </div>
    </section>
  );
}

export default Footer;
