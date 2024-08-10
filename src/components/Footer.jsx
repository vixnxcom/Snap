import React from 'react';
import styles from '../style';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} mb-20 mx-auto text-center flex flex-col bg-gray-950`}>
      <div className='p-6 mt-10 text-white'>
        <h2 className=' text-8xl galgo md:text-6xl lg:text-8xl tracking-wide text-start'>
          Champions Global <br  className='md:hidden'/> Consulting
        </h2>

        <div className='text-xl md:text-2xl tracking-wide text-start mt-5 neue-medium'>
          <h2>Unleashing Potential, Achieving Greatness</h2>
        </div>

        <div className='text-6xl md:text-4xl   tracking-wide text-start mt-10'>
          <h2 className='galgo'>Contact Us</h2>
          <p className='mt-5 text-xl md:text-2xl neue-thin'>
            championsglobalconsulting@gmail.com
          </p>
          <p className='mt-5 text-xl md:text-2xl neue-thin'>
            +234- 8084683622
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
