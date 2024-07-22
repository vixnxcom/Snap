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
    <div className="flex justify-center items-center p-2  ">
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
            <img className="w-full mb-4" src="https://via.placeholder.com/300" alt="Card image" />
            <div className="font-bold text-2xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base mb-4">
              Expanded card content goes here. This is the full screen view with more text.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel 
              scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
