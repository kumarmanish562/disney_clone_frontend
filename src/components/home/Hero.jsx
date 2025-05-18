import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample slides: You can add more movies or shows as needed
const slides = [
  {
    id: 1,
    title: "Loki",
    description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame.'",
    image: "https://image.tmdb.org/t/p/w500//kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    type: "shows",
    mediaId: "loki"
  },
  {
    id: 2,
    title: "The Falcon and the Winter Soldier",
    description: "Following the events of 'Avengers: Endgame,' Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
    image: "https://image.tmdb.org/t/p/w500//6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    type: "shows",
    mediaId: "falcon-winter-soldier"
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    image: "https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    type: "movies",
    mediaId: "avengers-endgame"
  }
];



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(4, 7, 20, 0.8), rgba(4, 7, 20, 0.1)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-20">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6 text-gray-300">{slide.description}</p>
              <Link
                to={`/${slide.type}/${slide.mediaId}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md inline-flex items-center transition"
              >
                <span className="mr-2">Watch Now</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="hidden md:block w-[300px] rounded-lg overflow-hidden shadow-lg">
              <img src={slide.image} alt={slide.title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
