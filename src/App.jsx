import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import ServicesShowcase from './components/ServicesShowcase'
import WhyChoosePenta from './components/WhyChoosePenta'
import OurAchievements from './components/OurAchievements'
import TestimonialsShowcase from './components/TestimonialsShowcase'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Philosophy/>
    <ServicesShowcase/>
    <WhyChoosePenta/>
    <OurAchievements/>
    <TestimonialsShowcase/>
    </>
  )
}