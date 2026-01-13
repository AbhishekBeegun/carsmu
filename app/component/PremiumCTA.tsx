import React from 'react';
import { ArrowRight, Zap, ShieldCheck, BadgePercent } from 'lucide-react';

const PremiumCTA = () => {
  return (
    <section className="py-10 bg-gray-950 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative group p-1 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-md">
          <div className="bg-gray-950/80 rounded-[38px] overflow-hidden flex flex-col lg:flex-row items-center">
            
            {/* Left Content: The Pitch */}
            <div className="flex-1 p-10 md:p-16 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Zap size={14} className="text-blue-500 fill-blue-500" />
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Instant Valuation</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">UPGRADE?</span>
              </h2>
              
              <p className="text-gray-400 text-lg max-w-md font-medium leading-relaxed">
                Experience the simplest way to trade or sell your vehicle. No paperwork, no stress—just platinum service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="relative group/btn flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Get My Offer
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  {/* Subtle Pulse Effect */}
                  <span className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover/btn:animate-ping"></span>
                </button>
                
                <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black transition-all">
                  Browse Fleet
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-2 gap-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-500" size={20} />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">Verified Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgePercent className="text-blue-500" size={20} />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">Prime Finance</span>
                </div>
              </div>
            </div>

            {/* Right Visual: The "Glass Plate" Image */}
            <div className="flex-1 w-full h-full min-h-[400px] relative flex items-center justify-center bg-gradient-to-l from-blue-600/10 to-transparent">
              {/* Floating Vehicle Logic: You can use a high-end transparent PNG here */}
              <div className="relative w-4/5 aspect-video rounded-3xl [transform:rotateY(-20deg)rotateX(10deg)] border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group-hover:rotate-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Premium Car" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Model 2026</p>
                  <p className="text-white font-bold text-xl tracking-tighter italic">NIGHT-EDITION</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;