import React from 'react';
import Hero from '../components/home/Hero';
import CategoryRow from '../components/home/CategoryRow';

// Importing images locally
import disneyLogo from '../assets/Images/disney.png';
import marvelLogo from '../assets/Images/marvel.png';
import nationalGLogo from '../assets/Images/nationalG.png';
import pixarLogo from '../assets/Images/pixar.png';
import starwarLogo from '../assets/Images/starwar.png';

// Importing videos locally
import disneyVideo from '../assets/Videos/disney.mp4';
import marvelVideo from '../assets/Videos/marvel.mp4';
import nationalGVideo from '../assets/Videos/national-geographic.mp4';
import pixarVideo from '../assets/Videos/pixar.mp4';
import starwarVideo from '../assets/Videos/star-wars.mp4';

// Movie and show data arrays
const trendingMovies = [
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    year: '2019'
  },
  {
    id: 'black-panther',
    title: 'Black Panther',
    poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    year: '2018'
  },
  {
    id: 'captain-marvel',
    title: 'Captain Marvel',
    poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    year: '2019'
  },
  {
    id: 'thor-ragnarok',
    title: 'Thor: Ragnarok',
    poster: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    year: '2017'
  },
  {
    id: 'doctor-strange',
    title: 'Doctor Strange',
    poster: 'https://image.tmdb.org/t/p/w500/xfWac8MTYDxujaxgPVcRD9yZaul.jpg',
    year: '2016'
  }
];

const popularShows = [
  {
    id: 'loki',
    title: 'Loki',
    poster: 'https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg',
    year: '2021'
  },
  {
    id: 'wandavision',
    title: 'WandaVision',
    poster: 'https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
    year: '2021'
  },
  {
    id: 'falcon-winter-soldier',
    title: 'The Falcon and The Winter Soldier',
    poster: 'https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    year: '2021'
  },
  {
    id: 'mandalorian',
    title: 'The Mandalorian',
    poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    year: '2019'
  },
  {
    id: 'what-if',
    title: 'What If...?',
    poster: 'https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg',
    year: '2021'
  }
];

const disneyOriginals = [
  {
    id: 'soul',
    title: 'Soul',
    poster: 'https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
    year: '2020'
  },
  {
    id: 'luca',
    title: 'Luca',
    poster: 'https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    year: '2021'
  },
  {
    id: 'turning-red',
    title: 'Turning Red',
    poster: 'https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    year: '2022'
  },
  {
    id: 'encanto',
    title: 'Encanto',
    poster: 'https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
    year: '2021'
  },
  {
    id: 'raya-and-the-last-dragon',
    title: 'Raya and the Last Dragon',
    poster: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    year: '2021'
  }
];

// Brand data with logos and videos
const brands = [
  {
    name: 'Disney',
    logo: disneyLogo,
    video: disneyVideo,
  },
  {
    name: 'Pixar',
    logo: pixarLogo,
    video: pixarVideo,
  },
  {
    name: 'Marvel',
    logo: marvelLogo,
    video: marvelVideo,
  },
  {
    name: 'Star Wars',
    logo: starwarLogo,
    video: starwarVideo,
  },
  {
    name: 'National Geographic',
    logo: nationalGLogo,
    video: nationalGVideo,
  }
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0617] to-[#0f0617] text-white min-h-screen">
      {/* Hero banner/carousel */}
      <Hero />

      {/* Disney+ Brands Section with enhanced styling */}
      <div className="py-12 container mx-auto px-4 md:px-8">
        {/* Section title with animated underline on hover */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00e5ff] hover:after:w-full after:transition-all after:duration-300">
          Explore by Brands
        </h2>
        
        {/* Brands grid with animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map(({ name, logo, video }) => (
            <div
              key={name}
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: 'rgba(26, 9, 59, 0.5)',
                border: '2px solid rgba(0, 229, 255, 0.1)',
              }}
              title={name}
            >
              {/* Background video that plays on hover */}
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0"
              />
              
              {/* Brand logo */}
              <div className="relative z-10 flex items-center justify-center h-32 sm:h-36 p-4">
                <img
                  src={logo}
                  alt={name}
                  className="h-12 sm:h-14 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Brand name that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-lg font-semibold drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content category sections */}
      <CategoryRow
        title="Trending Movies"
        items={trendingMovies}
        type="movies"
      />
      
      <CategoryRow
        title="Popular Shows"
        items={popularShows}
        type="shows"
      />
      
      <CategoryRow
        title="Disney+ Originals"
        items={disneyOriginals}
        type="movies"
      />
    </div>
  );
};

export default Home;