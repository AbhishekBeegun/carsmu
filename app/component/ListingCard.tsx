import React from 'react';
import { Heart, Fuel, Gauge, Settings2, Star, ChevronRight } from 'lucide-react';

const ListingCard = ({ car } : any) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Image Wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-emerald-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
            ↓ 5% Drop
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-blue-500/30">
            Premier Partner
          </span>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-500 transition-all">
          <Heart size={20} />
        </button>

        {/* Gallery Progress Overlay (App Style) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="h-1 w-8 bg-white rounded-full"></div>
          <div className="h-1 w-1.5 bg-white/50 rounded-full"></div>
          <div className="h-1 w-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight">
              {car.brand} <span className="text-gray-500 font-medium">{car.model}</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">{car.variant}</p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-50 my-4">
          <div className="flex flex-col gap-1">
            <Gauge size={16} className="text-blue-500" />
            <span className="text-[11px] font-bold text-gray-900">{car.mileage}km</span>
          </div>
          <div className="flex flex-col gap-1 border-x border-gray-100 px-4">
            <Settings2 size={16} className="text-blue-500" />
            <span className="text-[11px] font-bold text-gray-900">{car.transmission}</span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <Fuel size={16} className="text-blue-500" />
            <span className="text-[11px] font-bold text-gray-900">{car.fuel}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold text-gray-400 line-through">R {car.wasPrice}</p>
            <p className="text-2xl font-black text-blue-600">R {car.price}</p>
            <p className="text-xs font-medium text-gray-500">R {car.monthly} p/m*</p>
          </div>
          <button className="bg-gray-900 p-3 rounded-2xl text-white hover:bg-blue-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;