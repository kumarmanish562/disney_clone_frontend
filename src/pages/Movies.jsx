import React, { useState } from 'react';

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
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full ${
              selectedGenre === genre 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg relative transition-transform duration-300 group-hover:scale-105">
              <img
                src={movie.poster}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                }}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <p className="text-gray-300 text-sm">{movie.year} • {movie.genre}</p>
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-lg">{movie.title}</h3>
            <p className="text-gray-400 text-sm">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
