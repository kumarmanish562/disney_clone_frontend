import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-disney-blue hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;