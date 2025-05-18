import React from 'react';
import { Link } from 'react-router-dom';

const CategoryRow = ({ title, items, type }) => {
  return (
    <section className="my-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <Link to={`/${type}/${item.id}`} key={item.id} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 transform group-hover:scale-105">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {item.title}
                    </h3>
                    {item.year && (
                      <p className="text-gray-300 text-xs md:text-sm">{item.year}</p>
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
