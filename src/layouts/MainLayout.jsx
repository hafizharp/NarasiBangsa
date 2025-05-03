import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar shadow after 50px scroll
      setIsScrolled(window.scrollY > 50);
      // Show scroll to top after 400px scroll
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <motion.div
          className="h-full bg-[#4A4A4A]"
          initial={{ width: "0%" }}
          animate={{ 
            width: isScrolled 
              ? `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
              : "0%" 
          }}
        />
      </div>

      <Navbar />
      
      {/* Main content with proper spacing */}
      <main className="flex-1 mt-16"> {/* Added mt-16 to account for navbar height */}
        <motion.div
          className="w-full py-6 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;