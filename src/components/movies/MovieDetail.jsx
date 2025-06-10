import React from 'react';

const MovieDetail = ({ movie }) => {
  // Show a styled message if movie data is not available
  if (!movie) {
    return <div className="text-center text-[#00e5ff] mt-20 text-xl font-semibold animate-pulse">Movie not found</div>;
  }

  return (
    // Main container with gradient background matching Footer color scheme
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-[#1a093b] to-[#0f0617] rounded-xl shadow-xl text-white my-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
      {/* Movie title with subtle animation on page load */}
      <h1 className="text-4xl font-extrabold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-1/4 after:h-[3px] after:bg-[#00e5ff]">
        {movie.title}
      </h1>
      
      {/* Content container with responsive layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Movie poster with hover animation effect */}
        <div className="w-full md:w-1/3 overflow-hidden rounded-xl shadow-lg transition-all duration-500">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full object-cover transform transition-transform duration-700 hover:scale-110"
          />
        </div>
        
        {/* Movie details section */}
        <div className="md:w-2/3">
          {/* Release date with themed styling */}
          <p className="mb-4 text-lg">
            <span className="font-semibold text-[#b0b3c6]">Release Date:</span>{' '}
            <span className="text-[#00e5ff]">{movie.releaseDate}</span>
          </p>
          
          {/* Overview section with enhanced readability */}
          <p className="mb-6 text-lg leading-relaxed">
            <span className="font-semibold text-[#b0b3c6]">Overview:</span>{' '} 
            <span className="text-gray-300">{movie.overview}</span>
          </p>
          
          {/* Rating with star visualization */}
          <div className="text-lg flex items-center">
            <span className="font-semibold text-[#b0b3c6]">Rating:</span>{' '}
            <div className="ml-2 flex items-center">
              <span className="text-[#00e5ff] font-bold mr-1">{movie.rating}</span>
              <span className="text-gray-400">/ 10</span>
              <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;