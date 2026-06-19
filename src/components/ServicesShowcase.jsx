import React, { useEffect, useState } from 'react';

const SERVICES_DATA = [
  {
    id: 'air-freight',
    title: 'Air Freight',
    description: [
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
      'Our expert route planners optimize transit, carrier selection, and cargo handling.'
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    badges: ['Speed', 'Efficiency', 'Reliability', 'Affordability']
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    description: [
      'We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.',
      'We provide flexible FCL scheduling and cost-efficient LCL options.'
    ],
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop',
    badges: ['Flexibility', 'Cost-Effective', 'Scalability', 'Expertise']
  },
  {
    id: 'multi-modal',
    title: 'Multi Modal Transport',
    description: [
      'Every shipment is unique, so we offer multiple affordable transport options.',
      'Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.'
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    badges: ['Integration', 'Efficiency', 'Visibility', 'Convenience']
  }
];

function ServiceCard({ service, index }) {
  return (
    <div 
      className="w-full sticky mb-6 md:mb-10 transition-all duration-500 ease-in-out"
      style={{ 
        top: `${80 + (index * 30)}px`, // Responsive stack offset
        zIndex: index + 1
      }}
    >
      <div className="w-full bg-[#FDF8F7] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col md:flex-row h-auto md:h-[450px] shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300">
        
        {/* Responsive Image */}
        <div className="relative w-full md:w-[45%] h-[220px] md:h-auto overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          {/* Gradient Overlay for desktop readibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FDF8F7] hidden md:block" />
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%] p-6 sm:p-10 md:p-12 flex flex-col justify-center">
          <h3 className="text-[26px] sm:text-[32px] font-semibold text-[#1a1a1a] mb-4 tracking-tight leading-snug">{service.title}</h3>
          <div className="space-y-3 mb-6 text-[#555] text-[14px] sm:text-[15px] leading-[1.7]">
            {service.description.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.badges.map((b) => (
              <span key={b} className="bg-white border border-gray-200 text-[11px] font-medium px-3 py-1 rounded-full text-gray-600">
                {b}
              </span>
            ))}
          </div>
          <button className="bg-[#E2622F] text-white font-medium text-[13px] px-6 py-2.5 rounded-lg hover:bg-[#c95525] transition-all duration-300 w-fit hover:translate-x-1">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E2622F]" />
            <span className="text-[12px] uppercase tracking-widest font-bold">Logistics</span>
          </div>
          <h2 className="text-[32px] sm:text-[48px] md:text-[56px] font-medium leading-[1.1] text-[#1a1a1a]">
            Seamless Solutions for <br className="hidden md:block" />
            <span className="text-[#9a9a9a]">Every Logistics Need</span>
          </h2>
        </div>
        
        <div className="relative">
          {SERVICES_DATA.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}