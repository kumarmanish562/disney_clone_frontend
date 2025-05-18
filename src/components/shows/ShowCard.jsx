import React from 'react';

const ShowCard = ({ show }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={show.thumbnail}
        alt={show.title}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{show.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{show.description}</p>
      </div>
    </div>
  );
};

export default ShowCard;
