import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // NavLink styling based on active route with animation
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff] after:transform after:scale-x-100 after:transition-transform after:duration-300'
      : 'text-[#00e5ff] hover:text-white transition duration-300 relative hover:after:scale-x-100 after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff] after:transform after:scale-x-0 after:transition-transform after:duration-300';

  return (
    // Navbar container with JioCinema/Hotstar-like gradient and animation
    <nav className="bg-gradient-to-r from-[#0A0617] via-[#140B34] to-[#0A0617] shadow-lg py-4 px-6 sticky top-0 z-50 backdrop-blur-md backdrop-filter">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand with subtle animation */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-white flex items-center transition-transform duration-300 hover:scale-105"
        >
          <span className="text-[#00e5ff]">Disney+</span>
          <span className="ml-1">Hotstar</span>
        </Link>

        {/* Navigation Links with animations */}
        <div className="flex space-x-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass}>Shows</NavLink>
          <NavLink
            to="/login"
            className="bg-[#00e5ff] hover:bg-[#00b8d9] text-[#0A0617] px-5 py-1.5 rounded-full font-medium shadow transition duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(0,229,255,0.5)] animate-pulse"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;