import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../config/routes';
import logo from '../assets/logo-narasi.png'; // Make sure to add your logo to assets folder

const navItems = [
  { label: 'Nasional', href: routes.nasional },
  { label: 'Internasional', href: routes.internasional },
  { label: 'Ekonomi', href: routes.ekonomi },
  { label: 'Olahraga', href: routes.olahraga },
  { label: 'Teknologi', href: routes.teknologi },
  { label: 'Hiburan', href: routes.hiburan },
  { label: 'Gaya Hidup', href: routes.gayaHidup },
  { label: 'Otomotif', href: routes.otomotif },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* Increased height for navbar */}
          {/* Logo Section */}
          <div className="flex items-center">
            <Link 
              to={routes.home} 
              className="flex-shrink-0 group"
            >
              <img
                src={logo}
                alt="Narasi Bangsa"
                className="h-40 w-auto py-2" // Changed to h-30 (120px) with vertical padding
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group
                  ${location.pathname === item.href
                    ? 'text-[#4A4A4A] bg-gray-50'
                    : 'text-gray-600 hover:text-[#4A4A4A]'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#4A4A4A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                  ${location.pathname === item.href ? 'scale-x-100' : ''}`}>
                </span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
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
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200
                  ${location.pathname === item.href
                    ? 'text-[#4A4A4A] bg-gray-50'
                    : 'text-gray-600 hover:text-[#4A4A4A] hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Auth Buttons - Mobile */}
            <div className="pt-4 space-y-2">
              <Link
                to="/login"
                className="block w-full px-3 py-2 text-center text-gray-700 hover:text-[#4A4A4A] border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full px-3 py-2 text-center text-white bg-[#4A4A4A] rounded-lg hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;