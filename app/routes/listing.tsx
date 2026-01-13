import Breadcrumb from "~/component/Listing/Breadcrumbs";
import type { Route } from "./+types/listing";
import Navbar from "~/component/Navbar";
import SponsoredCard from "~/component/Listing/SponsoredCard";
import RegularListingCard from "~/component/Listing/Card";
import Pagination from "~/component/Listing/Pagination";
import Footer from "~/component/Footer";
import PromoBanner from "~/component/Listing/Banner";
import FAQ from "~/component/Listing/FAQ";
import FilterAside from "~/component/Listing/AsideFilter";

import { Headset , TrendingUp } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listing Page" },
    { name: "description", content: "Listing Page" },
  ];
}

const sponsoredData = [
  {
    id: 'sp-slim-1',
    brand: 'BMW',
    model: 'M3 Competition',
    variant: 'M xDrive (G80)',
    price: '1,950,000',
    oldPrice: '2,100,000',
    monthly: '32,450',
    year: '2024',
    mileage: '4,200',
    transmission: 'Automatic',
    location: 'Gauteng, Sandton',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200',
    imageCount: 32,
    rating: 4.9,
    reviews: 42
  },
  {
    id: 'sp-slim-2',
    brand: 'Audi',
    model: 'RS3 Sportback',
    variant: 'Quattro Performance',
    price: '1,249,900',
    oldPrice: '1,320,000',
    monthly: '21,100',
    year: '2023',
    mileage: '12,800',
    transmission: 'Automatic',
    location: 'Western Cape, CPT',
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=1200',
    imageCount: 18,
    rating: 4.7,
    reviews: 28
  }
];

const regularInventoryData = [
  {
    id: 'reg-1',
    brand: 'Volkswagen',
    model: 'Golf 8 GTI',
    variant: '2.0 TSI DSG',
    price: '749,900',
    monthly: '13,200',
    year: '2023',
    mileage: '18,500',
    transmission: 'Automatic',
    location: 'Gauteng, JHB',
    image: 'https://tse3.mm.bing.net/th/id/OIP.dC8raqlNt4Bl3TcScuH7QgHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3',
    fuelType: 'Petrol'
  },
  {
    id: 'reg-2',
    brand: 'Toyota',
    model: 'Hilux',
    variant: '2.8GD-6 Legend RS',
    price: '899,000',
    monthly: '15,850',
    year: '2022',
    mileage: '45,000',
    transmission: 'Automatic',
    location: 'KZN, Durban',
    image: 'https://tse2.mm.bing.net/th/id/OIP.cFvUUxpBcrMDlhjSBUnGQQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    fuelType: 'Diesel'
  }
];

export default function Listing() {
    return <>
     <Breadcrumb />
     <div className="max-w-7xl mx-auto px-6 lg:flex">

        <div className="hidden lg:flex w-3/12">
         <FilterAside/>
        </div>


        <div className="lg:w-6/12">
            {sponsoredData.map((car) => 
                <>
                <SponsoredCard car={car} />
                </>
            )}


            {/* after the 8th regular listing add ads betwenn */}

            {regularInventoryData.map((car) => (
                <RegularListingCard key={car.id} car={car} />
            ))}

            <Pagination />
        </div>

        {/* <div className="lg:w-3/12">
         <ConciergeCard />
         <MarketInsights />
         <RecentActivity />

        </div> */}
        
     </div>

     <PromoBanner />

     <FAQ />
    </>
}


const ConciergeCard = () => (
  <div className="bg-blue-600 rounded-[24px] p-6 text-white overflow-hidden relative group cursor-pointer shadow-xl shadow-blue-600/20">
    <div className="relative z-10 space-y-4">
      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
        <Headset size={20} />
      </div>
      <div>
        <h4 className="text-lg font-black italic leading-tight uppercase">Can't find the <br/>right spec?</h4>
        <p className="text-white/80 text-[11px] font-bold mt-2 uppercase tracking-wider">Our concierge will find it for you.</p>
      </div>
      <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-black text-[10px] uppercase hover:bg-black hover:text-white transition-all">
        Start Sourcing
      </button>
    </div>
    {/* Decorative background text */}
    <span className="absolute -bottom-4 -right-2 text-white/10 text-6xl font-black italic select-none">DRIVE</span>
  </div>
);

const MarketInsights = () => (
  <div className="bg-white/[0.02] border border-white/5 rounded-[24px] p-6 space-y-6">
    <div className="flex items-center gap-2">
      <TrendingUp size={16} className="text-blue-500" />
      <span className="text-[10px] font-black text-white uppercase tracking-widest">Market Insights</span>
    </div>
    
    <div className="space-y-4">
      <div className="flex justify-between items-end border-b border-white/5 pb-3">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Avg. Price (M3)</span>
        <span className="text-sm font-black text-white italic">R 1,850,000</span>
      </div>
      <div className="flex justify-between items-end border-b border-white/5 pb-3">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Demand Level</span>
        <span className="text-[10px] font-black text-green-500 uppercase px-2 py-0.5 bg-green-500/10 rounded">High</span>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-[10px] font-bold text-gray-500 uppercase">Value Retention</span>
        <span className="text-sm font-black text-white italic">82%</span>
      </div>
    </div>
  </div>
);

const RecentActivity = () => {
  const activities = [
    { car: "Porsche 911 GT3", time: "2 mins ago", action: "Reserved" },
    { car: "BMW M5 CS", time: "14 mins ago", action: "Sold" },
    { car: "Range Rover SV", time: "1 hour ago", action: "Viewing Set" },
  ];

  return (
    <div className="bg-white/[0.01] border border-white/5 rounded-[24px] p-6">
      <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 text-center">Live Activity</h4>
      <div className="space-y-6">
        {activities.map((act, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className={`w-2 h-2 rounded-full mt-1.5 ${act.action === 'Sold' ? 'bg-red-500' : 'bg-blue-500'}`} />
            <div>
              <p className="text-[11px] font-black text-white uppercase italic">{act.car}</p>
              <p className="text-[9px] font-bold text-gray-500 uppercase">{act.action} • {act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};