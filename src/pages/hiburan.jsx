import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Filter, TrendingUp, ChevronDown } from 'lucide-react';

// Export subcategories so they can be imported elsewhere
export const subcategoriesHiburan = [
  { id: 'film', name: 'Film', color: 'bg-red-500' },
  { id: 'musik', name: 'Musik', color: 'bg-blue-500' },
  { id: 'selebriti', name: 'Selebriti', color: 'bg-purple-500' },
  { id: 'k-pop', name: 'K-Pop', color: 'bg-pink-500' },
  { id: 'drama', name: 'Drama', color: 'bg-orange-500' }
];

// Export recent news for navbar
export const recentHiburanNews = [
  {
    id: 1,
    slug: 'film-blockbuster-2024',
    title: 'Film Blockbuster Terbaru 2024 Tembus Rekor Penonton',
    image: 'https://source.unsplash.com/random/800x600?movie',
  },
  {
    id: 2,
    slug: 'festival-musik-dunia',
    title: 'Festival Musik Dunia Hadirkan Artis Terkenal',
    image: 'https://source.unsplash.com/random/800x600?music-festival',
  },
  {
    id: 3,
    slug: 'artis-kpop-billboard',
    title: 'Artis K-Pop Dominasi Billboard',
    image: 'https://source.unsplash.com/random/800x600?kpop',
  },
];

const Hiburan = () => {
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
      title: "Film Blockbuster Terbaru 2024 Tembus Rekor Penonton",
      excerpt: "Film aksi terbaru mencatat sejarah dengan jutaan penonton hanya dalam beberapa hari...",
      image: "https://source.unsplash.com/random/800x600?movie",
      date: "2024-05-01",
      readTime: "5 min",
      category: "Film"
    },
    {
      id: 2,
      title: "Festival Musik Dunia Hadirkan Artis Terkenal",
      excerpt: "Festival musik tahunan menghadirkan pertunjukan spektakuler dari musisi internasional...",
      image: "https://source.unsplash.com/random/800x600?music-festival",
      date: "2024-04-27",
      readTime: "4 min",
      category: "Musik"
    },
    {
      id: 3,
      title: "Artis K-Pop Dominasi Billboard",
      excerpt: "Grup K-Pop kembali mencetak prestasi gemilang di tangga lagu dunia...",
      image: "https://source.unsplash.com/random/800x600?kpop",
      date: "2024-04-25",
      readTime: "3 min",
      category: "K-Pop"
    },
    {
      id: 4,
      title: "Aktor Hollywood Raih Penghargaan Bergengsi",
      excerpt: "Aktor papan atas Hollywood berhasil memenangkan penghargaan tertinggi di industri film...",
      image: "https://source.unsplash.com/random/800x600?actor",
      date: "2024-04-22",
      readTime: "4 min",
      category: "Selebriti"
    },
    {
      id: 5,
      title: "Serial Drama Terbaru Pecahkan Rekor Penonton",
      excerpt: "Serial drama yang baru dirilis menjadi perbincangan hangat dengan jumlah penonton yang fantastis...",
      image: "https://source.unsplash.com/random/800x600?drama",
      date: "2024-04-20",
      readTime: "5 min",
      category: "Drama"
    },
    {
      id: 6,
      title: "Konser Virtual Reality Pertama di Indonesia",
      excerpt: "Inovasi teknologi VR membawa pengalaman konser musik ke level yang baru...",
      image: "https://source.unsplash.com/random/800x600?vr-concert",
      date: "2024-04-18",
      readTime: "4 min",
      category: "Musik"
    },
    {
      id: 7,
      title: "Penyanyi Solo Rilis Album Baru",
      excerpt: "Album terbaru dari penyanyi solo ini mendapat sambutan hangat dari penggemar...",
      image: "https://source.unsplash.com/random/800x600?singer",
      date: "2024-04-15",
      readTime: "3 min",
      category: "Musik"
    },
    {
      id: 8,
      title: "Film Dokumenter Raih Penghargaan Internasional",
      excerpt: "Film dokumenter karya sineas Indonesia mendapat pengakuan di festival film internasional...",
      image: "https://source.unsplash.com/random/800x600?documentary",
      date: "2024-04-12",
      readTime: "5 min",
      category: "Film"
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
                subcategoriesHiburan.find(s => s.id === activeCategory)?.color
              }`} />
              <h2 className="text-xl font-bold">
                {subcategoriesHiburan.find(s => s.id === activeCategory)?.name}
              </h2>
            </div>
            <p className="text-gray-600">
              Berita terkini seputar {
                subcategoriesHiburan.find(s => s.id === activeCategory)?.name.toLowerCase()
              } dan dunia hiburan
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
          Berita Hiburan Dunia
        </motion.h1>
        <p className="text-lg text-gray-600">
          Kabar terkini dari dunia film, musik, selebriti, dan budaya pop global.
        </p>
      </div>

      {/* Filter and Sort + Trending */}
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
          {['#Movie2024', '#KPop', '#FestivalMusik'].map(tag => (
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
                {subcategoriesHiburan.map((cat) => (
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
            item.category.toLowerCase() === subcategoriesHiburan.find(s => s.id === activeCategory)?.name.toLowerCase())
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

export default Hiburan;
