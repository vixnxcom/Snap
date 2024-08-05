import React, { useState } from 'react';
import { whitea, whiteb } from '../../assets';


const Slider = () => {
  const slides = [
    { name: ' Ibraheem O. Qoseem', content: ' Mentorship is an important part of a mans career which helps one to get over challenges that are inimical to progress. Through Champion Global Consulting, I got the proper guidance and professional skills ( communication, problem-solving, and crisis management) needed to get me going in my career path. I can boast of their quality services and proudly recommend them to anyone who wishes to get to the peak of his or her career at the desired time.', alt: 'Slide 1' },

    { name: 'Mr. Usman Taiwo-Hassan A.', content: 'Dr. Ahmed Abdulkareem has been my mentor since about 15 years ago. He has always been a man with a listening ear, an open-minded fellow, and a sincere gentleman, He is outspoken and that helped a lot of us get things right with his word of encouragement and his special guidance skill. He used to make us see why we need to review our options and be optimistic about our aims. He has mentored, coached, and nurtured a number of us. Now, we are happy he was there to watch us grow. Growing up around him was fun and challenging, and most especially it gave us hope', alt: 'Slide 2' },

    { name: 'Edime Jesse', content: 'Dr Ahmed Abdulkareem, An excellent mentor who held my hands through a one year fellowship programme at the champions Educational foundation. He is highly proficient in public speaking, terrific verbal construct and a remarkable choice of word. He has a calm aura that facilitates the best environment to learn from his wealth of knowledge and experience', alt: 'Slide 3' },

    { name: 'Dr. Idris Toyeeb', content: 'I have known Dr. Ahmed Abdulkareem for over 15 years and I can attest that he possesses an exceptional qualities of a good mentor. I have benefited from his enthusiastic support and top-notch mentorship. He is a leader with integrity, he is accountable, and is an academia per excellence. Ahmedcine (as he is popularly known) is passionate about coaching youngsters and he is always ready to guide you whenever required. Also, having interacted with him in formal and non-formal gatherings, and witnessed his prowess in anchoring programs at assemblies of intellectuals; I can vehemently say that he is, confident, fluent, and has good speaking skills', alt: 'Slide 4' },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[96vw]   max-w-xl h-[92vh] mx-auto overflow-hidden  ">
      <div className=' card rounded-[24px] p-1 overflow-hidden shadow-lg'>
     {/* new div */}
     <div className=' bg-purple p-2 rounded-[24px]    mx-auto'>
     {/* new div */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
              <p className="text-center text-white neue-thin leading-relaxed text-[18px] tracking-wide  mt-4 mb-10 pp space-y-4 ">{slide.content}</p>
            <p className="text-center text-5xl text-white tracking-wide galgo pp">{slide.name}</p>
          
          </div>
        ))}
      </div>
     {/* new div */}
     </div>
     {/* new div */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 gap-2">
        <button
          onClick={prevSlide}
          className="bg-purple shadowc outline-none focus:outline-none text-black flex items-center justify-center mb-2 rounded-full w-[80px] h-[48px] neue-thin"
        >
          <img src={whiteb} alt="Previous" className="w-18 h-16" />
        </button>
        {/* <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full mb-16  ${
                index === currentIndex ? 'bg-purple' : 'bg-white'
              }`}
            />
          ))}
        </div> */}
         <button
          onClick={nextSlide}
          className="bg-purple shadowc text-black flex focus:outline-none  items-center justify-center mb-2 rounded-full w-[80px] h-[48px] neue-thin"
        >
          <img src={whitea} alt="Previous" className="w-18 h-16" />
        </button>

      </div>
      {/* new div for bg */}
      </div>
      <div className="flex space-x-2 mt-1 p-4 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full mb-20 focus:outline-none   ${
                index === currentIndex ? 'bg-purple' : 'bg-white'
              }`}
            />
          ))}
        </div>
    </div>
  );
};

export default Slider;
