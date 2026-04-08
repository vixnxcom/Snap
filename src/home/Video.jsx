import { cat } from "../assets";

const Video = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={cat} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold impact">
           SNUK
          </h1>
          <p className="mt-4 text-lg md:text-xl">
              <p className='impact text-gray-500  text-[24px] mt-5 text-black text-center '>
          We believe eyewear is more than just something you wear on your face.
        </p>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Video;