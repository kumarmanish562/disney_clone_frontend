import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allMovies = [
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    year: '2019',
    genre: 'Action'
  },
  {
    id: 'black-panther',
    title: 'Black Panther',
    poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    year: '2018',
    genre: 'Action'
  },
  {
    id: 'captain-marvel',
    title: 'Captain Marvel',
    poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    year: '2019',
    genre: 'Action'
  },
  {
    id: 'thor-ragnarok',
    title: 'Thor: Ragnarok',
    poster: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    year: '2017',
    genre: 'Action'
  },
  {
    id: 'doctor-strange',
    title: 'Doctor Strange',
    poster: 'https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
    year: '2016',
    genre: 'Action'
  },
  {
    id: 'soul',
    title: 'Soul',
    poster: 'https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
    year: '2020',
    genre: 'Animation'
  },
  {
    id: 'luca',
    title: 'Luca',
    poster: 'https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    year: '2021',
    genre: 'Animation'
  },
  {
    id: 'turning-red',
    title: 'Turning Red',
    poster: 'https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    year: '2022',
    genre: 'Animation'
  },
  {
    id: 'encanto',
    title: 'Encanto',
    poster: 'https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
    year: '2021',
    genre: 'Animation'
  },
  {
    id: 'raya-and-the-last-dragon',
    title: 'Raya and the Last Dragon',
    poster: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    year: '2021',
    genre: 'Animation'
  }
];

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Action', 'Animation', 'Comedy', 'Drama'];

  const filteredMovies = selectedGenre === 'All' 
    ? allMovies 
    : allMovies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="bg-gradient-to-b from-[#0f0617] to-[#1a093b] min-h-screen text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Page title with animated underline */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/4 after:h-[3px] after:bg-[#00e5ff]">
          Movies
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

        {/* Movie grid with enhanced styling and animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map(movie => (
            <Link 
              to={`/movies/${movie.id}`} 
              key={movie.id} 
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-500 bg-[#1a093b]/30 pb-3 border border-[#00e5ff]/5 h-full">
                {/* Movie poster with hover effect */}
                <div className="overflow-hidden relative">
                  <img
                    src={movie.poster}
                    alt={movie.title}
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
                      <h3 className="text-white font-bold">{movie.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-[#00e5ff] text-sm">{movie.year}</span>
                        <span className="mx-2 text-[#00e5ff]">•</span>
                        <span className="text-[#b0b3c6] text-sm">{movie.genre}</span>
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
                
                {/* Movie info below poster */}
                <div className="px-3 pt-3">
                  <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{movie.title}</h3>
                  <p className="text-[#b0b3c6] text-sm">{movie.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty state message when no movies match the filter */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-16 animate-pulse">
            <p className="text-[#00e5ff] text-xl">No movies found for this genre.</p>
            <button 
              onClick={() => setSelectedGenre('All')} 
              className="mt-4 underline text-white hover:text-[#00e5ff]"
            >
              View all movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;