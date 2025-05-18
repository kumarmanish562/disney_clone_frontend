import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold'
      : 'text-gray-300 hover:text-white transition';

  return (
    <header className="bg-opacity-70 backdrop-blur-lg bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="Disney+ Hotstar"
            className="h-8"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass}>TV Shows</NavLink>
          <NavLink
            to="/login"
            className="bg-disney-blue hover:bg-blue-700 transition text-white px-4 py-2 rounded-xl font-semibold shadow"
          >
            Login
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-md rounded-b-xl px-6 py-4 space-y-4 text-center">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/movies" className={navLinkClass} onClick={toggleMenu}>Movies</NavLink>
          <NavLink to="/shows" className={navLinkClass} onClick={toggleMenu}>TV Shows</NavLink>
          <NavLink
            to="/login"
            className="block bg-disney-blue hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg font-semibold"
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
