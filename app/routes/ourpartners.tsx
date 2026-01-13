import React, { useState } from 'react';
import { 
  MapPin, Phone, Star, ShieldCheck, 
  ArrowRight, Search, LayoutGrid
} from 'lucide-react';

const NetworkHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Official Dealers', 'Performance', 'Service', 'Gauteng', 'Cape Town'];

  const partners = [
    {
      id: 1,
      name: "Chery Oakdene",
      category: "Official Dealer",
      location: "Johannesburg, GP",
      phone: "+27 11 435 0000",
      logo: "CO",
      isSponsored: true,
      slug: "chery-oakdene"
    },
    {
      id: 2,
      name: "Elite Performance",
      category: "Performance",
      location: "Cape Town, WC",
      phone: "+27 21 555 1234",
      logo: "EP",
      isSponsored: true,
      slug: "elite-performance"
    },
    {
      id: 3,
      name: "Summit Auto",
      category: "Service",
      location: "Pretoria, GP",
      phone: "+27 12 333 4567",
      logo: "SA",
      isSponsored: false,
      slug: "summit-auto"
    },
    {
      id: 4,
      name: "RaceCraft Dynamics",
      category: "Performance",
      location: "Durban, KZN",
      phone: "+27 31 222 9000",
      logo: "RD",
      isSponsored: false,
      slug: "racecraft-dynamics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-poppins selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION WITH PROTOCOL GLOW */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* The Glow Component */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-400 uppercase">Verified Partner Ecosystem</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8">
            The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase">Network</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-medium leading-relaxed uppercase">
            Institutional automotive partners vetted for quality, 
            integrity, and exceptional service standards.
          </p>
        </div>
      </section>

      {/* 2. GLASS PILL FILTERS */}
      <section className="sticky top-8 z-50 px-6 mb-20">
        <div className="max-w-fit mx-auto flex items-center gap-2 p-2 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[24px]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl text-[11px] font-bold uppercase transition-all ${
                activeFilter === filter 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. THE 4-COLUMN TECHNICAL GRID */}
      <section className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="relative bg-gray-950 p-10 flex flex-col justify-between min-h-[440px] group transition-all duration-700"
            >
              {/* Internal Sponsored Glow */}
              {partner.isSponsored && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-blue-600/15 transition-all duration-700" />
              )}

              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black italic transition-all duration-500 ${
                    partner.isSponsored 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white/5 text-gray-500 group-hover:bg-white group-hover:text-black'
                  }`}>
                    {partner.logo}
                  </div>
                  {partner.isSponsored && (
                    <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
                      <Star size={10} className="text-blue-400" fill="currentColor" />
                      <span className="text-[9px] font-black text-blue-400 uppercase">Sponsored</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-2">{partner.category}</p>
                    <h3 className="text-2xl font-black italic uppercase leading-none group-hover:text-blue-400 transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3 text-gray-500">
                      <MapPin size={14} className="text-blue-500" />
                      <span className="text-[11px] font-bold uppercase">{partner.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <Phone size={14} className="text-blue-500" />
                      <span className="text-[11px] font-bold uppercase">{partner.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Filtered Listing Link */}
              <div className="pt-8 relative z-10">
                <button className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase flex items-center justify-center gap-3 transition-all ${
                  partner.isSponsored 
                  ? 'bg-white text-black hover:bg-blue-600 hover:text-white' 
                  : 'bg-white/5 text-white hover:bg-white hover:text-black'
                }`}>
                  View Listings <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONCIERGE BANNER */}
      <section className="max-w-[1400px] mx-auto px-6 mt-32">
        <div className="bg-white rounded-[48px] p-1 overflow-hidden shadow-2xl">
          <div className="bg-gray-950 rounded-[46px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-5xl font-black italic uppercase leading-none">
                Join the <br/><span className="text-blue-500 font-black">Panel.</span>
              </h2>
              <p className="text-gray-500 text-sm font-medium uppercase leading-relaxed max-w-sm">
                Scale your facility with elite automotive networking. Direct access to our high-intent buyer pool.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-[12px] uppercase shadow-xl hover:bg-white hover:text-blue-600 transition-all">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NetworkHub;