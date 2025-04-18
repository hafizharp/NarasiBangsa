import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;