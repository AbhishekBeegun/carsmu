import React from 'react';
import { Heart, Gauge, Zap, MapPin } from 'lucide-react';

const ListingCardCompact = ({ car }:any) => {
  return (
    <div className="group cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-blue-500/50">
      
      {/* Image Wrapper - Compact 16:9 Aspect */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt={car.model} 
        />
        
        {/* Glass Price Tag - Floating over image */}
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <p className="text-white text-sm font-black">R {car.price}</p>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-red-500 backdrop-blur-sm transition-all">
          <Heart size={16} className="text-white" />
        </button>
      </div>

      {/* Details - Minimalist and Tight */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-white font-bold text-base leading-tight">
            {car.brand} <span className="text-gray-400 font-medium">{car.model}</span>
          </h3>
          {car.isPremier && (
             <Zap size={14} className="text-blue-500 fill-blue-500" />
          )}
        </div>

        {/* Specs Row - Single Line Ticker Style */}
        <div className="flex items-center gap-3 mt-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Gauge size={12} className="text-gray-500" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{car.mileage} KM</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter flex-shrink-0">
            {car.transmission}
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <MapPin size={12} className="text-gray-500" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">CPT</span>
          </div>
        </div>

        {/* Monthly Installment - Subtle */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-[10px] text-gray-500 font-medium italic">
            Est. R {car.monthly} p/m
          </p>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest group-hover:underline">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingCardCompact;