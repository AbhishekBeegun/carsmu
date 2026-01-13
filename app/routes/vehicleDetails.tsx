import React, { useState } from 'react';
import { 
  ShieldCheck, Fuel, Settings2, Gauge, Zap, 
  MapPin, Heart, Share2, Check, ChevronRight, 
  Clock, Award, Smartphone, Info
} from 'lucide-react';
import Navbar from '~/component/Navbar';
import Footer from '~/component/Footer';

const VehicleDetailPage = () => {
  const [activeTab, setActiveTab] = useState('engine');
  const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000");

  const car = {
    brand: "Chery",
    model: "Tiggo Cross",
    variant: "1.5T Elite DCT Auto",
    price: "449,900",
    monthly: "6,099",
    year: "2026",
    mileage: "0 KM",
    location: "Gauteng, Oakdene",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000",
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
    ]
  };

  const technicalSpecs = {
    engine: [
      { label: "Engine Capacity", value: "1.5 Litre Turbo" },
      { label: "Cylinders", value: "4 In-line" },
      { label: "Fuel System", value: "Direct Injection" },
      { label: "Drive Type", value: "Front Wheel Drive" }
    ],
    performance: [
      { label: "Max Power", value: "108 kW @ 5500 rpm" },
      { label: "Max Torque", value: "210 Nm @ 1750 rpm" },
      { label: "Top Speed", value: "190 km/h" },
      { label: "Fuel Index", value: "7.0L/100km" }
    ],
    millage: [
      { label: "Odometer", value: "0 KM" },
      { label: "Status", value: "Brand New" },
      { label: "Service Interval", value: "15,000 KM" }
    ],
    options: [
      { label: "Upholstery", value: "Premium Leather" },
      { label: "Infotainment", value: "10.25-inch Dual Screen" },
      { label: "Safety", value: "6 Airbags + ADAS" },
      { label: "Sunroof", value: "Panoramic Tilt/Slide" }
    ]
  };

  return (
    <>
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      
      {/* 1. TOP NAV / BREADCRUMB SPACE */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <span>Inventory</span> <ChevronRight size={12} /> <span>Chery</span> <ChevronRight size={12} /> <span className="text-blue-500">Tiggo Cross</span>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"><Share2 size={18} /></button>
          <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"><Heart size={18} /></button>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN (8/12) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* IMAGE GALLERY SECTION */}
          <section className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] border border-white/5 shadow-2xl">
              <img src={mainImage} className="w-full h-full object-cover" alt="Main View" />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg">Featured</span>
                <span className="bg-black/40 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-white/10">HD 360°</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  className={`aspect-video rounded-2xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-500' : 'border-white/5 opacity-50'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
                </button>
              ))}
            </div>
          </section>

          {/* OVERVIEW SECTION */}
          <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-10 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <h1 className="text-5xl font-black italic uppercase leading-none tracking-tighter">
                  {car.brand} <span className="text-blue-600">{car.model}</span>
                </h1>
                <p className="text-gray-400 font-bold text-lg mt-2 uppercase">{car.variant}</p>
                <div className="flex items-center gap-4 mt-4 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                   <div className="flex items-center gap-1"><MapPin size={12} className="text-blue-500"/> {car.location}</div>
                   <div className="flex items-center gap-1"><Clock size={12} className="text-blue-500"/> 2026 Model</div>
                </div>
              </div>
              <div className="md:text-right">
                <p className="text-4xl font-black text-white italic">R {car.price}</p>
                <p className="text-blue-500 font-bold mt-1 text-sm uppercase">Est. R {car.monthly} p/m</p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 flex items-center gap-2">
                <Info size={14}/> Executive Overview
              </h3>
              <p className="text-gray-400 leading-relaxed text-base font-medium">
                The 2026 Chery Tiggo Cross 1.5T Elite marks a significant leap in urban SUV design. 
                Blending a high-tech DCT transmission with a punchy turbocharged power plant, this 
                model offers a sophisticated drive for the South African landscape. The Elite 
                trim emphasizes digital luxury, featuring the latest Chery Intelligent Cockpit, 
                dual 10.25-inch screens, and a suite of advanced safety features.
              </p>
            </div>
          </section>

          {/* TECHNICAL INTELLIGENCE TABS */}
          <section className="space-y-6">
             <h3 className="text-lg font-black italic uppercase tracking-tighter ml-2">Technical Intelligence</h3>
             <div className="bg-white/[0.01] border border-white/5 rounded-[32px] overflow-hidden">
                <div className="flex border-b border-white/5 bg-white/[0.01]">
                  {['engine', 'performance', 'millage', 'options'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-5 text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeTab === tab ? 'text-blue-500 bg-blue-500/5 border-b-2 border-blue-500' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                  {technicalSpecs[activeTab].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-xs font-black text-white italic uppercase tracking-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* FOOTER PROTECTION PLAN */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex gap-5 items-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
                  <Award size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase">Engine Warranty</p>
                   <p className="text-sm font-black text-white italic uppercase">10 Year / 1,000,000 KM</p>
                </div>
             </div>
             <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex gap-5 items-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
                  <Settings2 size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase">Service Plan</p>
                   <p className="text-sm font-black text-white italic uppercase">5 Year / 60,000 KM</p>
                </div>
             </div>
          </section>

        </div>

        {/* RIGHT COLUMN (4/12) - STICKY CONVERSION */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-8 rounded-[32px] text-black shadow-2xl space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center font-black text-xl italic text-blue-600">C.O</div>
                <div>
                  <h4 className="font-black uppercase leading-none text-lg">Chery Oakdene</h4>
                  <p className="text-gray-400 text-[10px] font-black mt-1 uppercase tracking-widest">Authorised Dealership</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-blue-600/20">
                  Enquire Now
                </button>
                <button className="w-full border-2 border-gray-100 text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-gray-50 transition-all">
                  Book Test Drive
                </button>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-4">
                 <div className="flex items-center gap-3 text-gray-400 group cursor-pointer hover:text-black transition-colors">
                    <Smartphone size={16}/>
                    <span className="text-xs font-bold uppercase">Call Dealership</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16}/>
                    <span className="text-xs font-bold uppercase truncate text-gray-400">Oakdene, Johannesburg</span>
                 </div>
              </div>
            </div>

            {/* TRUST BADGE */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex items-center gap-4">
              <ShieldCheck className="text-blue-500" size={32} />
              <div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">Elite Verified</p>
                <p className="text-[11px] font-bold text-gray-500 mt-0.5">Secure Transaction Protocol</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default VehicleDetailPage;