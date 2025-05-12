import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/button";

const NotFound = () => {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] pt-20 sm:pt-24 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center max-w-lg mx-auto py-8 sm:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-6xl sm:text-8xl font-bold text-[#4A4A4A]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Halaman Tidak Ditemukan
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="px-4"
          >
            <Button asChild>
              <Link to="/" className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
