import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage = 1, totalPages = 10 }) => {
  return (
    <div className="mt-10 flex justify-center pb-10">
      <div className="flex items-center gap-2">
        
        {/* Previous Arrow */}
        <button 
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-gray-500 hover:text-white hover:border-white/20 disabled:opacity-10 transition-all"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2 mx-4">
          {[1, 2, 3, '...', totalPages].map((page, index) => (
            <button
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-xs font-bold transition-all
                ${page === currentPage 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }
                ${page === '...' ? 'cursor-default hover:bg-transparent' : ''}
              `}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Arrow */}
        <button 
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-gray-500 hover:text-white hover:border-white/20 disabled:opacity-10 transition-all"
        >
          <ChevronRight size={18} />
        </button>
        
      </div>
    </div>
  );
};

export default Pagination;