import React, { useState } from 'react';
import { Search, ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-react';

const FilterSection = ({ title, children } : any) => (
  <div className="border-b border-white/5 py-6">
    <div className="flex items-center justify-between mb-4 group cursor-pointer">
      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
        {title}
      </h4>
      <ChevronDown size={14} className="text-gray-700" />
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const FilterAside = () => {
  return (
    <aside className="w-full lg:w-[300px] shrink-0 pr-4 pt-2">
      <div className="sticky top-24 space-y-2">
        
        {/* Header & Reset */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-blue-500" />
            <span className="text-sm font-black text-white uppercase italic">Filters</span>
          </div>
          <button className="flex items-center gap-1 text-[10px] font-bold text-gray-600 hover:text-white transition-colors uppercase">
            <RotateCcw size={10} /> Reset
          </button>
        </div>

        {/* Global Search Input */}
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="Search Keyword..." 
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none transition-all"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={14} />
        </div>

        <div className="bg-white/[0.01] border border-white/5 rounded-[24px] p-6 shadow-2xl">
          
          {/* Brand Selection */}
          <FilterSection title="Manufacturer">
            {['Porsche', 'Mercedes-Benz', 'BMW', 'Audi', 'Land Rover'].map((brand) => (
              <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-4 h-4 border border-white/10 rounded bg-white/[0.02] group-hover:border-blue-500 transition-all flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors">{brand}</span>
              </label>
            ))}
          </FilterSection>

          {/* Price Range Slider */}
          <FilterSection title="Price Range">
            <div className="space-y-4 pt-2">
              <div className="h-1 w-full bg-white/5 rounded-full relative">
                <div className="absolute h-full w-2/3 bg-blue-600 rounded-full left-0" />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-white rounded-full shadow-lg cursor-pointer" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-3 h-3 bg-white rounded-full shadow-lg cursor-pointer" />
              </div>
              <div className="flex justify-between text-[10px] font-black text-white italic">
                <span>R 250k</span>
                <span>R 5.0m+</span>
              </div>
            </div>
          </FilterSection>

          {/* Year Range */}
          <FilterSection title="Model Year">
             <div className="grid grid-cols-2 gap-2">
                <select className="bg-white/[0.05] border border-white/10 rounded-lg p-2 text-[10px] font-bold text-white outline-none">
                  <option>2020</option>
                </select>
                <select className="bg-white/[0.05] border border-white/10 rounded-lg p-2 text-[10px] font-bold text-white outline-none">
                  <option>2026</option>
                </select>
             </div>
          </FilterSection>

          {/* Transmission */}
          <FilterSection title="Transmission">
             <div className="flex flex-wrap gap-2">
                {['Auto', 'Manual'].map(t => (
                  <button key={t} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-[10px] font-black text-gray-500 hover:text-white hover:border-blue-500 transition-all uppercase">
                    {t}
                  </button>
                ))}
             </div>
          </FilterSection>

        </div>
      </div>
    </aside>
  );
};

export default FilterAside;