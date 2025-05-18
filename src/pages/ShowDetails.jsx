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
    <div>
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(4, 7, 20, 0.9), rgba(4, 7, 20, 0.6)), url(${show.banner})`,
        }}
      >
        <div className="container mx-auto h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="hidden md:block">
              <img 
                src={show.poster} 
                alt={show.title} 
                className="rounded-lg shadow-xl max-w-[240px]" 
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{show.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                <span>{show.year}</span>
                <span>•</span>
                <span>{show.seasons} Season{show.seasons > 1 ? 's' : ''}</span>
                <span>•</span>
                <span>{show.episodes} Episodes</span>
                <span>•</span>
                <span>{show.rating}</span>
                <span>•</span>
                <span>{show.genre.join(', ')}</span>
              </div>
              <p className="text-lg mb-6 max-w-2xl">{show.description}</p>
              <button className="bg-disney-blue hover:bg-blue-700 text-white py-3 px-8 rounded-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Show</h2>
            <p className="mb-8">{show.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">Cast</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {show.cast.map((actor, index) => (
                <div key={index} className="bg-disney-gray p-3 rounded-lg">
                  {actor}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Creator</h2>
            <p className="mb-8">{show.creator}</p>

            {/* Episodes section */}
            <h2 className="text-2xl font-bold mb-4">Episodes</h2>
            <div className="space-y-4 mb-8">
              {Array.from({ length: Math.min(3, show.episodes || 0) }, (_, i) => (
                <div key={i} className="bg-disney-gray p-4 rounded-lg flex items-center">
                  <div className="w-16 h-16 mr-4 bg-black rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Episode {i + 1}</h3>
                    <p className="text-gray-400 text-sm">48 min</p>
                  </div>
                </div>
              ))}
              {show.episodes > 3 && (
                <button className="text-disney-blue hover:underline">View All Episodes</button>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-disney-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400">Available in</h4>
                  <p>{show.languages.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Genre</h4>
                  <p>{show.genre.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-gray-400">Release Year</h4>
                  <p>{show.year}</p>
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