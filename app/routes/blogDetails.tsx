const BlogDetail = () => (
  <article className="min-h-screen bg-gray-950 text-white font-poppins pt-40 pb-32">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">
          Market Intelligence
        </div>
        <h1 className="text-5xl md:text-6xl font-black italic uppercase leading-tight">
          How to Structure Your Trade-In for Maximum ROI.
        </h1>
        <div className="flex justify-center items-center gap-6 text-gray-500 text-[11px] font-bold uppercase">
          <span>By Elite Editorial</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>January 14, 2026</span>
        </div>
      </div>

      <img src="https://images.unsplash.com/photo-1492144534655-ad79c964c9d7?auto=format&fit=crop&q=80&w=1400" className="w-full h-[500px] object-cover rounded-[48px] border border-white/10 mb-20 grayscale" />

      <div className="max-w-2xl mx-auto space-y-8 text-gray-300 text-lg leading-[1.8]">
        <p className="font-bold text-white text-xl">The "Trade-In" is no longer just a transaction. It is a strategic pivot in your personal asset portfolio.</p>
        <p>In the evolving landscape of 2026 automotive finance, understanding the depreciation curve is vital. For brands like Chery and Haval, the initial 18 months define the asset's secondary market value.</p>
        <blockquote className="border-l-4 border-blue-600 pl-8 italic text-white text-2xl font-black py-4">
          "The best time to trade is exactly 90 days before your service plan expires."
        </blockquote>
        <p>Our data suggests that institutional buyers are currently prioritizing vehicles with a Full Brand Service History (FBSH), often paying a 12% premium over market average.</p>
      </div>
    </div>
  </article>
);

export default BlogDetail