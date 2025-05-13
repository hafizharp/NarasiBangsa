import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Filter, TrendingUp, ChevronDown } from 'lucide-react';

// Export subcategories so they can be imported elsewhere
export const subcategoriesTeknologi = [
  { id: 'gadget', name: 'Gadget', color: 'bg-blue-500' },
  { id: 'software', name: 'Software', color: 'bg-green-500' },
  { id: 'ai', name: 'AI & Robotik', color: 'bg-purple-500' },
  { id: 'startup', name: 'Startup', color: 'bg-red-500' },
  { id: 'internet', name: 'Internet', color: 'bg-orange-500' }
];

// Export recent news for navbar
export const recentTeknologiNews = [
  {
    id: 1,
    slug: 'apple-rilis-produk-ai',
    title: 'Apple Rilis Produk AI Terbaru',
    image: 'https://source.unsplash.com/random/800x600?technology',
  },
  {
    id: 2,
    slug: 'startup-indonesia-ces',
    title: 'Startup Indonesia Sukses di CES 2024',
    image: 'https://source.unsplash.com/random/800x600?startup',
  },
  {
    id: 3,
    slug: 'perkembangan-ai-generatif',
    title: 'Perkembangan AI Generatif Tahun Ini',
    image: 'https://source.unsplash.com/random/800x600?ai',
  },
];

const Teknologi = () => {
  const location = useLocation();
  const [sortBy, setSortBy] = useState('latest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    // Extract category from URL query parameters
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }
    
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  const news = [
    {
      id: 1,
      title: "Apple Rilis Produk AI Terbaru",
      excerpt: "Apple mengumumkan produk AI terbarunya yang akan mengubah cara kita berinteraksi dengan teknologi...",
      image: "https://source.unsplash.com/random/800x600?apple",
      date: "2024-05-15",
      readTime: "4 min",
      category: "Gadget"
    },
    {
      id: 2,
      title: "Startup Indonesia Sukses di CES 2024",
      excerpt: "Beberapa startup Indonesia berhasil mencuri perhatian di ajang Consumer Electronics Show 2024...",
      image: "https://source.unsplash.com/random/800x600?startup",
      date: "2024-05-14",
      readTime: "3 min",
      category: "Startup"
    },
    {
      id: 3,
      title: "Perkembangan AI Generatif Tahun Ini",
      excerpt: "AI generatif terus berkembang dengan kemampuan yang semakin canggih dan aplikasi yang lebih luas...",
      image: "https://source.unsplash.com/random/800x600?ai",
      date: "2024-05-13",
      readTime: "5 min",
      category: "AI & Robotik"
    },
    {
      id: 4,
      title: "Microsoft Luncurkan Windows 12",
      excerpt: "Microsoft secara resmi meluncurkan Windows 12 dengan fitur-fitur baru yang revolusioner...",
      image: "https://source.unsplash.com/random/800x600?windows",
      date: "2024-05-12",
      readTime: "4 min",
      category: "Software"
    },
    {
      id: 5,
      title: "Perkembangan Teknologi 5G di Indonesia",
      excerpt: "Implementasi teknologi 5G di Indonesia semakin meluas dengan berbagai manfaat yang dirasakan...",
      image: "https://source.unsplash.com/random/800x600?5g",
      date: "2024-05-11",
      readTime: "3 min",
      category: "Internet"
    },
    {
      id: 6,
      title: "Robot Humanoid Terbaru dari Boston Dynamics",
      excerpt: "Boston Dynamics memperkenalkan robot humanoid terbaru dengan kemampuan yang lebih canggih...",
      image: "https://source.unsplash.com/random/800x600?robot",
      date: "2024-05-10",
      readTime: "4 min",
      category: "AI & Robotik"
    },
    {
      id: 7,
      title: "Google Perbarui Algoritma Pencarian",
      excerpt: "Google mengumumkan pembaruan algoritma pencarian yang akan mengubah cara konten ditampilkan...",
      image: "https://source.unsplash.com/random/800x600?google",
      date: "2024-05-09",
      readTime: "3 min",
      category: "Internet"
    },
    {
      id: 8,
      title: "Samsung Luncurkan Seri Galaxy Terbaru",
      excerpt: "Samsung memperkenalkan seri Galaxy terbaru dengan inovasi kamera dan performa yang ditingkatkan...",
      image: "https://source.unsplash.com/random/800x600?samsung",
      date: "2024-05-08",
      readTime: "4 min",
      category: "Gadget"
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
                subcategoriesTeknologi.find(s => s.id === activeCategory)?.color
              }`} />
              <h2 className="text-xl font-bold">
                {subcategoriesTeknologi.find(s => s.id === activeCategory)?.name}
              </h2>
            </div>
            <p className="text-gray-600">
              Berita terkini seputar {
                subcategoriesTeknologi.find(s => s.id === activeCategory)?.name.toLowerCase()
              } dan perkembangan teknologi terbaru
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
          Berita Teknologi
        </motion.h1>
        <p className="text-lg text-gray-600">
          Informasi terkini tentang perkembangan teknologi, gadget, software, dan inovasi digital.
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
          {['#AI', '#Gadget', '#Startup'].map(tag => (
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
                {subcategoriesTeknologi.map((cat) => (
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
            item.category.toLowerCase() === subcategoriesTeknologi.find(s => s.id === activeCategory)?.name.toLowerCase())
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

export default Teknologi;
