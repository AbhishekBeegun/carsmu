import React from 'react';
import ListingCard from './ListingCard';
import ListingCardCompact from './ListingCardCompact';
import { ArrowRight } from 'lucide-react';
const HandpickedGrid = () => {
 const handpickedCars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Hilux",
    variant: "2.8GD-6 Legend RS 4x4 Auto",
    price: "899,900",
    wasPrice: "945,000",
    monthly: "14,200",
    mileage: "12,500",
    transmission: "Automatic",
    fuel: "Diesel",
    image: "https://imgs.search.brave.com/o5joQzPz2_Vjs5Gs9Kd1MP7cuOXTV3gEIxEclpgS3Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/MzY3NzU4Ni9waG90/by90b3lvdGEtaGls/dXgtb24tYS1ncmF2/ZWwtcm9hZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TjFk/bVZkOUlfa3lNRE9Y/bnNnQUFaTTlxbDd3/dWtxazRKOWVmVzZB/WkNNWT0",
    isPremier: true
  },
  {
    id: "ad-1", // This is our Ad Slot
    type: "brand_feature",
    brand: "BMW South Africa",
    title: "The Future is Electric",
    description: "Experience the new iX range at our Cape Town launch event.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800",
    cta: "Read Story"
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "Golf",
    variant: "2.0 TSI GTI DSG",
    price: "680,000",
    wasPrice: "710,000",
    monthly: "10,500",
    mileage: "45,000",
    transmission: "Automatic",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800",
    isPremier: false
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "A-Class",
    variant: "A200 AMG Line",
    price: "550,000",
    wasPrice: "585,000",
    monthly: "8,900",
    mileage: "32,000",
    transmission: "Automatic",
    fuel: "Petrol",
    image: "https://imgs.search.brave.com/nxhs2txxxAQaQyXQRXHPO25LgUNGSbB0QQjVymHn43Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG9wZ2Vhci5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy8yMDIx/LzExL01lcmNlZGVz/X0MzMDBEXzAwMDAu/anBn",
    isPremier: true
  }
];
  return (
    <section className="py-6 pt-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight text-wrap md:text-nowrap">
              Handpicked <span className="text-blue-600">Collections.</span>
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              The highest quality listings, verified for peace of mind.
            </p>
          </div>
        </div>

        {/* Responsive Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {handpickedCars.map((item) => (
            item.type === "brand_feature" ? (
              <div key={item.id} className="relative group overflow-hidden rounded-3xl bg-gray-900 h-full min-h-[450px] flex flex-col justify-end p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
                <img 
                  src={item.image} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  alt="Ad"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                
                <div className="relative z-10">
                  <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                    Exclusive Feature
                  </span>
                  <h3 className="text-3xl font-black text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all">
                    {item.cta}
                  </button>
                </div>
              </div>
            ) : (
              <ListingCard key={item.id} car={item} />
            )
          ))}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {handpickedCars.map(car => (
                <ListingCardCompact key={car.id} car={car} />
            ))}
        </div>
        
        {/* Load More / Infinite Scroll Trigger */}
        <div className="mt-8 text-center">
            <button className="group relative px-10 py-4 rounded-2xl font-black text-white transition-all duration-500 overflow-hidden">
                
                {/* 1. The Glass Base */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all rounded-2xl"></div>
                
                {/* 2. The Inner Glow (Top Edge) */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* 3. The Shimmer Effect (On Hover) */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* 4. The Content */}
                <span className="relative z-10 flex items-center justify-center gap-3 tracking-tight">
                Discover More Vehicles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* 5. Sub-glow (The Blue Pulse) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default HandpickedGrid;