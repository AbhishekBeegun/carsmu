import React, { useState } from 'react';
import { NavLink } from "react-router";
import { Search, Menu, X, Car, BookOpen, PlusSquare, User, Star } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Browse', path: '/listing', icon: <Car size={20} /> },
    { name: 'Brands', path: '/ourpartners', icon: <Star size={20} /> },
    { name: 'Blogs', path: '/blogs', icon: <BookOpen size={20} /> },
  ];

  return (
    <>
      {/* Top Navbar (Desktop/Tablet) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-2xl font-black tracking-tighter text-blue-600 italic">
                CARS<span className="text-gray-900">.MU</span>
              </NavLink>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Paid Ad Slot - Subtle Highlight */}
              <div className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100 hidden lg:flex items-center">
                <span className="text-[10px] font-bold text-amber-600 mr-2 uppercase">Promoted</span>
                <span className="text-xs font-semibold text-amber-900 cursor-pointer hover:underline">
                  New BMW iX available now
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <Search size={20} />
              </button>
              <NavLink to="/sellmycar" className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Sell Your Car
              </NavLink>
              <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (App-style) */}
      <div className="hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 ">
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path} className="flex flex-col items-center text-gray-400">
            {link.icon}
            <span className="text-[10px] mt-1 font-medium">{link.name}</span>
          </NavLink>
        ))}
        <NavLink to="/profile" className="flex flex-col items-center text-gray-400">
          <User size={20} />
          <span className="text-[10px] mt-1 font-medium">Profile</span>
        </NavLink>
      </div>

      {/* Vertical Spacer so content doesn't hide under Navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;