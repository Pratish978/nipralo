import React, { useEffect, useRef, useState } from 'react';

function useAnimatedCounter(targetValue, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutQuad progress curve interpolation
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration, trigger]);

  return count;
}

export default function OurAchievements() {
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const officeCount = useAnimatedCounter(7, 1800, hasTriggered);
  const expertCount = useAnimatedCounter(200, 2000, hasTriggered);
  const awardCount = useAnimatedCounter(50, 2200, hasTriggered);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#3D4E5B] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 60%), 
                          radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)`
      }}
    >

      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,100 Q300,50 700,200 T1500,100" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M-50,200 Q400,120 800,320 T1600,150" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0,300 Q500,220 900,420 T1700,250" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 relative z-10">
        

        <div className="w-full lg:w-[40%] text-left">
          <h2 className="text-[#E2622F] text-[32px] sm:text-[38px] font-medium tracking-tight mb-5">
            Our Achievements
          </h2>
          <p className="text-gray-200 text-[15px] sm:text-[16px] leading-[1.65] font-normal max-w-[420px]">
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
          </p>
        </div>


        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16 text-left pt-2">
          

          <div className="flex flex-col items-start">
            <span className="text-white text-[56px] sm:text-[64px] font-light leading-none tracking-tight mb-2 select-none">
              {officeCount}+
            </span>
            <span className="text-gray-300 text-[15px] sm:text-[16px] font-normal tracking-wide">
              Strategic Domestic Offices
            </span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-white text-[56px] sm:text-[64px] font-light leading-none tracking-tight mb-2 select-none">
              USA
            </span>
            <span className="text-gray-300 text-[15px] sm:text-[16px] font-normal tracking-wide">
              Global presence
            </span>
          </div>


          <div className="flex flex-col items-start">
            <span className="text-white text-[56px] sm:text-[64px] font-light leading-none tracking-tight mb-2 select-none">
              {expertCount}+
            </span>
            <span className="text-gray-300 text-[15px] sm:text-[16px] font-normal tracking-wide">
              Logistics Experts
            </span>
          </div>


          <div className="flex flex-col items-start">
            <span className="text-white text-[56px] sm:text-[64px] font-light leading-none tracking-tight mb-2 select-none">
              {awardCount}+
            </span>
            <span className="text-gray-300 text-[15px] sm:text-[16px] font-normal tracking-wide">
              Awards & Accolades
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}