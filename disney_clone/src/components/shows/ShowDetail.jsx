import React from 'react';

const ShowDetail = ({ show }) => {
  // Show a styled message if show data is not available
  if (!show) {
    return <div className="text-center text-[#00e5ff] mt-20 text-xl font-semibold animate-pulse">Show details not available.</div>;
  }

  return (
    // Main container with gradient background matching Footer color scheme
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-[#1a093b] to-[#0f0617] rounded-xl shadow-xl text-white my-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
      {/* Show title with subtle animation on page load */}
      <h1 className="text-4xl font-extrabold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-1/4 after:h-[3px] after:bg-[#00e5ff] animate-[fadeIn_0.8s_ease-in]">
        {show.title}
      </h1>
      
      {/* Content container with responsive layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Show poster with hover animation effect */}
        <div className="w-full md:w-1/3 overflow-hidden rounded-xl shadow-lg transition-all duration-500 group">
          <img
            src={show.image || "https://via.placeholder.com/800x450?text=No+Image"}
            alt={show.title}
            className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Show details section */}
        <div className="md:w-2/3">
          {/* Season information with themed styling */}
          {show.seasons && (
            <p className="mb-4 text-lg">
              <span className="font-semibold text-[#b0b3c6]">Seasons:</span>{' '}
              <span className="text-[#00e5ff]">{show.seasons}</span>
            </p>
          )}
          
          {/* Episode count if available */}
          {show.episodes && (
            <p className="mb-4 text-lg">
              <span className="font-semibold text-[#b0b3c6]">Episodes:</span>{' '}
              <span className="text-[#00e5ff]">{show.episodes}</span>
            </p>
          )}
          
          {/* Genre tags with hover effect */}
          {show.genres && (
            <div className="mb-4 flex flex-wrap gap-2">
              {show.genres.map((genre, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#1a093b]/50 border border-[#00e5ff]/30 rounded-full text-sm text-[#00e5ff] hover:bg-[#00e5ff]/20 transition-all duration-300"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
          
          {/* Overview section with enhanced readability */}
          <p className="mb-6 text-lg leading-relaxed">
            <span className="font-semibold text-[#b0b3c6]">Overview:</span>{' '} 
            <span className="text-gray-300">{show.description}</span>
          </p>
          
          {/* Rating with star visualization if available */}
          {show.rating && (
            <div className="text-lg flex items-center mb-6">
              <span className="font-semibold text-[#b0b3c6]">Rating:</span>{' '}
              <div className="ml-2 flex items-center">
                <span className="text-[#00e5ff] font-bold mr-1">{show.rating}</span>
                <span className="text-gray-400">/ 10</span>
                <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Watch Now button with animation effects */}
          <button className="mt-2 bg-[#00e5ff] hover:bg-[#00b8d9] text-[#0f0617] py-3 px-8 rounded-lg font-bold flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            <span>Watch Now</span>
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;