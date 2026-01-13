import React from 'react';
import { Heart, Calendar, Gauge, Settings2, MapPin, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const SponsoredCard = ({ car }: any) => {
  return (
    <Link to={"/vehicleDetails"} className="group relative mb-4 w-full md:h-[180px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-[24px] overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col md:flex-row shadow-2xl">
      
      {/* 1. IMAGE SECTION */}
      {/* Mobile: Full width, fixed aspect ratio | Desktop: Fixed width 280px */}
      <div className="relative w-full md:w-[280px] aspect-video md:aspect-auto h-45 md:h-full overflow-hidden shrink-0">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Floating Price Tag */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10">
            <p className="text-white font-black text-lg tracking-tight">R {car.price}</p>
          </div>
        </div>

        {/* Sponsored Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded-lg flex items-center gap-1 uppercase">
            <Zap size={10} fill="currentColor" /> Sponsored
          </div>
        </div>
        
        {/* Image Count */}
        <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-[9px] font-bold text-white px-2 py-1 rounded-md">
           {car.imageCount || 24}
        </div>
      </div>

      {/* 2. DATA SECTION */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
        
        {/* Top Row: Brand & Heart */}
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <h3 className="text-lg md:text-xl font-black text-white italic leading-tight uppercase">
              {car.brand} <span className="text-gray-400 font-medium not-italic">{car.model}</span>
            </h3>
            <p className="text-blue-500 font-bold text-[10px] uppercase tracking-wider">{car.variant}</p>
          </div>
          <button className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-red-500 hover:bg-white/10 transition-all">
            <Heart size={18} />
          </button>
        </div>

        {/* Middle Row: Metadata Strip - Wrapped for smaller screens */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 py-4 md:py-0 border-y md:border-y-0 border-white/5 md:border-none my-4 md:my-0">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-blue-500" />
            <span className="text-xs font-bold text-white">{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge size={14} className="text-blue-500" />
            <span className="text-xs font-bold text-white whitespace-nowrap">{car.mileage} KM</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 size={14} className="text-blue-500" />
            <span className="text-xs font-bold text-white uppercase">{car.transmission}</span>
          </div>
        </div>

        {/* Bottom Row: Location & Action */}
        <div className="flex flex-row items-center justify-between pt-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-gray-500">
              <MapPin size={12} />
              <span className="text-[9px] md:text-[10px] font-bold uppercase truncate max-w-[80px] md:max-w-none">
                {car.location}
              </span>
            </div>
            <p className="text-white/60 font-bold italic text-[10px] md:text-[11px] whitespace-nowrap">
              Est. R {car.monthly} p/m
            </p>
          </div>
          
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-6 py-3 rounded-xl font-black text-[9px] md:text-[10px] uppercase transition-all group/btn whitespace-nowrap">
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">View</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SponsoredCard;