import React, { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    id: 'lufthansa',
    company: 'Lufthansa Cargo',
    tagline: 'Networking the world.',
    logoColor: '#F5A623',
    quote:
      'Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India....',
    name: 'Frank Naeve',
    title: 'Vice President Asia Pacific'
  },
  {
    id: 'sunpharma',
    company: 'SUN PHARMA',
    tagline: '',
    logoColor: '#D9743F',
    quote:
      "We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making things possible. They have continued to innovate and change with the freight industry....",
    name: 'Makarand Sane',
    title: 'General Manager Head - Export Logistics'
  },
  {
    id: 'watson',
    company: 'Watson Pharmaceuticals',
    tagline: '',
    logoColor: '#1F6FB2',
    quote:
      "Penta Freight has been one of our export LSP's for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.",
    name: 'Ryan Veigas',
    title: 'Vice President - Supply Chain & Procurement'
  }
];

// Build long looping lists for each column, offset from one another
const COLUMN_A = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[2]];
const COLUMN_B = [TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[0]];

function CompanyLogo({ name, color }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-7 h-7 rounded-full flex-shrink-0 border-2"
        style={{ borderColor: color }}
      />
      <div>
        <p
          className="text-[17px] font-bold leading-tight tracking-tight"
          style={{ color }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 px-8 py-9 mb-6">
      <div className="mb-6">
        <CompanyLogo name={testimonial.company} color={testimonial.logoColor} />
        {testimonial.tagline && (
          <p className="text-[11px] text-gray-400 mt-0.5 ml-9">{testimonial.tagline}</p>
        )}
      </div>
      <p className="text-[#5a5a5a] text-[15px] leading-[1.75] text-center mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="text-[#1a1a1a] text-[17px] font-medium text-center">{testimonial.name}</p>
      <p className="text-[#8a8a8a] text-[14px] text-center">{testimonial.title}</p>
    </div>
  );
}

function MarqueeColumn({ items, direction = 'up', speed = 40, offset = 0 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let position = -offset;
    let lastTime = null;
    let rafId;
    let halfHeight = 0;

    const measure = () => {
      halfHeight = track.scrollHeight / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const step = (time) => {
      if (lastTime === null) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const dir = direction === 'up' ? -1 : 1;
      position += dir * speed * delta;

      if (halfHeight > 0) {
        if (position <= -halfHeight) position += halfHeight;
        if (position > 0) position -= halfHeight;
      }

      track.style.transform = `translateY(${position}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [direction, speed, offset]);

  return (
    <div className="relative h-full overflow-hidden">
      <div ref={trackRef} className="will-change-transform">
        {items.map((t, idx) => (
          <TestimonialCard key={`${t.id}-a-${idx}`} testimonial={t} />
        ))}
        {items.map((t, idx) => (
          <TestimonialCard key={`${t.id}-b-${idx}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsShowcase() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">

          {/* Left: sticky intro panel */}
          <div className="md:sticky md:top-24 self-start h-fit">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
              <span className="inline-flex items-center text-[14px] text-[#555] border border-gray-300 rounded-full px-4 py-1.5">
                Reviews
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[40px] leading-[1.2] font-normal text-[#1a1a1a] mb-5">
              Hear From Our Satisfied
              <br />
              <span className="text-[#9a9a9a]">Clients Worldwide.</span>
            </h2>
            <p className="text-[#3a3a3a] text-[15px] leading-[1.6] max-w-[420px]">
              Explore what industry leaders and long-term partners say about our commitment to excellence and innovation.
            </p>
          </div>

          {/* Right: two auto-scrolling marquee columns */}
          <div className="grid grid-cols-2 gap-5 h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
            <MarqueeColumn items={COLUMN_A} direction="up" speed={28} offset={0} />
            <MarqueeColumn items={COLUMN_B} direction="up" speed={28} offset={260} />
          </div>

        </div>
      </div>
    </section>
  );
}