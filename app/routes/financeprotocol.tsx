import React from 'react';
import { 
  Landmark, ShieldCheck, PieChart, FileText, 
  Zap, Calculator, ArrowUpRight, Check, Info,
  TrendingUp, Fingerprint, ShieldAlert
} from 'lucide-react';

const FinanceProtocolPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-poppins selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-400">Institutional Grade Finance</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">
            The Finance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Protocol</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-medium leading-relaxed">
            Proprietary lending structures designed for maximum liquidity. 
            We secure competitive prime-linked rates through a centralized panel of Tier-1 South African banks.
          </p>
        </div>
      </section>

      {/* 2. THE CALCULATOR INTERFACE */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.02] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* Controls Area (Left 7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-14 space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                <Calculator size={20} />
              </div>
              <h3 className="text-lg font-bold italic uppercase leading-none">Parameter Adjustment</h3>
            </div>
            
            <div className="space-y-10">
              {[
                { label: "Asset Value", val: "R 449,900", percent: "75%" },
                { label: "Deposit Amount", val: "R 45,000", percent: "25%" },
                { label: "Balloon Residual", val: "35%", percent: "35%" }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-bold text-gray-500 uppercase">{item.label}</span>
                    <span className="text-2xl font-black italic text-white">{item.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 relative rounded-full">
                    <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: item.percent }} />
                    <div className="absolute h-4 w-4 bg-white border-4 border-gray-950 rounded-full -top-[6px]" style={{ left: `calc(${item.percent} - 8px)` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                <p className="text-[11px] font-bold text-gray-500 uppercase mb-2">Interest Rate</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black italic">11.75%</p>
                  <TrendingUp size={18} className="text-blue-500" />
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                <p className="text-[11px] font-bold text-gray-500 uppercase mb-2">Term Duration</p>
                <p className="text-2xl font-black italic text-blue-500">72 <span className="text-sm font-bold text-gray-400 not-italic uppercase ml-1">Months</span></p>
              </div>
            </div>
          </div>

          {/* Result Area (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-blue-600 p-8 md:p-14 flex flex-col justify-between relative overflow-hidden">
            <Zap className="absolute -right-16 -bottom-16 w-64 h-64 text-white/5 -rotate-12" />
            
            <div className="relative z-10 space-y-2">
              <p className="text-[12px] font-bold uppercase text-blue-100">Estimated Monthly</p>
              <h4 className="text-7xl md:text-8xl font-black italic leading-none tracking-tighter">R 6,099</h4>
              <p className="text-[11px] font-semibold text-blue-200 uppercase mt-4">Calculated on Prime + 0.5%</p>
            </div>

            <div className="relative z-10 space-y-4 mt-12 pt-10 border-t border-white/20">
              <button className="w-full bg-white text-gray-950 py-6 rounded-2xl font-black text-[12px] uppercase shadow-2xl hover:bg-gray-950 hover:text-white transition-all">
                Begin Digital Application
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase text-blue-100/60">
                <ShieldCheck size={12} /> No Impact on Credit Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LENDING PILLARS */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: Landmark, title: "Tier-1 Lenders", desc: "Direct integration with all major SA financial institutions." },
            { icon: Fingerprint, title: "Biometric ID", desc: "Instant verification with zero manual paperwork requirements." },
            { icon: PieChart, title: "Balloon Logic", desc: "Maximize monthly cash flow with structured residuals." },
            { icon: ShieldAlert, title: "Gap Protection", desc: "Integrated insurance to protect your financial shortfall." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
                <item.icon size={20} />
              </div>
              <h4 className="text-[13px] font-bold uppercase italic">{item.title}</h4>
              <p className="text-[11px] font-medium text-gray-500 leading-relaxed uppercase">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DOCUMENTATION CHECKLIST BANNER */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="bg-white rounded-[40px] p-1 shadow-2xl overflow-hidden group">
          <div className="bg-gray-950 rounded-[38px] px-8 py-12 md:px-16 md:py-20 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-blue-600/10 text-blue-500">
                <FileText size={28} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-none">
                Application <br/>
                <span className="text-blue-500">Checklist</span>
              </h2>
              <p className="text-gray-400 text-sm font-medium uppercase leading-relaxed max-w-md">
                Ensure you have high-resolution scans of these documents for immediate 2-hour processing.
              </p>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Valid SA ID Card", "Driver's License", "3 Months Bank Statements", "Proof of Residence"].map((doc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="text-[11px] font-bold uppercase">{doc}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FinanceProtocolPage;