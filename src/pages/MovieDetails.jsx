import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data (in a real app this would come from an API)
const movieData = {
  'avengers-endgame': {
    title: 'Avengers: Endgame',
    year: '2019',
    duration: '3h 1m',
    rating: 'PG-13',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    description: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`,
    banner: 'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    director: 'Anthony Russo, Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'black-panther': {
    title: 'Black Panther',
    year: '2018',
    duration: '2h 14m',
    rating: 'PG-13',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    description: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.`,
    banner: 'https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    director: 'Ryan Coogler',
    cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o', 'Danai Gurira', 'Letitia Wright'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'captain-marvel': {
    title: 'Captain Marvel',
    year: '2019',
    duration: '2h 4m',
    rating: 'PG-13',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    description: `Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.`,
    banner: 'https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    director: 'Anna Boden, Ryan Fleck',
    cast: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mendelsohn', 'Jude Law', 'Annette Bening'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'thor-ragnarok': {
    title: 'Thor: Ragnarok',
    year: '2017',
    duration: '2h 10m',
    rating: 'PG-13',
    genre: ['Action', 'Adventure', 'Comedy'],
    description: `Thor must escape the alien planet Sakaar in time to save Asgard from Hela and the impending Ragnarök.`,
    banner: 'https://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    director: 'Taika Waititi',
    cast: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo', 'Tessa Thompson'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'doctor-strange': {
    title: 'Doctor Strange',
    year: '2016',
    duration: '1h 55m',
    rating: 'PG-13',
    genre: ['Action', 'Adventure', 'Fantasy'],
    description: `A brilliant but arrogant surgeon loses the use of his hands in a car accident and discovers the hidden world of magic and alternate dimensions.`,
    banner: 'https://image.tmdb.org/t/p/original/xfWac8MTYDxujaxgPVcRD9yZaul.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/xfWac8MTYDxujaxgPVcRD9yZaul.jpg',
    director: 'Scott Derrickson',
    cast: ['Benedict Cumberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Mads Mikkelsen', 'Tilda Swinton'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  }
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData[id] || {
    title: 'Movie Not Found',
    description: 'The requested movie information is not available.',
    genre: [],
    cast: [],
    languages: []
  };

  return (
    // Main container with dark theme gradient background
    <div className="bg-gradient-to-b from-[#0f0617] to-[#1a093b] min-h-screen text-white">
      {/* Hero banner section with movie backdrop */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 6, 23, 0.5), rgba(26, 9, 59, 0.95)), url(${movie.banner})`,
        }}
      >
        <div className="container mx-auto h-full flex items-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Movie poster with animation effects */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500 group">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="rounded-xl max-w-[240px] w-full transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
            
            {/* Movie details section */}
            <div className="md:col-span-2">
              {/* Movie title with underline accent */}
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/6 after:h-[3px] after:bg-[#00e5ff]">
                {movie.title}
              </h1>
              
              {/* Movie metadata row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#b0b3c6] mb-6 mt-6">
                <span>{movie.year}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{movie.duration}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{movie.rating}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{movie.genre.join(', ')}</span>
              </div>
              
              {/* Movie description with enhanced readability */}
              <p className="text-lg mb-8 max-w-2xl text-gray-300 leading-relaxed">{movie.description}</p>
              
              {/* Watch Now button with teal color scheme and animation */}
              <button className="bg-[#00e5ff] hover:bg-[#00b8d9] text-[#0f0617] py-3 px-8 rounded-lg font-bold flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content section with movie details */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content column */}
          <div className="md:col-span-2">
            {/* About section with section title styling */}
            <h2 className="text-2xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              About the Movie
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">{movie.description}</p>
            
            {/* Cast section with styled cards */}
            <h2 className="text-2xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              Cast
            </h2>
            <div className="flex flex-wrap gap-4 mb-10">
              {movie.cast.map((actor, index) => (
                <div 
                  key={index} 
                  className="bg-[#1a093b]/80 p-3 rounded-lg border border-[#00e5ff]/20 text-[#b0b3c6] hover:bg-[#00e5ff]/10 hover:text-white hover:border-[#00e5ff]/40 transition-all duration-300"
                >
                  {actor}
                </div>
              ))}
            </div>
            
            {/* Director section */}
            <h2 className="text-2xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              Director
            </h2>
            <p className="mb-8 text-[#00e5ff]">{movie.director}</p>
          </div>
          
          {/* Sidebar with additional information */}
          <div>
            <div className="bg-gradient-to-b from-[#1a093b] to-[#0f0617] p-6 rounded-xl shadow-lg border border-[#00e5ff]/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-1/4 after:h-[2px] after:bg-[#00e5ff]">
                Information
              </h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Available in</h4>
                  <p className="text-[#00e5ff]">{movie.languages.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Genre</h4>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((item, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#1a093b]/50 border border-[#00e5ff]/30 rounded-full text-sm text-[#00e5ff] hover:bg-[#00e5ff]/20 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Release Year</h4>
                  <p className="text-[#00e5ff]">{movie.year}</p>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Duration</h4>
                  <p className="text-[#00e5ff]">{movie.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;