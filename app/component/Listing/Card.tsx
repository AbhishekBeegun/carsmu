import React from 'react';
import { Heart, Calendar, Gauge, Settings2, MapPin, ArrowUpRight } from 'lucide-react';

const RegularListing = ({ car }: any) => {
  return (
    <div className="mb-3 group relative w-full md:h-[180px] bg-transparent border-b border-white/5 md:border md:border-white/5 rounded-[20px] overflow-hidden hover:bg-white/[0.02] transition-all duration-300 flex flex-col md:flex-row items-center">
      
      {/* 1. IMAGE SECTION: Smaller & Tighter than Sponsored */}
      <div className="relative w-full md:w-[280px] aspect-video md:aspect-auto h-45 md:h-full overflow-hidden shrink-0">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={14} />
        </button>
      </div>

      {/* 2. DATA SECTION: Spread out horizontally */}
      <div className="flex-1 w-full p-6 md:px-8 flex flex-col items-start justify-between gap-4">
        
        {/* Brand & Model */}
        <div className="">
          <h3 className="text-lg font-black text-white uppercase">
            {car.brand} <span className="text-gray-500 font-medium">{car.model}</span>
          </h3>
          <p className="text-[10px] font-bold text-blue-500 uppercase mt-1">{car.variant}</p>
        </div>

        {/* Specs Strip: Minimalist Icons */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-gray-600 uppercase">Year</span>
            <span className="text-xs font-black text-gray-300">{car.year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-gray-600 uppercase">Mileage</span>
            <span className="text-xs font-black text-gray-300">{car.mileage}km</span>
          </div>
          <div className="hidden lg:flex flex-col gap-1">
            <span className="text-[9px] font-bold text-gray-600 uppercase">Trans</span>
            <span className="text-xs font-black text-gray-300 uppercase">{car.transmission[0]}</span>
          </div>
        </div>

        {/* Price & Action: The "Clean" look */}
        <div className="flex items-center justify-between md:justify-end md:gap-12 pt-4 md:pt-0 border-t md:border-none border-white/5">
          <div className="text-left md:text-right">
            <p className="text-xl font-black text-white">R {car.price}</p>
            <p className="text-[10px] font-medium text-gray-500 uppercase">R {car.monthly} p/m</p>
          </div>
          
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all group/btn">
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>

      {/* Location Badge (Mobile Only / Bottom Corner Desktop) */}
      <div className="absolute bottom-2 right-12 md:right-auto md:left-[250px] flex items-center gap-1 opacity-40">
        <MapPin size={10} className="text-gray-500" />
        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{car.location}</span>
      </div>
    </div>
  );
};

export default RegularListing;