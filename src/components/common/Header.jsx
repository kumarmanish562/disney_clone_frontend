import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NavLink styling based on active route with animation
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff] after:transform after:scale-x-100 after:transition-transform after:duration-300'
      : 'text-[#00e5ff] hover:text-white transition duration-300 relative hover:after:scale-x-100 after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff] after:transform after:scale-x-0 after:transition-transform after:duration-300';

  return (
    // Header container with JioCinema/Hotstar-like color and blur
    <header className="bg-gradient-to-r from-[#0f0617] via-[#1a093b] to-[#0f0617] bg-opacity-90 backdrop-blur-lg shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo section with hover animation */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="Disney+ Hotstar"
            className="h-8"
          />
        </Link>

        {/* Desktop navigation links with hover animations */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass}>TV Shows</NavLink>
          <NavLink
            to="/login"
            className="bg-[#00e5ff] hover:bg-[#00b8d9] transition-all duration-300 text-[#181c2f] px-4 py-2 rounded-xl font-semibold shadow transform hover:scale-105 hover:shadow-[0_0_10px_rgba(0,229,255,0.5)]"
          >
            Login
          </NavLink>
        </nav>

        {/* Hamburger menu button for mobile with animation */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00e5ff] focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              // Close icon with animation
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                className="transition-all duration-300"
              />
            ) : (
              // Hamburger icon with animation
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                className="transition-all duration-300"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu with slide-down animation */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-gradient-to-b from-[#0f0617] via-[#1a093b] to-[#0f0617] bg-opacity-95 backdrop-blur-sm shadow-md rounded-b-xl px-6 py-4 space-y-4 text-center animate-[slideDown_0.3s_ease-out_forwards]"
          style={{
            transformOrigin: 'top',
          }}
        >
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass} onClick={toggleMenu}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass} onClick={toggleMenu}>TV Shows</NavLink>
          <NavLink
            to="/login"
            className="block bg-[#00e5ff] hover:bg-[#00b8d9] transition-all duration-300 text-[#181c2f] px-4 py-2 rounded-lg font-semibold transform hover:scale-105"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;