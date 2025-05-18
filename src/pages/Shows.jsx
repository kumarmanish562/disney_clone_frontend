import React, { useState } from 'react';

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
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 tracking-wide">TV Shows</h1>

      <div className="flex flex-wrap gap-5 mb-12 justify-center">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300
              ${
                selectedGenre === genre
                  ? 'bg-[#0071CE] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#005BB5] hover:text-white'
              }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {filteredShows.map((show) => (
          <div
            key={show.id}
            className="group cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
            title={`${show.title} (${show.year})`}
          >
            <div className="relative overflow-hidden">
              <img
                src={show.poster}
                alt={show.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{show.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {show.year} • {show.genre}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{show.title}</h3>
              <p className="text-sm text-gray-500">{show.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
