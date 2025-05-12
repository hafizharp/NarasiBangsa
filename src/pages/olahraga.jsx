import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Filter, TrendingUp, ChevronDown } from 'lucide-react';

// Export subcategories so they can be imported elsewhere
export const subcategoriesOlahraga = [
  { id: 'sepak-bola', name: 'Sepak Bola', color: 'bg-green-500' },
  { id: 'basket', name: 'Basket', color: 'bg-orange-500' },
  { id: 'bulutangkis', name: 'Bulutangkis', color: 'bg-blue-500' },
  { id: 'formula-1', name: 'Formula 1', color: 'bg-red-500' },
  { id: 'moto-gp', name: 'Moto GP', color: 'bg-purple-500' }
];

// Export recent news for navbar
export const recentOlahragaNews = [
  {
    id: 1,
    slug: 'timnas-indonesia-final',
    title: 'Timnas Indonesia Melaju ke Final',
    image: 'https://source.unsplash.com/random/800x600?soccer',
  },
  {
    id: 2,
    slug: 'rekor-dunia-lari',
    title: 'Rekor Dunia Lari 100 Meter Dipecahkan',
    image: 'https://source.unsplash.com/random/800x600?athletics',
  },
  {
    id: 3,
    slug: 'nba-playoff-2024',
    title: 'NBA Playoff 2024: Persaingan Memanas',
    image: 'https://source.unsplash.com/random/800x600?basketball',
  },
];

const Olahraga = () => {
  const location = useLocation();
  const [sortBy, setSortBy] = useState('latest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

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
    },
    {
      id: 4,
      title: "Turnamen Bulutangkis Indonesia Open 2024",
      excerpt: "Para pemain top dunia akan bertanding di Indonesia Open tahun ini...",
      image: "https://source.unsplash.com/random/800x600?badminton",
      date: "2024-05-07",
      readTime: "3 min",
      category: "Bulutangkis"
    },
    {
      id: 5,
      title: "Formula 1 GP Monaco: Hasil Kualifikasi",
      excerpt: "Hasil kualifikasi GP Monaco menunjukkan persaingan ketat antar tim papan atas...",
      image: "https://source.unsplash.com/random/800x600?formula1",
      date: "2024-05-06",
      readTime: "5 min",
      category: "Formula 1"
    },
    {
      id: 6,
      title: "MotoGP Catalunya: Marquez Kembali Berjaya",
      excerpt: "Marc Marquez menunjukkan performa dominan di sirkuit Catalunya...",
      image: "https://source.unsplash.com/random/800x600?motogp",
      date: "2024-05-05",
      readTime: "4 min",
      category: "Moto GP"
    },
    {
      id: 7,
      title: "Persiapan Olimpiade Paris 2024",
      excerpt: "Atlet-atlet Indonesia mempersiapkan diri menghadapi Olimpiade Paris...",
      image: "https://source.unsplash.com/random/800x600?olympics",
      date: "2024-05-04",
      readTime: "6 min",
      category: "Olimpiade"
    },
    {
      id: 8,
      title: "Liga Champions: Hasil Drawing Semifinal",
      excerpt: "Hasil drawing semifinal Liga Champions mempertemukan tim-tim unggulan...",
      image: "https://source.unsplash.com/random/800x600?championsleague",
      date: "2024-05-03",
      readTime: "3 min",
      category: "Sepak Bola"
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
                subcategoriesOlahraga.find(s => s.id === activeCategory)?.color
              }`} />
              <h2 className="text-xl font-bold">
                {subcategoriesOlahraga.find(s => s.id === activeCategory)?.name}
              </h2>
            </div>
            <p className="text-gray-600">
              Berita terkini seputar {
                subcategoriesOlahraga.find(s => s.id === activeCategory)?.name.toLowerCase()
              } dari berbagai kompetisi
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
              <h3 className="font-medium mb-3">Filter berdasarkan cabang olahraga:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    activeCategory === 'all'
                      ? 'bg-[#4A4A4A] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Semua Cabang
                </button>
                {subcategoriesOlahraga.map((cat) => (
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
            item.category.toLowerCase() === subcategoriesOlahraga.find(s => s.id === activeCategory)?.name.toLowerCase())
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

export default Olahraga;
