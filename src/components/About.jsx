import React from 'react';
import aboutImg from '../assets/about1.png'; 

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFFBF7] relative">
      <div className="w-full relative min-h-[600px] sm:min-h-[650px] md:h-[100vh] max-w-[1600px] mx-auto overflow-hidden">
        
        {/* ================= BACKGROUND IMAGE LAYER ================= */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <img 
            src={aboutImg} 
            alt="About Penta Freight" 
            className="w-full h-full object-cover object-center opacity-95 md:opacity-100 scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7]/50 via-transparent to-black/20 md:hidden" />
        </div>

        {/* ================= DESKTOP LAYOUT (UNTOUCHED) ================= */}
        <div className="hidden md:flex relative w-full h-full flex-row items-start justify-start pt-[10vh] lg:pt-[12vh] px-6 sm:px-12 md:pl-[12%] lg:pl-[15%] xl:pl-[18%] pr-6 md:pr-16 gap-12 lg:gap-20 pointer-events-none">
          <div className="flex flex-col items-start min-w-[200px] pointer-events-auto bg-transparent p-0 rounded-2xl shadow-none">
            <span className="text-[#E96125] text-[15px] font-bold tracking-[0.25em] block uppercase">
              ABOUT US
            </span>
            <div className="w-[75px] h-[2px] bg-[#E96125] mt-2 mb-[18px]" />
            <h2 className="text-[#E96125] text-[18.5px] font-extrabold tracking-[0.15em] uppercase">
              PENTA FREIGHT
            </h2>
          </div>

          <div className="max-w-[620px] text-left pointer-events-auto bg-transparent p-0 rounded-2xl mt-[4px] shadow-none">
            <p className="text-[#1a1a1a] text-[16.5px] leading-[1.85] font-normal tracking-wide">
              Penta Freight provides reliable <strong className="font-bold text-black opacity-95">logistics solutions</strong>, 
              specializing in temperature-sensitive shipments. We ensure safe, <strong className="font-bold text-black opacity-95">on-time delivery</strong> worldwide. 
              Trust us for seamless supply chain management.
            </p>
          </div>
        </div>

        {/* ================= MOBILE & TABLET CENTERED LAYOUT ================= */}
        <div className="flex md:hidden relative z-10 w-full h-full flex-col items-center justify-start pt-14 px-8 text-center pointer-events-none">
          <div className="flex flex-col items-center max-w-xl pointer-events-auto mb-5">
            <span className="text-[#E96125] text-[15px] font-bold tracking-[0.2em] block uppercase">
              ABOUT US
            </span>
            <div className="w-[110px] h-[2px] bg-[#E96125] mt-2.5 mb-5" />
            <h2 className="text-[#E96125] text-[17px] font-extrabold tracking-[0.12em] uppercase">
              PENTA FREIGHT
            </h2>
          </div>

          <div className="max-w-[480px] pointer-events-auto mt-1">
            <p className="text-[#2a2a2a] text-[15px] leading-[1.8] font-medium tracking-wide">
              Penta Freight provides reliable <strong className="font-bold text-[#202c38]">logistics solutions</strong>, 
              specializing in temperature-sensitive shipments. We ensure safe, <strong className="font-bold text-[#202c38]">on-time delivery</strong> worldwide. 
              Trust us for seamless supply chain management.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}