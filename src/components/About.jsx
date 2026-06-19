import React from 'react';
import aboutImg from '../assets/about1.png'; 

export default function About() {
  return (
    <section id="about" className="w-full h-auto min-h-[100vh] relative overflow-hidden bg-[#FFFBF7]">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={aboutImg} 
          alt="About Penta Freight" 
          // object-top ensures the top part of the image stays visible as the primary focus
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* CONTENT LAYER - Centered at the top */}
      <div className="relative z-10 w-full pt-20 pb-16 px-6 md:px-8 flex flex-col items-center">
        
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full max-w-[1100px]">
          
          {/* Left Side: Labels (Stacked centrally on mobile) */}
          <div className="flex flex-col items-center min-w-[150px] pt-1">
            <span className="text-[#E96125] text-[18px] md:text-[20px] font-bold tracking-widest uppercase text-center">
              ABOUT US
            </span>
            <div className="w-[120px] h-[2px] bg-[#E96125] my-2" />
            <span className="text-[#E96125] text-[18px] md:text-[20px] font-bold tracking-widest uppercase text-center">
              PENTA FREIGHT
            </span>
          </div>

          {/* Right Side: Description */}
          <div className="w-full max-w-[820px]">
            <p className="text-[#425462] text-[20px] md:text-[25px] font-light tracking-wide leading-snug md:leading-tight text-center md:text-left">
              Penta Freight provides reliable <strong className="text-[#374151] font-bold">logistics solutions</strong>, 
              specializing in temperature-sensitive shipments. We ensure safe, <strong className="text-[#374151] font-bold">on-time delivery</strong> worldwide. 
              Trust us for seamless supply chain management.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}