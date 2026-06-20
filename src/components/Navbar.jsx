import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showKuhlDropdown, setShowKuhlDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isOpen) return;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setShowKuhlDropdown(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <nav className={`w-full bg-white fixed top-0 z-40 px-6 md:px-8 py-3 md:pt-7 md:pb-7 select-none border-b border-gray-100/50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full flex justify-between items-center relative max-w-[1400px] mx-auto">
        
        <div className="md:hidden block">
          <a href="#contact" className="bg-[#ef6930] text-white text-[14px] font-bold px-5.5 py-2.5 rounded-xl shadow-sm tracking-wide block">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-12 lg:space-x-16 text-[18px] font-medium tracking-wider text-[#1a1a1a] mx-auto pl-20">
          <Link to="/" className="text-[#E96125] font-semibold transition-colors duration-150">HOME</Link>
          <a href="#about" className="hover:text-[#E96125] transition-colors duration-150">ABOUT US</a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#E96125] transition-colors duration-150">
            <span>SERVICES</span>
            <ChevronDown size={18} className="text-gray-800 group-hover:text-[#E96125] stroke-2" />
          </div>
          

          <Link to="/pentakuhl" ref={dropdownRef} className="relative cursor-pointer flex items-center gap-0.5" onClick={() => setShowKuhlDropdown(!showKuhlDropdown)}>
            <span className="text-[#6b7280] font-medium hover:text-[#E96125] transition-colors">Penta</span>
            <span className="text-[#00A4E4] font-bold hover:text-[#E96125] transition-colors">KÜHL</span>
            <ChevronDown size={18} className={`text-[#00A4E4] stroke-[2.5] transition-transform duration-200 ${showKuhlDropdown ? 'rotate-180' : ''}`} />
          </Link>
          
          <Link to="/industries" className="hover:text-[#E96125]">INDUSTRIES</Link>
          <a href="#careers" className="hover:text-[#E96125]">CAREERS</a>
          <a href="#contact" className="hover:text-[#E96125]">CONTACT</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(true)} className="text-black focus:outline-none p-1 block">
            <Menu size={28} className="stroke-[1.8]" />
          </button>
        </div>
      </div>


      <div className={`fixed inset-0 bg-white z-[100] md:hidden flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-6 py-4">
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#ef6930] text-white text-[16px] font-bold px-6 py-2.5 rounded-xl">Contact</a>
          <button onClick={() => setIsOpen(false)} className="p-2"><X size={32} /></button>
        </div>
        
        <div className="flex flex-col text-[14px] font-semibold text-black ">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-2 border-b border-gray-300 text-[#ef6930]">HOME</Link>
          <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-2 border-b border-gray-300">ABOUT US</a>
          
          <div className="border-b border-gray-300">
            <div className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={() => setShowServicesDropdown(!showServicesDropdown)}>
              <span>SERVICES</span>
              <ChevronRight size={24} />
            </div>
          </div>

          <div className="border-b border-gray-300">
            <Link to="/pentakuhl" className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              <div className="flex gap-1"><span className="text-gray-500">Penta</span><span className="text-[#00A4E4]">KÜHL</span></div>
              <ChevronRight size={24} />
            </Link>
          </div>

          <Link to="/industries" onClick={() => setIsOpen(false)} className="px-4 py-2 border-b border-gray-300">INDUSTRIES</Link>
          <a href="#careers" onClick={() => setIsOpen(false)} className="px-4 py-2 border-b border-gray-300">CAREERS</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 border-b border-gray-300">CONTACT</a>
        </div>

        <div className="mt-10 px-6">
          <h3 className="font-bold text-[18px] mb-3">Contact Info</h3>
          <a href="tel:+912262226222" className="block text-[#ef6930] font-semibold mb-3">+91 22-6222-6222</a>
          <p className="text-[14px] text-gray-700 leading-relaxed max-w-[280px]">
            902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059
          </p>
        </div>
      </div>
    </nav>
  );
}