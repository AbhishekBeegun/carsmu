import React, { useState } from 'react';
import { 
  Building2, UserCheck, ShieldCheck, Camera, 
  Zap, MessageSquare, Phone, ChevronRight, Check,
  Database, Award, Globe, Car, Milestone
} from 'lucide-react';

const EliteSellPortal = () => {
  const [sellMode, setSellMode] = useState('dealer');

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20 font-poppins">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <span className="text-[11px] font-semibold text-blue-400">Institutional Network Access</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] mb-10">
            Liquidate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automotive Asset</span>
          </h1>
          
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
              <button 
                onClick={() => setSellMode('dealer')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl text-[12px] font-bold uppercase transition-all ${sellMode === 'dealer' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white'}`}
              >
                <Building2 size={16} /> Direct to Dealer
              </button>
              <button 
                onClick={() => setSellMode('private')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl text-[12px] font-bold uppercase transition-all ${sellMode === 'private' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white'}`}
              >
                <UserCheck size={16} /> Private Listing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TECHNICAL FORM + SIDEBAR */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.02] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* FORM AREA (Left) */}
          <div className="lg:col-span-8 p-8 md:p-14 border-r border-white/5">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                <Database size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold italic uppercase leading-none">Vehicle Intelligence</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase font-medium">Step 1: Technical Particulars</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Field 1 */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Model Year *</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm font-bold focus:border-blue-500 outline-none appearance-none cursor-pointer">
                   <option className="bg-gray-900">Select Year</option>
                   <option className="bg-gray-900">2026</option>
                   <option className="bg-gray-900">2025</option>
                </select>
              </div>
              {/* Field 2 */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Manufacturer *</label>
                <input type="text" placeholder="e.g. BMW" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm font-bold focus:border-blue-500 outline-none placeholder:text-gray-700" />
              </div>
              {/* Field 3 */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Model & Variant *</label>
                <input type="text" placeholder="e.g. M3 Competition" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm font-bold focus:border-blue-500 outline-none placeholder:text-gray-700" />
              </div>
              {/* Field 4 */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Mileage (KM) *</label>
                <div className="relative">
                  <input type="number" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm font-bold focus:border-blue-500 outline-none" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-600 uppercase">KM</span>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-blue-400 uppercase italic">Service History Grade *</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Full Brand', 'Full', 'Partial', 'None'].map(s => (
                    <button key={s} type="button" className="py-3 rounded-xl border border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase hover:bg-blue-600 transition-all">{s}</button>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-blue-600 py-6 rounded-2xl text-[12px] font-black uppercase shadow-xl shadow-blue-600/20 hover:bg-white hover:text-blue-600 transition-all active:scale-[0.98]">
                Submit Valuation Request
              </button>
            </div>
          </div>

          {/* SIDEBAR REASSURANCE (Right) */}
          <div className="lg:col-span-4 bg-blue-600 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-10">
              <h4 className="text-3xl font-black italic uppercase leading-tight">Global Dealer Reach.</h4>
              <div className="space-y-6">
                {[
                  { t: "Direct Access", d: "Exposed to the largest dealer network." },
                  { t: "Best Offers", d: "We find you the highest market value." },
                  { t: "Zero Cost", d: "No listing fees. No hidden commissions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Check className="shrink-0 text-white" size={18} strokeWidth={3} />
                    <div>
                      <p className="text-[12px] font-black uppercase leading-none">{item.t}</p>
                      <p className="text-[11px] font-medium text-blue-100 mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Milestone className="text-white" size={24} />
                <p className="text-[11px] font-bold uppercase">Average Liquidation: 14 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONCIERGE BANNER (Redesigned for Premium Layout) */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-[40px] p-1 shadow-2xl overflow-hidden group">
          <div className="bg-gray-950 rounded-[38px] px-8 py-12 md:px-16 md:py-20 flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex p-3 rounded-2xl bg-blue-600/10 text-blue-500 mb-2">
                <Zap size={28} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-none">
                Need Human <br/>
                <span className="text-blue-500 font-black">Assistance?</span>
              </h2>
              <p className="text-gray-500 text-sm font-medium uppercase leading-relaxed max-w-md mx-auto lg:mx-0">
                Our elite concierge team handles manual listings, private valuations, and asset logistics 24/7.
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 bg-white text-gray-950 px-10 py-6 rounded-2xl font-black text-[12px] uppercase hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                <MessageSquare size={18} /> WhatsApp Concierge
              </button>
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-6 rounded-2xl font-black text-[12px] uppercase hover:bg-white hover:text-gray-950 transition-all">
                <Phone size={18} /> Call Hotline
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EliteSellPortal;