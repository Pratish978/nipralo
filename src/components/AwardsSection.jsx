import React from 'react';
import { motion } from 'framer-motion';

// Replace these imports with your actual file paths for 16 images
import award1 from '../assets/award1.png';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';
import award4 from '../assets/award4.png';
import award5 from '../assets/award5.png';
import award6 from '../assets/award6.png';
import award7 from '../assets/award7.png';
import award8 from '../assets/award8.png';
import award9 from '../assets/award9.png';
import award10 from '../assets/award10.png';
import award11 from '../assets/award11.png';
import award12 from '../assets/award12.png';
import award13 from '../assets/award13.png';
import award14 from '../assets/award14.png';
import award15 from '../assets/award15.png';
import award16 from '../assets/award16.png';

const awardsData = [
  { id: 1, img: award1, title: "Top Cargo Agent, 2016/17" },
  { id: 2, img: award2, title: "Top Revenue Performance, 2002" },
  { id: 3, img: award3, title: "Mega Tonners, 2006/07" },
  { id: 4, img: award4, title: "CONCOR Exim Star, 2003/04" },
  { id: 5, img: award5, title: "Meritorious Performance, 1999/2000" },
  { id: 6, img: award6, title: "Top Performance, 2008" },
  { id: 7, img: award7, title: "Significant Support, 2007" },
  { id: 8, img: award8, title: "Excellence in Air Cargo, 2018" },
  { id: 9, img: award9, title: "Best Performance, 2017" },
  { id: 10, img: award10, title: "Top Cargo Agent, 2003/04" },
  { id: 11, img: award11, title: "Outstanding Quality, 2007" },
  { id: 12, img: award12, title: "Best Business Mix, 2006/07" },
  { id: 13, img: award13, title: "Premium Partner, 2017" },
  { id: 14, img: award14, title: "Significant Contribution, 2000/01" },
  { id: 15, img: award15, title: "Asia Partner, 2014" },
  { id: 16, img: award16, title: "Outstanding Performance, 2006" },
];

export default function AwardsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-[#1a1a1a] text-5xl font-bold mb-16 text-center">
          Awards
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.2)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center"
            >
              {/* BIG IMAGE SIZE */}
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={award.img} 
                alt={award.title} 
                className="h-48 w-full object-contain mb-10"
              />
              {/* BIG TEXT SIZE */}
              <p className="text-[#333] text-lg font-semibold leading-snug">
                {award.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}