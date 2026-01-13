import React from 'react';
import { Facebook, Instagram, Twitter, Send, PlayCircle, Apple, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-950 pt-10">
      
      {/* Visual Transition: The Fade into the Glass Area */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-950 to-transparent z-0"></div>

      {/* THE MAIN GLASS PANEL */}
      <div className="relative z-10 bg-white/[0.03] backdrop-blur-3xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Specular Edge (That 1px premium glow at the very top) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            
            {/* 1. BRAND IDENTITY */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black tracking-tighter text-white italic">
                  CARS<span className="text-blue-500">.MU</span>
                </h2>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-medium">
                  The future of automotive retail in South Africa. <br/>
                  <span className="text-white/60">Crafted for the driven.</span>
                </p>
              </div>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="group p-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all duration-500 border border-white/5 hover:border-blue-400">
                    <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* 2. NAVIGATION LINKS */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Showroom</h4>
                <ul className="space-y-4">
                  {['Inventory', 'Electric', 'Supercars', 'Exotics'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm font-bold text-gray-300 hover:text-white flex items-center gap-1 group transition-colors">
                        {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Platform</h4>
                <ul className="space-y-4">
                  {['Sell Car', 'Finance', 'Reviews', 'News'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. APP DOWNLOADS & UTILITY */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">The Experience</h4>
              <div className="flex flex-col gap-3">
                 <button className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group overflow-hidden relative">
                    <PlayCircle className="text-white z-10" size={24} />
                    <div className="text-left z-10">
                       <p className="text-[9px] text-gray-500 font-black uppercase">Android App</p>
                       <p className="text-white font-bold text-sm">Play Store</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                 </button>
                 <button className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group overflow-hidden relative">
                    <Apple className="text-white z-10" size={24} />
                    <div className="text-left z-10">
                       <p className="text-[9px] text-gray-500 font-black uppercase">iOS App</p>
                       <p className="text-white font-bold text-sm">App Store</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                 </button>
              </div>
            </div>

          </div>

          {/* FINAL BOTTOM LINE */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-gray-600 tracking-[0.4em] uppercase ">
              © 2026 CARS.MU Abhishek beegun
            </p>
            <div className="flex gap-10 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Security</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;