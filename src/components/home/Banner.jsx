import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <img
        src="/path/to/your/banner-image.jpg"
        alt="Promotional Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Welcome to Disney+ Hotstar
        </h1>
        <p className="text-md md:text-lg text-gray-200 mb-6 max-w-xl">
          Stream your favorite Movies, TV Shows, and Live Sports – all in one place.
        </p>
        <button className="bg-disney-blue hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
