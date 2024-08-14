import React from 'react';


const Yt = () => {
  return (
    <section className="p-2">
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/vvHIjby1_04?modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Yt;



