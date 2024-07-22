import React, { useState } from 'react';
import { ahmed, arroww, emp, ppl } from '../../assets';


function Kazeem() {
  const [isExpandedd, setIsExpandedd] = useState(false);

  const handleViewMore = () => {
    setIsExpandedd(true);
  };

  const handleClose = () => {
    setIsExpandedd(false);
  };

  return (
    <div className="flex justify-center items-center p-8  ">
      {/* Card */}
      <div
        className={`transform transition-transform duration-500  ${
          isExpandedd ? 'scale-0' : 'scale-100'
        }`}
      >
        <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-toggle mb-5 mt-5  z-[60]">
          <img className="w-full h-[full] " src={ahmed} alt="Card image" />
          <div className="px-6 py-4">
            <div className=" text-7xl galgo tracking-wide mb-2 text-white">Dr Ahmed <br /> Abdulkareem</div>
            <p className="text-white neue-medium text-[28px] ">
              Principal Partner
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-white hover:bg-blue-700 text-white text-[24px] gap-4  py-2 px-2 rounded neue-thin flex flex-row"
              onClick={handleViewMore}
            >
              <p className='purple'>View More</p>
              <img src={arroww} alt=""  className='w-[43.43px] h-[41.55px]' />
            </button>
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
            <img className="w-full mb-4" src={ahmed} alt="Card image" />
            <div className=" text-2xl galgo mb-2">Principal Partner Champions Global Consulting</div>
            <p className="text-gray-900 neue-thin text-base mb-4">
              
Meet our Principal, Ahmedcine: Leading with Excellence and Empowerment
Dr. Ahmed Abdulkareem, affectionately known as Ahmedcine, stands at the helm of 
Champions Global-Consulting, guiding our mission to empower individuals and 
organizations worldwide. With over a decade of experience as a mentor, coach, and public 
speaker, Ahmedcine brings a wealth of expertise and passion to his role.
<br  className='mt-2'/>
Ahmedcine's journey towards excellence began with his medical training, earning him 
certification from the Educational Commission for Foreign Medical Graduates (ECFMG). 
His dedication to mentorship and leadership led him to pursue additional qualifications, 
including recognition as a Fellow of the Institute of Management Consultants (IMC-Nigeria) 
and certification as a Management Consultant by IMC-Nigeria. He further honed his skills as 
a Certified Management Specialist through the London Graduate School.
<br />
Driven by a commitment to lifelong learning, Ahmedcine has undertaken numerous courses 
to enhance his communication, mentorship, and leadership capabilities. From prestigious 
institutions such as the University of Pennsylvania and the University of Washington, 
Ahmedcine has completed programs covering topics ranging from improving communication 
skills to understanding global health research fundamentals.
<br />
Ahmedcine's passion for empowering others extends beyond his professional endeavours. As 
a current worker at the National Health Service (NHS) in England, United Kingdom, he has a 
strong desire to advance primary healthcare, promote health equity, and champion medical 
leadership, education, and research.
            </p>
            <button
              className="bg-toggle hover:bg-red-700 text-white neue-thin py-2 px-4 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kazeem;
