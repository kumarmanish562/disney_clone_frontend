import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img 
        src={movie.thumbnail} 
        alt={movie.title} 
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white truncate">{movie.title}</h3>
        <p className="text-gray-400 mt-2">{movie.releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
