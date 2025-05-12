import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Filter } from 'lucide-react';

const Otomotif = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const news = [
    {
      id: 1,
      title: "Peluncuran Mobil Listrik Terbaru dari Tesla",
      excerpt: "Tesla memperkenalkan inovasi terbaru dalam kendaraan listrik dengan fitur autopilot generasi berikutnya...",
      image: "https://source.unsplash.com/random/800x600?tesla",
      date: "2024-04-21",
      readTime: "4 min",
      category: "Mobil Listrik"
    },
    {
      id: 2,
      title: "Pameran Otomotif Dunia 2024: Mobil Konsep Paling Menarik",
      excerpt: "Pameran otomotif global menampilkan berbagai mobil konsep futuristik dari berbagai produsen ternama...",
      image: "https://source.unsplash.com/random/800x600?car-show",
      date: "2024-04-18",
      readTime: "5 min",
      category: "Pameran Dunia"
    },
    {
      id: 3,
      title: "Review: Porsche 911 Turbo S 2024",
      excerpt: "Performa luar biasa, desain klasik yang diperbarui, dan fitur modern membuat Porsche ini semakin unggul...",
      image: "https://source.unsplash.com/random/800x600?porsche",
      date: "2024-04-15",
      readTime: "6 min",
      category: "Review"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Berita Otomotif Dunia
        </motion.h1>
        <p className="text-lg text-gray-600">
          Update terkini seputar kendaraan, teknologi otomotif, dan tren industri global.
        </p>
      </div>

      {/* Filter and Trending Tags */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <select
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <option value="latest">Terbaru</option>
            <option value="popular">Terpopuler</option>
            <option value="trending">Trending</option>
          </select>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <TrendingUp className="w-4 h-4 text-red-500" />
          {['#MobilListrik', '#F1', '#TeknologiOtomotif'].map(tag => (
            <Link
              key={tag}
              to={`/tag/${tag.slice(1)}`}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <Link to={`/berita/${item.id}`} className="group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-[#4A4A4A] bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#4A4A4A] line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {item.excerpt}
                </p>
                <time className="block mt-4 text-sm text-gray-500">
                  {item.date}
                </time>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>


       {/* Pagination */}
       <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg ${
                page === 1
                  ? 'bg-[#4A4A4A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otomotif;
