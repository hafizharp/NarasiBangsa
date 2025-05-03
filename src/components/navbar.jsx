import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '../config/routes';
import logo from '../assets/logo-narasi.png'; // Make sure to add your logo to assets folder

const subcategories = [
  { id: 'politik', name: 'Politik', color: 'bg-blue-500' },
  { id: 'hukum', name: 'Hukum & Kriminal', color: 'bg-red-500' },
  { id: 'peristiwa', name: 'Peristiwa', color: 'bg-green-500' },
  { id: 'pemilu', name: 'Pemilu 2024', color: 'bg-purple-500' },
  { id: 'pemerintahan', name: 'Pemerintahan', color: 'bg-orange-500' }
];

const navItems = [
  { 
    label: 'Nasional', 
    href: routes.nasional,
    hasDropdown: true,
    dropdownItems: subcategories
  },
  { label: 'Internasional', href: routes.internasional },
  { label: 'Ekonomi', href: routes.ekonomi },
  { label: 'Olahraga', href: routes.olahraga },
  { label: 'Teknologi', href: routes.teknologi },
  { label: 'Hiburan', href: routes.hiburan },
  { label: 'Gaya Hidup', href: routes.gayaHidup },
  { label: 'Otomotif', href: routes.otomotif },
];

// Add after the navItems array
const recentNews = [
  {
    id: 1,
    slug: 'kenangan-haru-menag-nasaruddin',
    title: 'Kenangan Haru Menag Nasaruddin Bersama Fransiskus',
    image: 'https://example.com/image1.jpg', // Replace with actual image
  },
  {
    id: 2,
    slug: 'istana-soal-usul-soeharto',
    title: 'Istana soal Usul Soeharto Pahlawan Nasional: Wajar Dapat Penghormatan',
    image: 'https://example.com/image2.jpg', // Replace with actual image
  },
  {
    id: 3,
    slug: 'ruu-kejaksaan-polri',
    title: 'Mensesneg Sebut RUU Kejaksaan dan Polri Bakal Dibahas Tahun Ini',
    image: 'https://example.com/image3.jpg', // Replace with actual image
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = (label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay before closing
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      {/* Main Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14"> {/* Reduced height from h-16 to h-14 */}
            {/* Logo */}
            <div className="flex items-center">
              <Link to={routes.home} className="flex-shrink-0">
                <img src={logo} alt="Narasi Bangsa" className="h-30 w-auto" /> {/* Adjusted logo size */}
              </Link>
            </div>

            {/* Desktop Navigation - Update spacing */}
            <div className="hidden md:flex md:items-center md:space-x-1"> {/* Reduced spacing */}
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className={`px-2 py-1 text-[13px] font-medium transition-all duration-200 relative
                      ${location.pathname.includes(item.href) 
                        ? 'text-[#4A4A4A]' 
                        : 'text-gray-600 hover:text-[#4A4A4A]'
                      }
                      group flex flex-col items-center`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200
                        ${location.pathname.includes(item.href)
                          ? 'bg-[#4A4A4A] opacity-100'
                          : 'bg-transparent group-hover:bg-[#4A4A4A] opacity-0 group-hover:opacity-100'
                        }`}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#4A4A4A] transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-[#4A4A4A] rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                aria-label="Main menu"
                aria-expanded={isOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Bar with News Preview */}
      <AnimatePresence>
        {hoveredItem === 'Nasional' && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full bg-white border-b border-gray-200 shadow-sm"
            onMouseEnter={() => handleMouseEnter('Nasional')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Categories - removed border-b */}
              <div className="flex space-x-6 py-2">
                <Link
                  to={routes.nasional}
                  className="text-[13px] font-medium text-gray-600 hover:text-[#4A4A4A]"
                >
                  Semua Berita
                </Link>
                {subcategories.map((subcat) => (
                  <Link
                    key={subcat.id}
                    to={`${routes.nasional}/${subcat.id}`}
                    className="text-[13px] font-medium text-gray-600 hover:text-[#4A4A4A] flex items-center"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${subcat.color} mr-2`} />
                    {subcat.name}
                  </Link>
                ))}
              </div>

              {/* News Preview - now directly after categories without border */}
              <div className="py-4">
                <h3 className="text-sm font-bold mb-3">BERITA TERBARU</h3>
                <div className="grid grid-cols-3 gap-4">
                  {recentNews.slice(0, 3).map((news) => (
                    <Link 
                      key={news.id}
                      to={`/nasional/${news.slug}`}
                      className="group"
                    >
                      <div className="aspect-video mb-2 overflow-hidden rounded-lg">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-medium line-clamp-2 group-hover:text-[#4A4A4A]">
                        {news.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 10, height: "auto" }}
            exit={{ opacity: 10, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="py-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-6">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={`${item.href}/${subItem.id}`}
                          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className={`w-2 h-2 rounded-full ${subItem.color} mr-3`} />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;