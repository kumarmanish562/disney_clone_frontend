import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allShows = [
  {
    id: 'loki',
    title: 'Loki',
    poster: 'https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    year: '2021',
    genre: 'Sci-Fi',
  },
  {
    id: 'wandavision',
    title: 'WandaVision',
    poster: 'https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
    year: '2021',
    genre: 'Sci-Fi',
  },
  {
    id: 'falcon-winter-soldier',
    title: 'The Falcon and The Winter Soldier',
    poster: 'https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    year: '2021',
    genre: 'Action',
  },
  {
    id: 'mandalorian',
    title: 'The Mandalorian',
    poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    year: '2019',
    genre: 'Sci-Fi',
  },
  {
    id: 'what-if',
    title: 'What If...?',
    poster: 'https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg',
    year: '2021',
    genre: 'Animation',
  },
  {
    id: 'black-widow',
    title: 'Black Widow',
    poster: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    year: '2021',
    genre: 'Action',
  },
  {
    id: 'moon-knight',
    title: 'Moon Knight',
    poster: 'https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg',
    year: '2022',
    genre: 'Action',
  },
  {
    id: 'ms-marvel',
    title: 'Ms. Marvel',
    poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    year: '2022',
    genre: 'Action',
  },
  {
    id: 'spiderman-no-way-home',
    title: 'Spider-Man: No Way Home',
    poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    year: '2021',
    genre: 'Action',
  },
  {
    id: 'shang-chi',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    poster: 'https://image.tmdb.org/t/p/w500/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
    year: '2021',
    genre: 'Action',
  }
];

const Shows = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Action', 'Animation', 'Drama', 'Sci-Fi'];

  const filteredShows =
    selectedGenre === 'All'
      ? allShows
      : allShows.filter((show) => show.genre === selectedGenre);

  return (
    <div className="bg-gradient-to-b from-[#0f0617] to-[#1a093b] min-h-screen text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Page title with animated underline */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/4 after:h-[3px] after:bg-[#00e5ff]">
          TV Shows
        </h1>

        {/* Genre filter buttons with teal accent styling */}
        <div className="flex flex-wrap gap-4 mb-12 mt-6">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedGenre === genre 
                  ? 'bg-[#00e5ff] text-[#0f0617] font-semibold shadow-[0_0_10px_rgba(0,229,255,0.5)]' 
                  : 'bg-[#1a093b]/80 text-gray-300 hover:bg-[#00e5ff]/20 border border-[#00e5ff]/20'
              }`}
              aria-pressed={selectedGenre === genre}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Show grid with enhanced styling and animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredShows.map(show => (
            <Link 
              to={`/shows/${show.id}`} 
              key={show.id} 
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-500 bg-[#1a093b]/30 pb-3 border border-[#00e5ff]/5 h-full">
                {/* Show poster with hover effect */}
                <div className="overflow-hidden relative">
                  <img
                    src={show.poster}
                    alt={show.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                    }}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0617]/95 via-[#0f0617]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold">{show.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-[#00e5ff] text-sm">{show.year}</span>
                        <span className="mx-2 text-[#00e5ff]">•</span>
                        <span className="text-[#b0b3c6] text-sm">{show.genre}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Watch button that appears on hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <button className="bg-[#00e5ff]/80 hover:bg-[#00e5ff] text-[#0f0617] p-3 rounded-full shadow-lg">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Show info below poster */}
                <div className="px-3 pt-3">
                  <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{show.title}</h3>
                  <p className="text-[#b0b3c6] text-sm">{show.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty state message when no shows match the filter */}
        {filteredShows.length === 0 && (
          <div className="text-center py-16 animate-pulse">
            <p className="text-[#00e5ff] text-xl">No shows found for this genre.</p>
            <button 
              onClick={() => setSelectedGenre('All')} 
              className="mt-4 underline text-white hover:text-[#00e5ff]"
            >
              View all shows
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;