import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, User, Search, Globe, Car, ShieldCheck } from 'lucide-react';

const GlobalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glass intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inventory', href: '/inventory' },
    { name: 'Sell My Car', href: '/sell' },
    { name: 'Finance', href: '/finance' },
    { name: 'The Network', href: '/network' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 font-poppins ${
        scrolled ? 'py-4' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`relative flex items-center justify-between px-8 py-4 rounded-[24px] transition-all duration-500 border ${
            scrolled 
            ? 'bg-gray-950/80 backdrop-blur-2xl border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
          }`}>
            
            {/* LOGO */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
                <Car size={18} />
              </div>
              <span className="text-xl font-black italic uppercase text-white leading-none">
                Elite<span className="text-blue-500">Cars</span>
              </span>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] font-bold uppercase text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition-all">
                <Search size={18} />
              </button>
              <div className="h-4 w-px bg-white/10" />
              <button className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-xl text-[11px] font-black uppercase text-white hover:bg-white hover:text-blue-600 transition-all shadow-lg shadow-blue-600/20">
                <User size={14} /> Account
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 z-[200] bg-gray-950 transition-transform duration-700 ease-in-out font-poppins ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Car size={18} />
              </div>
              <span className="text-xl font-black italic uppercase text-white">EliteCars</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-4 bg-white/5 rounded-full text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-8 mb-auto">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex items-center justify-between py-4 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-4xl font-black italic uppercase text-white group-hover:text-blue-500 transition-colors">
                  {link.name}
                </span>
                <ChevronRight size={24} className="text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <button className="w-full bg-blue-600 py-6 rounded-2xl font-black uppercase text-[12px] text-white">
              Client Login
            </button>
            <div className="flex justify-center gap-8 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              <span>Privacy</span>
              <span>Terms</span>
              <span>South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalNav;