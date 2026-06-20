import React from 'react';
import { motion } from 'framer-motion';

import cert1 from '../assets/image1.png';
import cert2 from '../assets/image2.png';
import cert3 from '../assets/image3.png';
import cert4 from '../assets/image4.png';
import cert5 from '../assets/image5.png';

const certifications = [cert1, cert2, cert3, cert4, cert5];

const scrollCerts = [...certifications, ...certifications, ...certifications];

const CertificationCarousel = () => {
  return (
    <div className="bg-[#475868] py-16 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-[#E2622F] text-4xl md:text-5xl font-medium mb-4">
          Certifications
        </h2>
        <p className="text-white text-lg font-normal">
          Certified excellence, ensuring compliance, quality, and global logistics reliability.
        </p>
      </div>


      <motion.div
        className="flex gap-12 items-center"

        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {scrollCerts.map((cert, index) => (
          <motion.div 
            key={index} 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="flex-shrink-0 bg-white p-6 rounded-2xl w-[280px] h-[280px] flex items-center justify-center shadow-lg"
          >
            <img 
              src={cert} 
              alt={`Certification ${index}`} 
              className="max-h-full max-w-full object-contain" 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificationCarousel;