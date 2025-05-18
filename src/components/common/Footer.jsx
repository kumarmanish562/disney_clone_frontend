import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Terms of Use</li>
              <li className="hover:text-white transition">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">View Website in</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">English</li>
              <li className="hover:text-white transition">Hindi</li>
              <li className="hover:text-white transition">Tamil</li>
              <li className="hover:text-white transition">Telugu</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Visit Help Center</li>
              <li className="hover:text-white transition">Share Feedback</li>
              <li className="hover:text-white transition">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect with Us</h3>
            <div className="flex space-x-6 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Disney+ Hotstar Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
