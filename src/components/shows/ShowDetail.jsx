import React from 'react';

const ShowDetail = ({ show }) => {
  if (!show) {
    return <div className="text-center text-gray-500 p-6">Show details not available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{show.title}</h1>
      <img
        src={show.image || "https://via.placeholder.com/800x450?text=No+Image"}
        alt={show.title}
        className="w-full h-auto rounded-lg mb-6 object-cover"
      />
      <p className="text-gray-700 leading-relaxed mb-6">{show.description}</p>
      <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-md">
        Watch Now
      </button>
    </div>
  );
};

export default ShowDetail;
