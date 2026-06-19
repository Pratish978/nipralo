import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import ServicesShowcase from '../components/ServicesShowcase';
import WhyChoosePenta from '../components/WhyChoosePenta';
import OurAchievements from '../components/OurAchievements';
import Testimonial from '../components/TestimonialsShowcase';
import CertificationShowcase from '../components/CertificationShowcase';
import AwardsSection from '../components/AwardsSection';
import GlobalFootprint from '../components/GlobalFootprint';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <ServicesShowcase />
      <WhyChoosePenta />
      <OurAchievements />
      <Testimonial />
      <CertificationShowcase />
      <AwardsSection />
      <GlobalFootprint />
    </>
  );
}