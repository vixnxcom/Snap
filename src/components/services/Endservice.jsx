import React from 'react';
import styles from '../../style';
import Animate from '../Animate';

const Endservice = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col bg-each mx-auto p-4`}>
      <div className={`${styles.flexCenter} flex flex-col p-4 w-full max-w-3xl mx-auto`}>
        <Animate>
          <h1 className="neue-medium text-[28px] text-white text-center">
            Each of our services is 
            <span className="galgo yellow text-6xl tracking-wide block"> 
              crafted
            </span>
          </h1>
        </Animate>
        <Animate>
          <p className="neue-medium text-[28px] text-white tracking-wide text-center mx-auto w-full md:w-[380px]">
            with a <span className="galgo yellow text-6xl tracking-wide">focus</span> on empowering individuals and organizations to reach their
          </p>
        </Animate>
        <Animate>
          <p className="neue-medium text-[28px] text-white tracking-wide text-center mx-auto w-full md:w-[380px]">
            <span className="galgo yellow text-6xl tracking-wide text-start block md:inline">
              full potential,
            </span> 
            overcome obstacles, and thrive in their respective endeavours.
          </p>
        </Animate>
      </div>
    </section>
  );
};

export default Endservice;
