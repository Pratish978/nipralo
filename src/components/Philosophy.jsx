import React from 'react';

export default function Philosophy() {
  return (
    <section className="w-full bg-[#4A5D6E] relative py-12 px-6 overflow-hidden">
      
      {/* ================= BACKGROUND TOPOGRAPHY LINES LAYER ================= */}
      <div className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none select-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M-100,150 C300,50 600,300 1000,100 C1200,20 1400,180 1600,80" fill="none" stroke="white" strokeWidth="2.5" />
          <path d="M-100,200 C300,100 600,350 1000,150 C1200,70 1400,230 1600,130" fill="none" stroke="white" strokeWidth="2" />
          <path d="M-100,250 C300,150 600,400 1000,200 C1200,120 1400,280 1600,180" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M-100,300 C300,200 600,450 1000,250 C1200,170 1400,330 1600,230" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="max-w-[950px] mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        <h2 className="text-[#E96125] text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-normal mb-4">
          Our Philosophy
        </h2>

        <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] font-normal opacity-95 max-w-[860px] mb-6 tracking-wide">
          Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.
        </p>

        <button className="group relative bg-[#E96125] hover:bg-[#d1d5db] text-white hover:text-black font-semibold text-[14px] px-8 py-2.5 rounded-xl shadow-sm transition-colors duration-300 ease-in-out tracking-wide w-[130px] h-[42px] flex items-center justify-center overflow-hidden">
          <span className="block group-hover:hidden">Read more</span>
          <span className="hidden group-hover:block">lets go</span>
        </button>

      </div>
    </section>
  );
}