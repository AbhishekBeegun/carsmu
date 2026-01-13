import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      tag: "Review",
      title: "2026 Toyota Hilux: Is it still the King of Bakkies?",
      excerpt: "We take the new Legend RS through the dunes of Namibia to see if it holds up...",
      date: "10 Jan 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800",
      isPromoted: false
    },
    {
      id: 2,
      tag: "Sponsored",
      title: "Why Insurance Companies are Loving Electric Vehicles",
      excerpt: "Brought to you by Discovery Insure. Learn how switching to EV can slash your premiums...",
      date: "08 Jan 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800",
      isPromoted: true // This is your paid ad slot
    },
    {
      id: 3,
      tag: "Industry",
      title: "Fuel Prices: What to Expect in February",
      excerpt: "Global trends suggest a shift in local pump prices. Here is our expert forecast...",
      date: "05 Jan 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=800",
      isPromoted: false
    }
  ];

  return (
    <section className="py-6 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              THE <span className="text-blue-500">HUB.</span>
            </h2>
            <p className="text-gray-400 mt-2 font-medium">Expert takes and local automotive news.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all">
            GO TO BLOG <ArrowRight size={16} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-500
                ${post.isPromoted 
                  ? 'border-blue-500/30 bg-blue-500/[0.02] shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                }`}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg
                    ${post.isPromoted ? 'bg-blue-600 text-white' : 'bg-white/90 text-gray-900'}`}>
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12}/> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center text-blue-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;