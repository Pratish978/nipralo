import React, { useEffect, useState } from 'react';

const SERVICES_DATA = [
  {
    id: 'air-freight',
    title: 'Air Freight',
    description: [
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
      'Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.'
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    badges: ['Speed', 'Efficiency', 'Reliability', 'Affordability']
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    description: [
      'We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.',
      'With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.',
      'We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.'
    ],
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop',
    badges: ['Flexibility', 'Cost-Effective', 'Scalability', 'Expertise']
  },
  {
    id: 'multi-modal',
    title: 'Multi Modal Transport',
    description: [
      'Every shipment is unique, so we offer multiple affordable transport options.',
      'Along with air and sea freight, we provide multimodal transport via our global network.',
      'Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.'
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    badges: ['Integration', 'Efficiency', 'Visibility', 'Convenience']
  },
  {
    id: 'project-cargo',
    title: 'Project Cargo',
    description: [
      'We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications.',
      'We handle logistics, clearance, and oversized or breakbulk cargo with expertise.',
      'We transport over-dimensional cargo using open tops, flat racks, and flatbeds.'
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    badges: ['Precision', 'Expertise', 'Oversized', 'Security']
  },
  {
    id: 'custom-broking',
    title: 'Custom Broking',
    description: [
      'Our licensed customs agents know domestic and international regulations.',
      'With 30+ years of experience, we have strong ties with authorities and handle all clearance challenges.',
      'We ensure smooth, timely, and transparent cargo clearance. Our experts get your documentation right the first time.'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    badges: ['Accuracy', 'Compliance', 'Speed', 'Expertise']
  },
  {
    id: 'transit-warehouse',
    title: 'Transit Warehouse and Fleet',
    description: [
      'Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.',
      'We offer storage for all cargo types, including temperature-controlled (15-25°C, 2-8°C), DGR, and general cargo zones.',
      'We provide specialized packaging, palletizing, and shrink wrapping.',
      'Our reefer and general trucks ensure smooth nationwide transportation.'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    badges: ['Specialized', 'Accessible', 'Versatile', 'Nationwide']
  }
];

function ServiceCard({ service, index }) {
  return (
    <div 
      className="w-full sticky top-[100px] mb-24 last:mb-0 transition-transform duration-500 ease-out"
      style={{ 
        zIndex: index + 1,
        transformOrigin: 'top center'
      }}
    >

      <div className="w-full bg-[#FDF8F7] rounded-[28px] overflow-hidden flex flex-col md:flex-row min-h-[440px] md:h-[480px] shadow-[0_-10px_35px_rgba(0,0,0,0.02),0_25px_50px_rgba(0,0,0,0.04)] border border-orange-100/10">
        

        <div className="relative w-full md:w-[48%] h-[260px] md:h-auto overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FDF8F7] hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDF8F7] block md:hidden" />
        </div>


        <div className="w-full md:w-[52%] p-8 sm:p-12 md:p-14 flex flex-col justify-center items-start text-left">
          <h3 className="text-[#1a1a1a] text-[28px] sm:text-[34px] font-medium mb-5 tracking-tight">
            {service.title}
          </h3>

          <div className="space-y-4 max-w-[540px] mb-8 text-[#3a3a3a] text-[14.5px] sm:text-[15px] leading-[1.65] font-normal">
            {service.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>


          <div className="flex flex-wrap gap-2.5 mb-8">
            {service.badges.map((badge) => (
              <span
                key={badge}
                className="bg-white text-[#555555] border border-gray-200/60 text-[12.5px] font-normal px-5 py-1.5 rounded-full shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>


          <button className="bg-[#E2622F] hover:bg-[#cc551f] text-white font-medium text-[14px] px-8 py-3 rounded-xl transition-colors duration-200 tracking-wide shadow-2xs">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
}

export default function ServicesShowcase() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeaderVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-[1280px] mx-auto">


        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
              <span className="inline-flex items-center text-[14px] text-[#555] border border-gray-300 rounded-full px-4 py-1.5">
                Services
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[42px] leading-[1.15] font-normal text-[#1a1a1a]">
              Seamless Solutions for
              <br />
              <span className="text-[#9a9a9a]">Every Logistics Need</span>
            </h2>
          </div>
          <p className="text-[#3a3a3a] text-[15px] leading-[1.6] max-w-[340px] md:text-right md:pt-2">
            Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}