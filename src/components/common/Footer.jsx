import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Main footer container with gradient background and styling
    <footer className="bg-gradient-to-r from-[#0f0617] via-[#1a093b] to-[#0f0617] text-[#b0b3c6] py-14 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company section with hover animation */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00e5ff] after:transition-all hover:after:w-full">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/about" className="block w-full cursor-pointer">About Us</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/careers" className="block w-full cursor-pointer">Careers</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/press" className="block w-full cursor-pointer">Press</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/blog" className="block w-full cursor-pointer">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Explore section with hover animation */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00e5ff] after:transition-all hover:after:w-full">Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/movies" className="block w-full cursor-pointer">Movies</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/shows" className="block w-full cursor-pointer">TV Shows</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/premium" className="block w-full cursor-pointer">Premium</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/kids" className="block w-full cursor-pointer">Kids</Link>
              </li>
            </ul>
          </div>
          
          {/* Support section with hover animation */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00e5ff] after:transition-all hover:after:w-full">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/help" className="block w-full cursor-pointer">Help Center</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/contact" className="block w-full cursor-pointer">Contact Us</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/faq" className="block w-full cursor-pointer">FAQs</Link>
              </li>
              <li className="hover:text-[#00e5ff] transition-all duration-300 hover:translate-x-1">
                <Link to="/accessibility" className="block w-full cursor-pointer">Accessibility</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact section remains mostly the same */}
          <div className="transform transition duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#00e5ff] after:transition-all hover:after:w-full">Contact</h3>
            <div className="mt-2 text-sm text-[#b0b3c6]">
              <p className="mb-1 transition-all hover:text-white">Email: <a href="mailto:support@disneyclone.com" className="text-[#00e5ff]">support@disneyclone.com</a></p>
              <p className="mb-1 transition-all hover:text-white">Customer Care: <a href="tel:18001234567" className="text-[#00e5ff]">1800-123-4567</a></p>
              <p className="mb-1 transition-all hover:text-white">Bhilai, Durg, Chhattisgarh, India</p>
              <p className="mb-1 transition-all hover:text-white">Hours: 9:00 AM - 9:00 PM IST</p>
            </div>
          </div>
        </div>
        
        {/* Footer bottom disclaimer and copyright with animation */}
        <div className="mt-12 border-t border-[#241a3a] pt-6 text-center text-sm text-[#7c7e92]">
          <p className="transition-all duration-300 hover:text-[#00e5ff]">© 2025 Disney+ Hotstar Clone. All Rights Reserved.</p>
          <p className="mt-2 transition-all duration-300 hover:text-[#00e5ff]">
            This site is a fan-made project for educational purposes only and is not affiliated with Disney or Hotstar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;