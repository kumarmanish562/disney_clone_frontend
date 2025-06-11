import React from 'react';

const ShowCard = ({ show }) => {
  return (
    // Card container with hover animations matching site theme
    <div className="relative bg-gradient-to-b from-[#1a093b] to-[#0f0617] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-pointer">
      {/* Show thumbnail with subtle zoom effect on hover */}
      <div className="overflow-hidden">
        <img 
          src={show.thumbnail} 
          alt={show.title} 
          className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Subtle overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0617]/95 via-[#1a093b]/30 to-transparent opacity-50"></div>
      </div>
      
      {/* Show details section */}
      <div className="p-5 relative z-10">
        {/* Show title with bold styling */}
        <h3 className="text-xl font-bold text-white mb-2">{show.title}</h3>
        {/* Show description with line clamping for consistent height */}
        <p className="text-gray-300 text-sm line-clamp-3">{show.description}</p>
        {/* Season info with themed color */}
        {show.seasons && (
          <p className="text-[#00e5ff] text-sm mt-2">{show.seasons} {show.seasons === 1 ? 'Season' : 'Seasons'}</p>
        )}
      </div>
    </div>
  );
};

export default ShowCard;