import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data (in a real app this would come from an API)
const showData = {
  'loki': {
    title: 'Loki',
    year: '2021',
    seasons: 2,
    episodes: 12,
    rating: 'TV-14',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    description: `The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame".`,
    banner: 'https://image.tmdb.org/t/p/original/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    creator: 'Michael Waldron',
    cast: ['Tom Hiddleston', 'Owen Wilson', 'Sophia Di Martino', 'Gugu Mbatha-Raw', 'Wunmi Mosaku'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'wandavision': {
    title: 'WandaVision',
    year: '2021',
    seasons: 1,
    episodes: 9,
    rating: 'TV-14',
    genre: ['Action', 'Comedy', 'Drama', 'Mystery'],
    description: `Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.`,
    banner: 'https://image.tmdb.org/t/p/original/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
    creator: 'Jac Schaeffer',
    cast: ['Elizabeth Olsen', 'Paul Bettany', 'Kathryn Hahn', 'Teyonah Parris', 'Randall Park'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'falcon-winter-soldier': {
    title: 'The Falcon and the Winter Soldier',
    year: '2021',
    seasons: 1,
    episodes: 6,
    rating: 'TV-14',
    genre: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    description: `Following the events of 'Avengers: Endgame,' Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.`,
    banner: 'https://image.tmdb.org/t/p/original/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    creator: 'Malcolm Spellman',
    cast: ['Anthony Mackie', 'Sebastian Stan', 'Wyatt Russell', 'Erin Kellyman', 'Danny Ramirez'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'mandalorian': {
    title: 'The Mandalorian',
    year: '2019',
    seasons: 3,
    episodes: 24,
    rating: 'TV-14',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    description: `A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.`,
    banner: 'https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    creator: 'Jon Favreau',
    cast: ['Pedro Pascal', 'Gina Carano', 'Carl Weathers', 'Giancarlo Esposito', 'Taika Waititi'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  },
  'what-if': {
    title: 'What If...?',
    year: '2021',
    seasons: 1,
    episodes: 9,
    rating: 'TV-14',
    genre: ['Animation', 'Action', 'Adventure', 'Sci-Fi'],
    description: `Explores pivotal moments from the Marvel Cinematic Universe and turns them on their head, leading the audience into uncharted territory.`,
    banner: 'https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg',
    poster: 'https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg',
    creator: 'A.C. Bradley',
    cast: ['Jeffrey Wright', 'Hayley Atwell', 'Tom Hiddleston'],
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  }
};

const ShowDetails = () => {
  const { id } = useParams();
  const show = showData[id] || {
    title: 'Show Not Found',
    description: 'The requested show information is not available.',
    genre: [],
    cast: [],
    languages: []
  };

  return (
    <div className="bg-gradient-to-b from-[#0f0617] to-[#1a093b] min-h-screen text-white">
      {/* Hero banner section with show backdrop */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 6, 23, 0.5), rgba(26, 9, 59, 0.95)), url(${show.banner})`,
        }}
      >
        <div className="container mx-auto h-full flex items-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Show poster with animation effects */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500 group">
                <img 
                  src={show.poster} 
                  alt={show.title} 
                  className="rounded-xl max-w-[240px] w-full transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
            
            {/* Show details section */}
            <div className="md:col-span-2">
              {/* Show title with underline accent */}
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/6 after:h-[3px] after:bg-[#00e5ff]">
                {show.title}
              </h1>
              
              {/* Show metadata row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#b0b3c6] mb-6 mt-6">
                <span>{show.year}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{show.seasons} Season{show.seasons > 1 ? 's' : ''}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{show.episodes} Episodes</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{show.rating}</span>
                <span className="text-[#00e5ff]">•</span>
                <span>{show.genre.join(', ')}</span>
              </div>
              
              {/* Show description with enhanced readability */}
              <p className="text-lg mb-8 max-w-2xl text-gray-300 leading-relaxed">{show.description}</p>
              
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
      
      {/* Content section with show details */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content column */}
          <div className="md:col-span-2">
            {/* About section with section title styling */}
            <h2 className="text-2xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              About the Show
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">{show.description}</p>
            
            {/* Cast section with styled cards */}
            <h2 className="text-2xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              Cast
            </h2>
            <div className="flex flex-wrap gap-4 mb-10">
              {show.cast.map((actor, index) => (
                <div 
                  key={index} 
                  className="bg-[#1a093b]/80 p-3 rounded-lg border border-[#00e5ff]/20 text-[#b0b3c6] hover:bg-[#00e5ff]/10 hover:text-white hover:border-[#00e5ff]/40 transition-all duration-300"
                >
                  {actor}
                </div>
              ))}
            </div>
            
            {/* Creator section */}
            <h2 className="text-2xl font-bold mb-4 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              Creator
            </h2>
            <p className="mb-8 text-[#00e5ff]">{show.creator}</p>

            {/* Episodes section with enhanced styling */}
            <h2 className="text-2xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#00e5ff]">
              Episodes
            </h2>
            <div className="space-y-4 mb-8">
              {Array.from({ length: Math.min(3, show.episodes || 0) }, (_, i) => (
                <div 
                  key={i} 
                  className="bg-[#1a093b]/50 p-4 rounded-lg border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 hover:bg-[#1a093b]/80 flex items-center transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 mr-4 bg-[#0f0617] rounded-md flex items-center justify-center overflow-hidden relative group-hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                    <div className="absolute inset-0 bg-[#00e5ff]/0 group-hover:bg-[#00e5ff]/10 transition-colors duration-300"></div>
                    <svg className="w-8 h-8 text-[#00e5ff] transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-[#00e5ff] transition-colors duration-300">Episode {i + 1}</h3>
                    <p className="text-[#b0b3c6] text-sm">48 min</p>
                  </div>
                </div>
              ))}
              {show.episodes > 3 && (
                <button className="text-[#00e5ff] hover:text-[#00b8d9] transition-colors duration-300 flex items-center">
                  <span>View All Episodes</span>
                  <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
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
                  <p className="text-[#00e5ff]">{show.languages.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Genre</h4>
                  <div className="flex flex-wrap gap-2">
                    {show.genre.map((item, index) => (
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
                  <p className="text-[#00e5ff]">{show.year}</p>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Seasons</h4>
                  <p className="text-[#00e5ff]">{show.seasons}</p>
                </div>
                <div>
                  <h4 className="text-[#b0b3c6] font-semibold mb-2">Episodes</h4>
                  <p className="text-[#00e5ff]">{show.episodes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;