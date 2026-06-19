import React from 'react';

const INDIA_OFFICES = [
  { city: 'Mumbai', lines: ["902, 'A' Wing, Times Square,", 'Andheri-Kurla Road, Marol,', 'Andheri (East), Mumbai 400 059'], phones: ['+91 22-6222-6222'] },
  { city: 'Ahmedabad', lines: ['D21 The Address, True Value', 'West Gate, SG highway,', 'Ahmedabad 380 009'], phones: ['+91 7940227900'] },
  { city: 'Bengaluru', lines: ['205, 2nd floor,', 'Connection point H.A.L Airport', 'Exit Road, Bangalore 560 017'], phones: ['+91 80-4112-5590'] },
  { city: 'Chennai', lines: ['Flat no.A1, 1st floor,', 'No 24 Vembuli Amman koil Street,', 'Palavanthangal Chennai- 600 114'], phones: ['+91-44-22241462/ 1464'] },
  { city: 'Delhi', lines: ['Penta Freight Pvt. Ltd. Khasra No.', '10/1/10/2, 11/5/1, No. 4, Samalkha,', 'Old Delhi – Gurgaon Road, Opposite', 'Primary School, New Delhi – 110 037'], phones: ['+91 11-4078-2222'] },
  { city: 'Hyderabad', lines: ['G-27 & 28, Cargo Satellite Building,', 'Rajiv Gandhi International Airport,', 'Shamshabad 501 218, Telangana, India'], phones: ['+91 40-2400-4048'] },
  { city: 'Kolkata', lines: ['131, Jangalpur Road, near airport,', 'Gate No. 3, Motilal Colony, P.O Rajbari,', 'Kolkata 700 081, West Bengal'], phones: ['+91 33-2514-7089'] }
];

const USA_OFFICES = [
  { city: 'Chicago', lines: ['Penta Freight Pvt.Ltd 5100 Newport Dr.', 'Sute 4, Rolling Meadows, IL 60008 USA'], phones: ['+040 234 6559', '+224 434 2154'] }
];

function OfficeBlock({ office }) {
  return (
    <div className="flex flex-col items-start text-left">
      <h4 className="text-[22px] font-normal text-[#1a1a1a] mb-5">{office.city}</h4>
      <div className="text-[#6a6a6a] text-[14px] leading-[1.65] mb-2.5 w-full">
        {office.lines.map((line, idx) => <p key={idx}>{line}</p>)}
      </div>
      <div className="text-[#6a6a6a] text-[14px] font-normal">
        {office.phones.join(' / ')}
      </div>
    </div>
  );
}

function RegionHeader({ highlight, description }) {
  return (
    <div className="flex flex-col items-start text-left">
      <h3 className="text-[32px] font-normal text-[#1a1a1a] mb-5">Our <span className="text-[#E2622F]">{highlight}</span> Offices</h3>
      <p className="text-[#1a1a1a] text-[14.5px] leading-[1.55] max-w-[240px]">{description}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-20">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* India Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <RegionHeader highlight="India" description="Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience." />
          {INDIA_OFFICES.map((office) => <OfficeBlock key={office.city} office={office} />)}
        </div>

        {/* USA Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <RegionHeader highlight="USA" description="Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents." />
          {USA_OFFICES.map((office) => <OfficeBlock key={office.city} office={office} />)}
        </div>

        {/* Bottom Metadata */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-[#4a4a4a]">
          <p>© 2026 Penta Freight. All Rights Reserved Developed by Nipralo</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <a href="#" className="hover:text-black">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}