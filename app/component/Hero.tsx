import React from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';

const Hero = () => {
  // Quick filters for Mauritiusn market context
  const quickFilters = ["SUVs", "Hatchbacks", "Bakkies", "Electric", "Under R300k"];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">New: 2026 Models Listed Today</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Find your next <span className="text-blue-500">drive.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          The most transparent way to buy and sell cars in Mauritius. 
          <span className="font-semibold text-white"> 12,400+</span> verified listings.
        </p>

        {/* Floating Search Bar (The "App" Feel) */}
        <div className="bg-white/10 backdrop-blur-2xl p-2 rounded-2xl md:rounded-full border border-white/20 shadow-2xl max-w-4xl mx-auto transition-all hover:border-white/40">
          <div className="flex flex-col md:flex-row items-center gap-2">
            
            {/* Main Search Input */}
            <div className="flex items-center flex-1 w-full px-4 py-3 md:py-0">
              <Search className="text-blue-400 mr-3" size={22} />
              <input 
                type="text" 
                placeholder="Search by brand, model or keyword..." 
                className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-400 w-full text-lg"
              />
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden md:block w-px h-10 bg-white/20"></div>

            {/* Location Selector */}
            <div className="flex items-center w-full md:w-auto px-4 py-3 md:py-0">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <select className="bg-transparent border-none focus:ring-0 text-white text-sm cursor-pointer appearance-none pr-8">
                <option className="bg-gray-900">All Mauritius</option>
                <option className="bg-gray-900">Gauteng</option>
                <option className="bg-gray-900">Western Cape</option>
                <option className="bg-gray-900">KwaZulu-Natal</option>
              </select>
            </div>

            {/* CTA Button */}
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
              Search <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Quick Discovery Tags (Monetization Tip: You can charge brands to be here) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {quickFilters.map((filter) => (
            <button 
              key={filter} 
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/20 hover:text-white transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;