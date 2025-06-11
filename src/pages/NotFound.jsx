import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#0f0617] to-[#1a093b] text-white">
      {/* Animated 404 text with glow effect */}
      <h1 className="text-7xl md:text-8xl font-bold mb-6 text-[#00e5ff] opacity-90 animate-pulse drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
        404
      </h1>
      
      {/* Title with animated underline */}
      <h2 className="text-3xl font-semibold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
        Page Not Found
      </h2>
      
      {/* Description with appropriate contrast */}
      <p className="text-xl text-[#b0b3c6] mb-10 max-w-lg">
        The page you're looking for doesn't exist or has been moved to another galaxy.
      </p>
      
      {/* Button with consistent styling and hover effects */}
      <Link 
        to="/" 
        className="bg-[#00e5ff] hover:bg-[#00b8d9] text-[#0f0617] py-3 px-8 rounded-lg font-bold flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </Link>
      
      {/* Optional decorative element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] rounded-full bg-[#00e5ff]/10 animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;