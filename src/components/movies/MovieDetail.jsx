import React from 'react';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div className="text-center text-gray-500 mt-20 text-xl">Movie not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-extrabold mb-6">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-2/3">
          <p className="mb-4 text-lg">
            <span className="font-semibold">Release Date:</span> {movie.releaseDate}
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            <span className="font-semibold">Overview:</span> {movie.overview}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Rating:</span>{' '}
            <span className="text-yellow-400">{movie.rating} / 10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
