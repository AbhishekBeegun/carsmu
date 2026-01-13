import React from 'react';
import { ArrowUpRight, Clock, ChevronRight, Calendar } from 'lucide-react';

const BlogListing = () => {
  const posts = [
    { 
      title: "The Rise of Chinese Luxury: Chery's 2026 Roadmap", 
      cat: "Market Analysis", 
      date: "5 Min Read", 
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Interest Rates & Your Next Asset: A Protocol Guide", 
      cat: "Finance", 
      date: "8 Min Read", 
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Electric vs Hybrid: What Works for South Africa?", 
      cat: "Tech", 
      date: "6 Min Read", 
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-poppins pb-20">
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-black italic uppercase leading-none mb-6">The Journal</h1>
          <p className="text-gray-500 text-sm font-bold uppercase max-w-lg mx-auto leading-relaxed">
            Intelligence, insights, and market data from the core of the automotive ecosystem.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer space-y-6">
            <div className="aspect-[16/10] bg-gray-900 rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-bold text-blue-500 uppercase">
                <span>{post.cat}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="flex items-center gap-1"><Clock size={12}/> {post.date}</span>
              </div>
              <h4 className="text-xl font-black italic uppercase leading-tight group-hover:text-blue-400 transition-colors">
                {post.title}
              </h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogListing