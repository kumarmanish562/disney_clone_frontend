import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold'
      : 'text-gray-300 hover:text-white transition duration-300';

  return (
    <nav className="bg-gray-900 shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-2xl font-bold text-white">
          Disney+ Hotstar
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass}>Shows</NavLink>
          <NavLink
            to="/login"
            className="bg-disney-blue hover:bg-blue-700 text-white px-4 py-1 rounded-full font-medium shadow transition duration-300"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
