import React from 'react';

const BrandGrid = () => {
  // Sample Data - Companies bidding for higher placement
  const brands = [
    { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1920px-Audi-Logo_2016.svg.png', featured: true },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', featured: true },
    { name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg', featured: false },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/4/48/20220619140935%21Mercedes-Benz_logo.svg', featured: false },
    { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg', featured: false },
    { name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg', featured: false },
  ];

  // Double the array to create the infinite loop effect
  const infiniteBrands = [...brands, ...brands,...brands];

  return (
 <section className="pt-10 bg-gray-950 overflow-hidden relative">
      {/* Background Text Overlay */}
      <div className="max-w-7xl mx-auto px-6 mb-0 relative z-10 text-center">
        {/* <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.5em] mb-4">
          Our Top Partners
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div> */}
        <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter italic">
          OUR <span className="text-blue-500">TOP</span> PARTNERS
        </h3>
      </div>

      {/* THE RIBBON CONTAINER */}
      <div className="relative flex items-center pt-10 [perspective:2000px]">
        
        {/* --- THE AUTO-GLOW SPOTLIGHT (CENTERED) --- */}
        <div className="absolute inset-0 z-20 pointer-events-none">
            {/* This creates the 'light' in the middle that cards pass through */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-full bg-blue-600/10 blur-[100px] opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] border border-blue-500/20 rounded-full blur-2xl"></div>
        </div>

        <div className="flex animate-scroll whitespace-nowrap items-center py-4 [transform-style:preserve-3d] [transform:rotateY(-5deg)rotateX(5deg)]">
          {infiniteBrands.map((brand, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 relative mx-6 w-[180px] md:w-[260px] h-36 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer group
                ${brand.featured 
                  ? 'bg-white/[0.03] border border-white/10 backdrop-blur-xl' 
                  : 'bg-transparent border border-white/5 hover:border-white/20'
                }
                hover:scale-110 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]
              `}
            >
              {/* Internal Glow for Featured */}
              {brand.featured && (
                <div className="absolute top-0 right-4">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 blur-[2px] animate-pulse"></span>
                </div>
              )}

              <div className="relative">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 
                    ${brand.featured 
                      ? 'opacity-100 brightness-125' 
                      : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0'
                    }
                  `}
                />
              </div>

              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- EDGE MASKING & CENTER HIGHLIGHT OVERLAY --- */}
        {/* Left Shadow */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-30 pointer-events-none"></div>
        
        {/* Right Shadow */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent z-30 pointer-events-none"></div>

        {/* This CSS mask ensures only the middle items are fully 'lit' */}
        <div className="absolute inset-0 z-40 pointer-events-none shadow-[inset_0_0_100px_rgba(10,10,10,1)]"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default BrandGrid;