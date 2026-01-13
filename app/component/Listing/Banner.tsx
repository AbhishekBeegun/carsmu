import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="max-w-7xl px-6 mx-auto relative w-full h-[300px] md:h-[350px] rounded-[32px] overflow-hidden my-4 group border border-white/5">
      {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
      <img 
        src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2070" 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
        alt="Promotion"
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      {/* 2. CONTENT LAYER */}
      <div className="relative h-full flex flex-col justify-center px-10 md:px-16 max-w-2xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-blue-500"></span>
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Exclusive Offer</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white leading-none italic uppercase">
          Upgrade to <br /> 
          <span className="text-blue-600">Pure Performance.</span>
        </h2>
        
        <p className="text-gray-300 text-sm md:text-base font-medium max-w-md leading-relaxed">
          Experience the 2026 Porsche lineup. Flexible financing available for premium members this month only.
        </p>

        <div className="pt-4">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl">
            Explore Collection
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute top-10 right-10 opacity-10 hidden md:block">
        <h3 className="text-[120px] font-black italic leading-none select-none text-white">CARS.MU</h3>
      </div>
    </div>
  );
};

export default PromoBanner;