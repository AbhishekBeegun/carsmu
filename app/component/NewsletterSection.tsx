import React from 'react';
import { Send, CheckCircle2, Bell } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* 1. The Spotlight Effect (Soft Radial Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Icon Badge */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <Bell className="text-blue-500" size={24} />
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          The <span className="text-blue-500">Inside</span> Track.
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
          Be the first to know about price drops, rare finds, and Mauritius's latest automotive trends.
        </p>

        {/* 2. Glass Newsletter Form */}
        <form onSubmit={(e) => e.preventDefault()} className="relative group max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-[24px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 focus-within:border-blue-500/50 transition-all duration-500 shadow-2xl">
            
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-6 py-4 text-lg"
              required
            />

            <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all active:scale-95 group shadow-lg shadow-blue-600/20">
              Join Now
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* 3. Modern Micro-Details */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <CheckCircle2 size={14} className="text-blue-500" /> No Spam
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <CheckCircle2 size={14} className="text-blue-500" /> Weekly Insights
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <CheckCircle2 size={14} className="text-blue-500" /> Early Access
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;