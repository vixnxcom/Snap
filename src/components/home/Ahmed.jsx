import React, { useState } from 'react';
import { ahmed, arroww, ppl } from '../../assets';


function Ahmed() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex justify-center items-center p-2  ">
      {/* Card */}
      <div
        className={`transform transition-transform duration-500  ${
          isExpanded ? 'scale-0' : 'scale-100'
        }`}
      >
        <div className="max-w-sm  rounded overflow-hidden   mb-20 mt-20 p-4 z-[60]">
          <img className="w-full" src={ahmed} alt="Card image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Card 
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleViewMore}
            >
              <img src={arroww} alt=""  className='w-[43.43px] h-[41.55px]' />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Card */}
      {isExpanded && (
        <div className="fixed top-0 left-0 w-full h-[screen] z-[900] flex justify-center items-center bg-toggle bg-opacity-75">
          <div
            className="bg-toggle p-8 rounded shadow-lg max-w-lg w-full h-[screen] transform transition-transform duration-500 scale-100"
            style={{ transition: 'transform 0.5s' }}
          >
            <img className="w-full mb-4" src={ppl} alt="Card image" />
            <div className="font-bold text-4xl mb-2 glago tracking-wide">Dr Ahmed Abdulkareem</div>
            <p className="text-gray-700 text-base mb-4 h-[50vh]">
              Expanded card content goes here. This is the full screen view with more text.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et.
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

export default Ahmed;
