import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showKuhlDropdown, setShowKuhlDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Mobile drawer open hone par window scroll lock karne ke liye hook
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowKuhlDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white sticky top-0 z-40 px-6 md:px-8 pt-5 pb-5 select-none border-b border-gray-100/50">
      <div className="w-full flex justify-between items-center relative max-w-350 mx-auto">
        
        {/* ================= MOBILE VIEW BRANDING / CONTACT PILL ================= */}
        {/* Hamburger closed ya open ho, ye button screen ke left side par hamesha fixed orange text me block ban kar dikhega */}
        <div className="md:hidden block">
          <a 
            href="#contact" 
            className="bg-[#E96125] text-white text-[14px] font-bold px-5.5 py-2.5 rounded-xl shadow-sm tracking-wide block"
          >
            Contact
          </a>
        </div>

        {/* Desktop Logo Spacer (Only shows on screen devices >= 768px) */}
        <div className="hidden md:block absolute left-0 shrink-0">
          <div className="w-6 h-4"></div>
        </div>

        {/* ================= DESKTOP LINKS STACK ================= */}
        <div className="hidden md:flex items-center space-x-9 lg:space-x-11 text-[15px] font-medium tracking-wider text-[#1a1a1a] mx-auto pl-10">
          <a href="/" className="text-[#E96125] font-semibold transition-colors duration-150">
            HOME
          </a>
          <a href="#about" className="hover:text-[#E96125] transition-colors duration-150">
            ABOUT US
          </a>
          
          {/* Services Main Tab */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#E96125] transition-colors duration-150">
            <span>SERVICES</span>
            <ChevronDown size={14} className="text-gray-800 group-hover:text-[#E96125] stroke-2" />
          </div>

          {/* PentaKÜHL Dropdown Element */}
          <div 
            ref={dropdownRef}
            className="relative cursor-pointer flex items-center gap-0.5 text-[15px]"
            onClick={() => setShowKuhlDropdown(!showKuhlDropdown)}
          >
            <span className="text-[#6b7280] font-medium hover:text-[#E96125] transition-colors">Penta</span>
            <span className="text-[#00A4E4] font-bold hover:text-[#E96125] transition-colors">KÜHL</span>
            <ChevronDown 
              size={14} 
              className={`text-[#00A4E4] stroke-[2.5] transition-transform duration-200 ${showKuhlDropdown ? 'rotate-180' : ''}`} 
            />

            {/* Desktop Option Boxes */}
            {showKuhlDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white border border-gray-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-3xl py-6 px-7 z-50 transition-all duration-200">
                <div className="flex flex-col space-y-5 text-left font-normal text-[15px] tracking-normal text-gray-800">
                  <a href="/pentakuhl/parcel-shippers" className="hover:text-[#E96125] transition-colors block">
                    Parcel Shippers
                  </a>
                  <a href="/pentakuhl/pallet-shippers" className="hover:text-[#E96125] transition-colors block">
                    Pallet Shippers
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/industries" className="hover:text-[#E96125] transition-colors duration-150">
            INDUSTRIES
          </a>
          <a href="#careers" className="hover:text-[#E96125] transition-colors duration-150">
            CAREERS
          </a>
          <a href="#contact" className="hover:text-[#E96125] transition-colors duration-150">
            CONTACT
          </a>
        </div>

        {/* ================= MOBILE HAMBURGER BUTTON ================= */}
        {/* Right side alignment toggle tool */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(true)} 
            className="text-black focus:outline-none p-1 block"
            aria-label="Open Menu"
          >
            <Menu size={28} className="stroke-[1.8]" />
          </button>
        </div>
      </div>

      {/* ================= FULL HEIGHT SLIDE-IN SIDE PANEL DRAWER ================= */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col h-screen overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Internal Top Control Block */}
        <div className="flex justify-between items-center px-6 pt-5 pb-4 bg-white border-b border-gray-100/40">
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#E96125] text-white text-[14px] font-bold px-5.5 py-2.5 rounded-xl shadow-sm tracking-wide block"
          >
            Contact
          </a>
          {/* Right Aligned X Icon to Close Side Drawer Panel */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-black focus:outline-none p-1 block"
            aria-label="Close Menu"
          >
            <X size={28} className="stroke-[1.8]" />
          </button>
        </div>

        {/* Links Navigation Accordion Tree Stack */}
        <div className="flex flex-col text-[15px] font-bold tracking-wider text-black bg-white">
          <a 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="text-[#E96125] border-b border-gray-100/70 px-6 py-4.5 transition-colors block animate-fade-in"
          >
            HOME
          </a>
          
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="border-b border-gray-100/70 px-6 py-4.5 hover:text-[#E96125] transition-colors block"
          >
            ABOUT US
          </a>
          
          {/* Services Accordion Block */}
          <div className="border-b border-gray-100/70">
            <div 
              className="flex justify-between items-center px-6 py-4.5 cursor-pointer hover:text-[#E96125]"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              <span>SERVICES</span>
              <ChevronRight size={16} className={`text-gray-600 transition-transform duration-200 ${showServicesDropdown ? 'rotate-90 text-[#E96125]' : ''}`} />
            </div>
            {showServicesDropdown && (
              <div className="bg-gray-50/70 pl-10 pr-6 py-2 flex flex-col space-y-3 text-[14px] text-gray-600 font-normal tracking-normal border-t border-gray-100/40">
                <a href="/services/parcel" onClick={() => setIsOpen(false)} className="py-1 hover:text-[#E96125]">Parcel Delivery</a>
                <a href="/services/logistics" onClick={() => setIsOpen(false)} className="py-1 hover:text-[#E96125]">Cold Chain Logistics</a>
              </div>
            )}
          </div>
          
          {/* PentaKÜHL Accordion Block */}
          <div className="border-b border-gray-100/70">
            <div 
              className="flex justify-between items-center px-6 py-4.5 cursor-pointer"
              onClick={() => setShowKuhlDropdown(!showKuhlDropdown)}
            >
              <div className="flex items-center gap-0.5">
                <span className="text-gray-500 font-medium">Penta</span>
                <span className="text-[#00A4E4] font-bold">KÜHL</span>
              </div>
              <ChevronRight size={16} className={`text-gray-600 transition-transform duration-200 ${showKuhlDropdown ? 'rotate-90' : ''}`} />
            </div>
            {showKuhlDropdown && (
              <div className="bg-gray-50/70 pl-10 pr-6 py-2 flex flex-col space-y-3 text-[14px] text-gray-700 font-medium tracking-normal border-t border-gray-100/40">
                <a href="/pentakuhl/parcel-shippers" onClick={() => setIsOpen(false)} className="py-1 hover:text-[#E96125]">Parcel Shippers</a>
                <a href="/pentakuhl/pallet-shippers" onClick={() => setIsOpen(false)} className="py-1 hover:text-[#E96125]">Pallet Shippers</a>
              </div>
            )}
          </div>

          <a 
            href="/industries" 
            onClick={() => setIsOpen(false)} 
            className="border-b border-gray-100/70 px-6 py-4.5 hover:text-[#E96125] transition-colors block"
          >
            INDUSTRIES
          </a>
          
          <a 
            href="#careers" 
            onClick={() => setIsOpen(false)} 
            className="border-b border-gray-100/70 px-6 py-4.5 hover:text-[#E96125] transition-colors block"
          >
            CAREERS
          </a>
          
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="border-b border-gray-100/70 px-6 py-4.5 hover:text-[#E96125] transition-colors block"
          >
            CONTACT
          </a>
        </div>

        {/* Footer Contact Info Segment block exactly like image_587fbc.png */}
        <div className="mt-auto px-6 pt-10 pb-8 bg-white border-t border-gray-50">
          <h3 className="text-black font-bold text-[16px] mb-2.5 tracking-wide">Contact Info</h3>
          <a href="tel:+912262226222" className="text-[#E96125] text-[14px] font-semibold block mb-2 underline underline-offset-4 decoration-1">
            +91 22-6222-6222
          </a>
          <p className="text-gray-800 text-[13px] leading-relaxed font-medium max-w-xs underline underline-offset-4 decoration-gray-200">
            902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059
          </p>
        </div>
      </div>
    </nav>
  );
}