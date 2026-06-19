import React from 'react';

const INDIA_OFFICES = [
  {
    city: 'Mumbai',
    lines: ["902, 'A' Wing, Times Square,", 'Andheri-Kurla Road, Marol,', 'Andheri (East), Mumbai 400 059'],
    phones: ['+91 22-6222-6222']
  },
  {
    city: 'Ahmedabad',
    lines: ['D21 The Address, True Value', 'West Gate, SG highway,', 'Ahmedabad 380 009'],
    phones: ['+91 7940227900']
  },
  {
    city: 'Bengaluru',
    lines: ['205, 2nd floor,', 'Connection point H.A.L Airport', 'Exit Road, Bangalore 560 017'],
    phones: ['+91 80-4112-5590']
  },
  {
    city: 'Chennai',
    lines: ['Flat no.A1, 1st floor,', 'No 24 Vembuli Amman koil Street,', 'Palavanthangal Chennai- 600 114'],
    phones: ['+91-44-22241462/ 1464']
  },
  {
    city: 'Delhi',
    lines: [
      'Penta Freight Pvt. Ltd. Khasra No.',
      '10/1/10/2, 11/5/1, No. 4, Samalkha,',
      'Old Delhi – Gurgaon Road, Opposite',
      'Primary School, New Delhi – 110 037'
    ],
    phones: ['+91 11-4078-2222']
  },
  {
    city: 'Hyderabad',
    lines: ['G-27 & 28, Cargo Satellite Building,', 'Rajiv Gandhi International Airport,', 'Shamshabad 501 218, Telangana, India'],
    phones: ['+91 40-2400-4048']
  },
  {
    city: 'Kolkata',
    lines: ['131, Jangalpur Road, near airport,', 'Gate No. 3, Motilal Colony, P.O Rajbari,', 'Kolkata 700 081, West Bengal'],
    phones: ['+91 33-2514-7089']
  }
];

const USA_OFFICES = [
  {
    city: 'Chicago',
    lines: ['Penta Freight Pvt.Ltd 5100 Newport Dr.', 'Sute 4, Rolling Meadows, IL 60008 USA'],
    phones: ['+040 234 6559', '+224 434 2154']
  }
];

// Clean abstract CSS pattern map emulation to replicate screenshot background texture
function DiagonalPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="footer-diagonal-lines" width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="0" y1="60" x2="60" y2="0" stroke="#f4f4f5" strokeWidth="1.2" />
        </pattern>
        <linearGradient id="footer-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="40%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-diagonal-lines)" />
      <rect width="100%" height="100%" fill="url(#footer-fade)" className="mix-blend-overlay" />
    </svg>
  );
}

function OfficeBlock({ office }) {
  return (
    <div className="flex flex-col items-start text-left">
      <h4 className="text-[22px] font-normal text-[#1a1a1a] mb-5 tracking-tight">
        {office.city}
      </h4>
      <div className="text-[#6a6a6a] text-[14px] leading-[1.65] mb-2.5 font-normal max-w-[260px]">
        {office.lines.map((line, idx) => (
          <p key={idx} className="truncate-0 whitespace-normal">{line}</p>
        ))}
      </div>
      <div className="text-[#6a6a6a] text-[14px] font-normal flex flex-wrap items-center">
        {office.phones.map((phone, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-[#8a8a8a] mx-1.5">/</span>}
            <span>{phone}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function RegionHeader({ prefix, highlight, suffix, description }) {
  return (
    <div className="flex flex-col items-start text-left pr-4">
      <h3 className="text-[32px] font-normal text-[#1a1a1a] mb-5 tracking-tight leading-tight">
        {prefix} <span className="text-[#E2622F]">{highlight}</span> {suffix}
      </h3>
      <p className="text-[#1a1a1a] text-[14.5px] leading-[1.55] font-normal max-w-[240px]">
        {description}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-white overflow-hidden border-t border-gray-100">
      <DiagonalPattern />

      {/* Outer Layout Context Frame */}
      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-8 z-10">

        {/* Region Row Block 1: India Matrix Layout Setup */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          <RegionHeader
            prefix="Our"
            highlight="India"
            suffix="Offices"
            description="Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience."
          />
          {INDIA_OFFICES.slice(0, 3).map((office) => (
            <OfficeBlock key={office.city} office={office} />
          ))}

          {/* Grid structural alignment offset line breakout shift matching design exactly */}
          <div className="hidden md:block" /> 
          {INDIA_OFFICES.slice(3, 7).map((office) => (
            <OfficeBlock key={office.city} office={office} />
          ))}
        </div>

        {/* Region Row Block 2: USA Matrix Layout Setup */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          <RegionHeader
            prefix="Our"
            highlight="USA"
            suffix="Office"
            description="Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents."
          />
          {USA_OFFICES.map((office) => (
            <OfficeBlock key={office.city} office={office} />
          ))}
        </div>

        {/* Bottom Metadata Alignment Layout Frame */}
        <div className="border-t border-gray-200/70 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-[#4a4a4a]">
          
          {/* Copyright node */}
          <p className="font-normal order-2 md:order-1 text-center md:text-left">
            © 2026 Penta Freight. All Rights Reserved Developed by Nipralo
          </p>

          {/* Social node layout anchor */}
          <div className="flex items-center justify-center order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <a
              href="#"
              aria-label="LinkedIn Profile Reference Link"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-neutral-50 transition-all duration-200 shadow-sm"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>

          {/* Sub navigation references row */}
          <div className="flex items-center justify-center gap-2.5 order-3 font-normal">
            <a href="#" className="text-[#4a4a4a] hover:text-black transition-colors duration-150">Privacy Policy</a>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <a href="#" className="text-[#4a4a4a] hover:text-black transition-colors duration-150">Terms and Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}