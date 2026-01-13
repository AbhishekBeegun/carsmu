import React from 'react';
import { ChevronRight, Home, SlidersHorizontal } from 'lucide-react';

const Breadcrumb = ({ count = 2450 }) => {
  return (
    <div className="pt-10 pb-8 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] font-black text-gray-500">
          <a href="/" className="hover:text-blue-500 transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </a>
          <ChevronRight size={10} />
          <span className="text-white">Used Cars</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;