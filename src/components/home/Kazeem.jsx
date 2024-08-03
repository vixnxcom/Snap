import React, { useState } from 'react';
import { ahmed, arroww, emp, ppl, white } from '../../assets';
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
              className="bg-white hover:bg-blue-700 text-white text-[24px] gap-8 button-stroke  py-2  rounded-[44px] mb-2 p-2 neue-thin flex flex-row"
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
            <button
               className="bg-purple hover:bg-blue-700 text-white text-[24px] gap-8  py-2 px-2 mt-5 rounded-[44px] mb-2 p-2 neue-thin flex flex-row"
              onClick={handleClose}
            >
             <div className={`${styles.flexCenter}`}>
              <p className='white mx-4 '>close</p>
              <img src={white} alt=""  className='w-[12%] mr-2' />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kazeem;
