import React, { useState } from 'react';
import { ahmed, arroww, emp, fb, ig, lk, ppl, white, x, yt } from '../../assets';
import styles from '../../style';
import TextAnim from '../TextAnim';
import SideAnim from '../SideAnim';
import Animate from '../Animate';


function Kazeem() {
  const [isExpandedd, setIsExpandedd] = useState(false);

  const handleViewMore = () => {
    setIsExpandedd(true);
  };

  const handleClose = () => {
    setIsExpandedd(false);
  };

  return (
    <div className="flex justify-center items-center   ">
      {/* Card */}
      <div
        className={`transform transition-transform duration-500  ${
          isExpandedd ? 'scale-0' : 'scale-100'
        }`}
      >
        <div className="max-w-sm w-[98vw]  rounded-[48px] overflow-hidden shadow-xl bg-purple mb-5 mt-5  z-[60]">
          <img className="w-full h-[full] " src={ahmed} alt="Card image" />
          <div className="px-6 py-4">
            <SideAnim>
            <div className=" text-7xl galgo tracking-wide mb-2 text-white">Dr Ahmed <br /> Abdulkareem</div>
            </SideAnim>
            
            <SideAnim>
            <p className="text-white neue-medium text-[28px] ">
              Principal Partner
            </p>
            </SideAnim>
          </div>
         
          <div className="px-6 py-4">

           <Animate>
            <button
              className="bg-white hover:tracking-widest text-white text-[24px] gap-8 button-stroke  py-2  rounded-[44px] mb-2 p-2 neue-thin flex flex-row"
              onClick={handleViewMore}
            ><div className={`${styles.flexCenter}`}>
              <p className='purple mx-4 '>View More</p>
              <img src={arroww} alt=""  className='w-[10%] mr-2' />
              </div>
            </button>
            </Animate>
            
          </div>
        </div>
      </div>

            {/* Fullscreen Card */}
      {isExpandedd && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div
            className="bg-white p-8 rounded shadow-lg max-w-lg w-full h-full overflow-y-auto transform transition-transform duration-500 scale-100"
            style={{ transition: 'transform 0.5s' }}
          >
            <img className="w-full mb-4 mt-4" src={ahmed} alt="Card image" />
            <div className=" text-2xl galgo mb-2">Principal Partner Champions Global Consulting</div>
            <p className="text-gray-900 neue-thin text-base mb-4">
              
Meet our Principal, Ahmedcine: Leading with Excellence and Empowerment
Dr. Ahmed Abdulkareem, affectionately known as Ahmedcine, stands at the helm of 
Champions Global-Consulting, guiding our mission to empower individuals and 
organizations worldwide. With over a decade of experience as a mentor, coach, and public 
speaker, Ahmedcine brings a wealth of expertise and passion to his role.
<br  className='mt-2'/>

            </p>
            <p className="text-gray-900 neue-thin text-base mb-4">
              

<br  className='mt-2'/>
Ahmedcine's journey towards excellence began with his medical training, earning him 
certification from the Educational Commission for Foreign Medical Graduates (ECFMG). 
His dedication to mentorship and leadership led him to pursue additional qualifications, 
including recognition as a Fellow of the Institute of Management Consultants (IMC-Nigeria) 
and certification as a Management Consultant by IMC-Nigeria. He further honed his skills as 
a Certified Management Specialist through the London Graduate School.
<br />

            </p>
            <p className="text-gray-900 neue-thin text-base mb-2">
              

<br />
Driven by a commitment to lifelong learning, Ahmedcine has undertaken numerous courses 
to enhance his communication, mentorship, and leadership capabilities. From prestigious 
institutions such as the University of Pennsylvania and the University of Washington, 
Ahmedcine has completed programs covering topics ranging from improving communication 
skills to understanding global health research fundamentals.
<br />

            </p>
            <p className="text-gray-900 neue-thin text-base mb-2">

<br />
Ahmedcine's passion for empowering others extends beyond his professional endeavours. As 
a current worker at the National Health Service (NHS) in England, United Kingdom, he has a 
strong desire to advance primary healthcare, promote health equity, and champion medical 
leadership, education, and research.
            </p>

<div className='icons mt-2'>
<div className=" text-2xl galgo mb-2">Socials</div>
<div className={`${styles.paddingX} gap-8 flex flex-row`} >
<a href="https://uk.linkedin.com/in/ahmed-abdulkareem-7931b1b8?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter}  `}>
                <img src={lk} alt=""  className='w-[48px] h-[48px] mx-auto '/>
            </div>
          </a>
<a href="https://web.facebook.com/ahmedcine/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter}  `}>
                <img src={fb} alt=""  className='w-[48px] h-[48px] mx-auto '/>
            </div>
          </a>
<a href="https://www.twitter.com/ahmedicine" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter}  `}>
                <img src={x} alt=""  className='w-[48px] h-[48px] mx-auto '/>
            </div>
          </a>



</div>
<div className={`${styles.paddingX} gap-8 flex flex-row mt-5`} >
<a href="https://www.instagram.com/ahmedcine_md/" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter}  `}>
                <img src={ig} alt=""  className='w-[48px] h-[48px] mx-auto '/>
            </div>
          </a>
<a href="https://youtube.com/@ahmedcine?si=2XDNueWmyHFX1x5h" target="_blank" rel="noopener noreferrer">
          <div className={`${styles.flexCenter}  `}>
                <img src={yt} alt=""  className='w-[48px] h-[48px] mx-auto '/>
            </div>
          </a>


</div>

</div>
            <button
               className="bg-purple hover:bg-blue-700 text-white text-[24px] gap-8  py-2 px-2 mt-10 rounded-[44px] mb-2 p-2 neue-thin flex flex-row"
              onClick={handleClose}
            >
             <div className={`${styles.flexCenter}`}>
              <p className='white mx-4 '>close</p>
              <img src={white} alt=""  className='w-[10%] mr-2' />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kazeem;
