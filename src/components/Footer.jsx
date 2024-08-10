import React from 'react';
import styles from '../style';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} mb-20 mx-auto text-center flex flex-col`}>
      <div className='p-6 mt-10 text-white'>
        <h2 className={`${styles.flexStart} text-6xl galgo md:text-6xl lg:text-8xl tracking-wide text-start`}>
          Champions Global Consulting
        </h2>

        <div className='text-xl md:text-2xl tracking-wide text-start mt-5 neue-medium'>
          <h2>Unleashing Potential, Achieving Greatness</h2>
        </div>

        <div className='text-4xl md:text-4xl   tracking-wide text-start mt-10'>
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
