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
    description: `Carol Danvers becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.`,
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
    <div className="bg-[#f2f4f7] min-h-screen">
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(4, 7, 20, 0.9), rgba(4, 7, 20, 0.6)), url(${movie.banner})`,
        }}
      >
        <div className="container mx-auto h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="hidden md:block">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="rounded-lg shadow-xl max-w-[240px]" 
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.duration}</span>
                <span>•</span>
                <span>{movie.rating}</span>
                <span>•</span>
                <span>{movie.genre.join(', ')}</span>
              </div>
              <p className="text-lg mb-6 max-w-2xl text-gray-700">{movie.description}</p>
              <button className="bg-[#0071CE] hover:bg-[#005BB5] text-white py-3 px-8 rounded-md flex items-center">
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Movie</h2>
            <p className="mb-8 text-gray-700">{movie.description}</p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Cast</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {movie.cast.map((actor, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-gray-800">
                  {actor}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Director</h2>
            <p className="mb-8 text-gray-700">{movie.director}</p>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Information</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="text-gray-500 font-semibold">Available in</h4>
                  <p>{movie.languages.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold">Genre</h4>
                  <p>{movie.genre.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold">Release Year</h4>
                  <p>{movie.year}</p>
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
