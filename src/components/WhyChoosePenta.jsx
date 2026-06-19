import React from 'react';

// Icons named specifically as requested: icon1, icon2, icon3
import icon1 from '../assets/icon1.png'; // Update path/extension if needed
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const WHY_CHOOSE_DATA = [
  {
    id: 1,
    icon: icon1,
    title: 'Comprehensive Solutions',
    description: 'Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'Expertise and Experience',
    description: 'Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.'
  },
  {
    id: 3,
    icon: icon3,
    title: 'State-of-the-Art Facilities',
    description: 'Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.'
  }
];

export default function WhyChoosePenta() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
        
        {/* Left Side: Header Section */}
        <div className="w-full lg:w-[28%] flex-shrink-0">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            <span className="inline-flex items-center text-[14px] text-[#555] border border-gray-300 rounded-full px-4 py-1.5 font-normal">
              Why us
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[36px] sm:text-[42px] leading-[1.2] font-normal text-[#1a1a1a] tracking-tight">
            Why choose
            <br />
            <span className="text-[#7a7a7a]">Penta Freight.</span>
          </h2>
        </div>

        {/* Right Side: Features 3-Column Grid */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-3 gap-0">
          {WHY_CHOOSE_DATA.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-start p-6 md:p-8 text-left transition-all duration-300 hover:bg-neutral-50/50
                ${index !== 0 ? 'md:border-l md:border-gray-200/80' : ''} 
                ${index !== 0 ? 'border-t border-gray-100 md:border-t-0' : ''}`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 mb-8 flex items-center justify-start">
                <img 
                  src={item.icon} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Feature Title */}
              <h3 className="text-[#1a1a1a] text-[20px] sm:text-[21px] font-normal mb-4 tracking-tight">
                {item.title}
              </h3>

              {/* Feature Description */}
              <p className="text-[#6a6a6a] text-[14.5px] leading-[1.6] font-normal max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}