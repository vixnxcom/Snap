import React from 'react';
import styles from '../../style';
import { faceb, insta, linked, twitter } from '../../assets';

function Social() {
  return (
    <section className='mt-20' >


      {/* <h3>Follow Us On Social Media</h3> */}
      <div className='flex flex-row gap-4'>
        <div>
          <a href="https://web.facebook.com/people/Champions-Global-Consulting/61557543323278/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-yellow `}>
                <img src={faceb} alt=""  className='w-[56px] h-[56px] mx-auto '/>
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.twitter.com/c_global_c" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-yellow `}>
                <img src={twitter} alt=""  className='w-[56px] h-[56px] mx-auto '/>
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/champions_global" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-yellow `}>
                <img src={insta} alt=""  className='w-[56px] h-[56px] mx-auto '/>
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/champions-global-consulting" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-yellow `}>
                <img src={linked} alt=""  className='w-[56px] h-[56px] mx-auto '/>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
