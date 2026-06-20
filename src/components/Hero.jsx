import React from 'react';
import pentaVideo from '../assets/penta.mp4'; 

export default function Hero() {
  return (
    <div className="relative w-full h-65 sm:h-80 md:h-[85vh] lg:h-[100vh] bg-black overflow-hidden flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src={pentaVideo} type="video/mp4" />
        <source src="/src/assets/penta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none md:block hidden" />
    </div>
  );
}