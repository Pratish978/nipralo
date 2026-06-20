import React, { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  { id: 'lufthansa', company: 'Lufthansa Cargo', tagline: 'Networking the world.', logoColor: '#F5A623', quote: 'Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner...', name: 'Frank Naeve', title: 'Vice President Asia Pacific' },
  { id: 'sunpharma', company: 'SUN PHARMA', tagline: '', logoColor: '#D9743F', quote: "We highly regard Penta Freight's professionalism and knowledge in the freight field...", name: 'Makarand Sane', title: 'General Manager Head - Export Logistics' },
  { id: 'watson', company: 'Watson Pharmaceuticals', tagline: '', logoColor: '#1F6FB2', quote: "Penta Freight has been one of our export LSP's for several years and our experience...", name: 'Ryan Veigas', title: 'Vice President - Supply Chain & Procurement' }
];

const COLUMN_A = [...TESTIMONIALS, ...TESTIMONIALS];
const COLUMN_B = [...TESTIMONIALS.reverse(), ...TESTIMONIALS.reverse()];

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[300px] md:w-full bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 px-6 py-8 flex-shrink-0 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full border-2" style={{ borderColor: testimonial.logoColor }} />
        <p className="font-bold" style={{ color: testimonial.logoColor }}>{testimonial.company}</p>
      </div>
      <p className="text-[#5a5a5a] text-[14px] leading-relaxed text-center mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="font-semibold text-center">{testimonial.name}</p>
      <p className="text-[12px] text-gray-500 text-center">{testimonial.title}</p>
    </div>
  );
}

export default function TestimonialsShowcase() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-10">
        

        <div className="md:sticky md:top-24 h-fit">
          <h2 className="text-[34px] md:text-[40px] leading-tight mb-4">Hear From Our Satisfied<br/><span className="text-gray-400">Clients Worldwide.</span></h2>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6 h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] overflow-hidden">
          <div className="animate-marquee-vertical">
            {COLUMN_A.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
          <div className="animate-marquee-vertical-reverse">
            {COLUMN_B.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
        </div>

        <div className="md:hidden w-screen -mx-6 overflow-hidden">
          <div className="flex gap-4 animate-marquee-horizontal w-max px-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes horizontal { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-vertical { animation: vertical 20s linear infinite; }
        .animate-marquee-vertical-reverse { animation: vertical 20s linear infinite reverse; }
        .animate-marquee-horizontal { animation: horizontal 30s linear infinite; }
      `}</style>
    </section>
  );
}