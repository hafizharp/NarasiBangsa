import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, TrendingUp, Filter } from 'lucide-react';

// Export subcategories for navbar
export const subcategoriesGayaHidup = [
  { id: 'kesehatan', name: 'Kesehatan', color: 'bg-green-500' },
  { id: 'fashion', name: 'Fashion', color: 'bg-purple-500' },
  { id: 'travel', name: 'Travel', color: 'bg-blue-500' },
  { id: 'kuliner', name: 'Kuliner', color: 'bg-orange-500' },
  { id: 'hobi', name: 'Hobi', color: 'bg-red-500' }
];

// Export recent news for navbar
export const recentGayaHidupNews = [
  {
    id: 1,
    slug: 'tren-gaya-hidup-sehat-2024',
    title: "Tren Gaya Hidup Sehat di 2024",
    image: "https://source.unsplash.com/random/800x600?healthy-lifestyle",
  },
  {
    id: 2,
    slug: 'destinasi-wellness-travel',
    title: "Destinasi Wellness Travel Terpopuler Dunia",
    image: "https://source.unsplash.com/random/800x600?wellness-travel",
  },
  {
    id: 3,
    slug: 'fashion-ramah-lingkungan',
    title: "Fashion Ramah Lingkungan Menjadi Sorotan",
    image: "https://source.unsplash.com/random/800x600?eco-fashion",
  }
];

const GayaHidup = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('latest');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const news = [
    {
      id: 1,
      title: "Tren Gaya Hidup Sehat di 2024",
      excerpt: "Mulai dari pola makan plant-based hingga mindfulness, tren gaya hidup sehat semakin digemari...",
      image: "https://source.unsplash.com/random/800x600?healthy-lifestyle",
      date: "2024-04-20",
      readTime: "4 min",
      category: "Kesehatan"
    },
    {
      id: 2,
      title: "Destinasi Wellness Travel Terpopuler Dunia",
      excerpt: "Liburan kini tak hanya soal hiburan, tapi juga relaksasi dan pemulihan diri...",
      image: "https://source.unsplash.com/random/800x600?wellness-travel",
      date: "2024-04-18",
      readTime: "5 min",
      category: "Travel"
    },
    {
      id: 3,
      title: "Fashion Ramah Lingkungan Menjadi Sorotan",
      excerpt: "Desainer dunia mulai beralih ke bahan daur ulang demi keberlanjutan mode...",
      image: "https://source.unsplash.com/random/800x600?eco-fashion",
      date: "2024-04-16",
      readTime: "5 min",
      category: "Fashion"
    },
    {
      id: 4,
      title: "Kuliner Fusion: Perpaduan Cita Rasa Dunia",
      excerpt: "Tren kuliner fusion yang menggabungkan berbagai masakan dunia semakin populer...",
      image: "https://source.unsplash.com/random/800x600?fusion-food",
      date: "2024-04-14",
      readTime: "3 min",
      category: "Kuliner"
    },
    {
      id: 5,
      title: "Hobi Berkebun Mini di Apartemen",
      excerpt: "Berkebun di ruang terbatas menjadi hobi yang diminati kaum urban...",
      image: "https://source.unsplash.com/random/800x600?urban-gardening",
      date: "2024-04-12",
      readTime: "4 min",
      category: "Hobi"
    },
    {
      id: 6,
      title: "Yoga dan Meditasi untuk Kesehatan Mental",
      excerpt: "Praktik yoga dan meditasi terbukti efektif menjaga kesehatan mental di era digital...",
      image: "https://source.unsplash.com/random/800x600?yoga-meditation",
      date: "2024-04-10",
      readTime: "6 min",
      category: "Kesehatan"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Highlight Section for Active Category */}
      <div className="mb-8">
        {activeCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-3 h-3 rounded-full ${
                subcategoriesGayaHidup.find(s => s.id === activeCategory)?.color
              }`} />
              <h2 className="text-xl font-bold">
                {subcategoriesGayaHidup.find(s => s.id === activeCategory)?.name}
              </h2>
            </div>
            <p className="text-gray-600">
              Berita terkini seputar {
                subcategoriesGayaHidup.find(s => s.id === activeCategory)?.name.toLowerCase()
              } dan gaya hidup modern
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Header */}
      <div className="space-y-4 mb-8">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Gaya Hidup Dunia
        </motion.h1>
        <p className="text-lg text-gray-600">
          Update tren gaya hidup global, mulai dari kesehatan, fashion, hingga travel.
        </p>
      </div>

      {/* Filter and Trending Tags */}
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
          {['#Wellness', '#MindfulLiving', '#SustainableFashion'].map(tag => (
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

      {/* Filter Dropdown */}
      <AnimatePresence>
        {filterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium mb-3">Filter berdasarkan kategori:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    activeCategory === 'all'
                      ? 'bg-[#4A4A4A] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Semua Kategori
                </button>
                {subcategoriesGayaHidup.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-[#4A4A4A] text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news
          .filter(item => activeCategory === 'all' || 
            item.category.toLowerCase() === subcategoriesGayaHidup.find(s => s.id === activeCategory)?.name.toLowerCase())
          .map((item) => (
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

export default GayaHidup;
