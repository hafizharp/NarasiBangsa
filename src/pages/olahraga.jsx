import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Filter, TrendingUp } from 'lucide-react';

const Olahraga = () => {
  const location = useLocation();
  const [sortBy, setSortBy] = useState('latest');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const news = [
    {
      id: 1,
      title: "Timnas Indonesia Melaju ke Final",
      excerpt: "Timnas Indonesia berhasil menumbangkan lawan berat di semifinal turnamen internasional...",
      image: "https://source.unsplash.com/random/800x600?soccer",
      date: "2024-05-10",
      readTime: "3 min",
      category: "Sepak Bola"
    },
    {
      id: 2,
      title: "Rekor Dunia Lari 100 Meter Dipecahkan",
      excerpt: "Pelari muda dari Jamaika mencatat rekor luar biasa di kejuaraan dunia atletik...",
      image: "https://source.unsplash.com/random/800x600?athletics",
      date: "2024-05-09",
      readTime: "2 min",
      category: "Atletik"
    },
    {
      id: 3,
      title: "NBA Playoff 2024: Persaingan Memanas",
      excerpt: "Tim-tim unggulan terus bertarung sengit dalam playoff musim ini...",
      image: "https://source.unsplash.com/random/800x600?basketball",
      date: "2024-05-08",
      readTime: "4 min",
      category: "Basket"
    }
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
          Berita Olahraga Dunia
        </motion.h1>
        <p className="text-lg text-gray-600">
          Informasi terkini tentang dunia olahraga dari sepak bola, basket, hingga atletik internasional.
        </p>
      </div>

      {/* Filter + Trending Tags */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <option value="latest">Terbaru</option>
            <option value="popular">Terpopuler</option>
            <option value="trending">Trending</option>
          </select>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <TrendingUp className="w-4 h-4 text-red-500" />
          {['#SepakBola', '#NBAPlayoffs', '#Olimpiade'].map(tag => (
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

export default Olahraga;
