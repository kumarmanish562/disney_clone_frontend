import React from 'react';
import { Link } from 'react-router-dom';

const CategoryRow = ({ title, items, type }) => {
  return (
    <section className="my-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title with animated underline on hover */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 inline-block relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00e5ff] hover:after:w-full after:transition-all after:duration-300">{title}</h2>

        {/* Grid of category items with responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <Link to={`/${type}/${item.id}`} key={item.id} className="group">
              {/* Card container with hover animation */}
              <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                {/* Poster image with subtle zoom effect */}
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay with title and year that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0617]/95 via-[#1a093b]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {item.title}
                    </h3>
                    {item.year && (
                      <p className="text-[#00e5ff] text-xs md:text-sm mt-1">
                        {item.year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryRow;