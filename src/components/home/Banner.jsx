import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Banner background image with subtle zoom animation */}
      <img
        src="/path/to/your/banner-image.jpg"
        alt="Promotional Banner"
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-10000 hover:scale-110"
      />
      {/* Gradient overlay matching the Footer/Header gradient color scheme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0617]/90 via-[#1a093b]/70 to-transparent"></div>

      {/* Banner content with entrance animations */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-[fadeInDown_0.6s_ease-out]">
          Welcome to Disney+ Hotstar
        </h1>
        <p className="text-md md:text-lg text-gray-200 mb-6 max-w-xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          Stream your favorite Movies, TV Shows, and Live Sports – all in one place.
        </p>
        {/* Button with enhanced animations matching other components */}
        <button className="bg-[#00e5ff] hover:bg-[#00b8d9] px-6 py-2 rounded-full text-[#181c2f] font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.6)] animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;