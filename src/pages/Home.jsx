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
    <div className="bg-gray-950 text-white min-h-screen">
      <Hero />

      {/* Disney+ Brands Section */}
      <div className="py-10 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore by Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map(({ name, logo, video }) => (
            <div
              key={name}
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              style={{
                backgroundColor: '#ADD8E6',
                border: '2px solidrgb(81, 97, 168)',
              }}
              title={name}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0"
              />
              <div className="relative z-10 flex items-center justify-center h-32 sm:h-36 p-4">
                <img
                  src={logo}
                  alt={name}
                  className="h-12 sm:h-14 object-contain transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold drop-shadow-lg">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Sections */}
      <CategoryRow
        title="Trending Movies"
        items={trendingMovies}
        type="movies"
        titleColor="text-blue-300"
      />
      <CategoryRow
        title="Popular Shows"
        items={popularShows}
        type="shows"
        titleColor="text-blue-300"
      />
      <CategoryRow
        title="Disney+ Originals"
        items={disneyOriginals}
        type="movies"
        titleColor="text-blue-300"
      />
    </div>
  );
};

export default Home;
