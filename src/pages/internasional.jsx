import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Filter, TrendingUp, ChevronDown } from 'lucide-react';

// Export subcategories so they can be imported elsewhere
export const subcategoriesInternasional = [
  { id: 'asia', name: 'Asia', color: 'bg-blue-500' },
  { id: 'eropa', name: 'Eropa', color: 'bg-red-500' },
  { id: 'amerika', name: 'Amerika', color: 'bg-green-500' },
  { id: 'timur-tengah', name: 'Timur Tengah', color: 'bg-purple-500' },
  { id: 'afrika', name: 'Afrika', color: 'bg-orange-500' }
];

// Export recent news for navbar
export const recentInternasionalNews = [
  {
    id: 1,
    slug: 'konflik-israel-hamas',
    title: 'Konflik Israel-Hamas Memasuki Fase Baru',
    image: 'https://source.unsplash.com/random/800x600?conflict',
  },
  {
    id: 2,
    slug: 'pemilu-prancis',
    title: 'Pemilu Prancis: Emmanuel Macron Hadapi Tantangan Baru',
    image: 'https://source.unsplash.com/random/800x600?france',
  },
  {
    id: 3,
    slug: 'china-satelit-baru',
    title: 'China Luncurkan Satelit Pengamatan Bumi Terbaru',
    image: 'https://source.unsplash.com/random/800x600?satellite',
  },
];

const Internasional = () => {
  const [sortBy, setSortBy] = useState('latest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Mock data - will be replaced with API call
  const news = [
    {
      id: 1,
      title: "Konflik Israel-Hamas Memasuki Fase Baru",
      excerpt: "Perkembangan terbaru konflik di Gaza menunjukkan eskalasi yang mengkhawatirkan...",
      image: "https://source.unsplash.com/random/800x600?conflict",
      date: "2024-04-22",
      readTime: "6 min",
      category: "Timur Tengah"
    },
    {
      id: 2,
      title: "Pemilu Prancis: Emmanuel Macron Hadapi Tantangan Baru",
      excerpt: "Presiden Prancis menghadapi tekanan politik seiring menguatnya oposisi...",
      image: "https://source.unsplash.com/random/800x600?france",
      date: "2024-04-21",
      readTime: "4 min",
      category: "Eropa"
    },
    {
      id: 3,
      title: "China Luncurkan Satelit Pengamatan Bumi Terbaru",
      excerpt: "Satelit baru ini dilengkapi teknologi canggih untuk pemantauan lingkungan...",
      image: "https://source.unsplash.com/random/800x600?satellite",
      date: "2024-04-20",
      readTime: "5 min",
      category: "Asia"
    },
    {
      id: 4,
      title: "Krisis Ekonomi Argentina Memburuk, Inflasi Capai Rekor Tertinggi",
      excerpt: "Pemerintah Argentina mengumumkan langkah-langkah darurat menghadapi krisis...",
      image: "https://source.unsplash.com/random/800x600?economy",
      date: "2024-04-19",
      readTime: "7 min",
      category: "Amerika"
    },
    {
      id: 5,
      title: "PBB Serukan Bantuan Kemanusiaan untuk Sudan",
      excerpt: "Konflik berkepanjangan di Sudan memicu krisis kemanusiaan yang mengkhawatirkan...",
      image: "https://source.unsplash.com/random/800x600?humanitarian",
      date: "2024-04-18",
      readTime: "5 min",
      category: "Afrika"
    },
    {
      id: 6,
      title: "Uni Eropa Sepakati Regulasi AI Komprehensif",
      excerpt: "Regulasi baru ini akan mengatur penggunaan kecerdasan buatan di seluruh Eropa...",
      image: "https://source.unsplash.com/random/800x600?technology",
      date: "2024-04-17",
      readTime: "6 min",
      category: "Eropa"
    },
    {
      id: 7,
      title: "Jepang Tingkatkan Kerjasama Pertahanan dengan Australia",
      excerpt: "Kedua negara menandatangani perjanjian strategis menghadapi tantangan keamanan regional...",
      image: "https://source.unsplash.com/random/800x600?defense",
      date: "2024-04-16",
      readTime: "4 min",
      category: "Asia"
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
                subcategoriesInternasional.find(s => s.id === activeCategory)?.color
              }`} />
              <h2 className="text-xl font-bold">
                {subcategoriesInternasional.find(s => s.id === activeCategory)?.name}
              </h2>
            </div>
            <p className="text-gray-600">
              Berita terkini seputar {
                subcategoriesInternasional.find(s => s.id === activeCategory)?.name.toLowerCase()
              } dari berbagai belahan dunia
            </p>
          </motion.div>
        )}
      </div>

      {/* Header Section */}
      <div className="space-y-4 mb-8">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Berita Internasional
        </motion.h1>
        <p className="text-lg text-gray-600">
          Informasi terkini dari berbagai belahan dunia mencakup politik, konflik, dan peristiwa global
        </p>
      </div>

      {/* Filter and Sort Section */}
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

        {/* Trending Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <TrendingUp className="w-4 h-4 text-red-500" />
          {['#PBB', '#Konflik', '#DiplomatikGlobal'].map(tag => (
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
              <h3 className="font-medium mb-3">Filter berdasarkan wilayah:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    activeCategory === 'all'
                      ? 'bg-[#4A4A4A] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Semua Wilayah
                </button>
                {subcategoriesInternasional.map((cat) => (
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
            item.category.toLowerCase() === subcategoriesInternasional.find(s => s.id === activeCategory)?.name.toLowerCase())
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

export default Internasional;
