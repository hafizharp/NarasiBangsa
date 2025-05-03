import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home';
import Nasional from './pages/nasional';
import Internasional from './pages/internasional';
import Ekonomi from './pages/ekonomi';
import Olahraga from './pages/olahraga';
import Teknologi from './pages/teknologi';
import Hiburan from './pages/hiburan';
import GayaHidup from './pages/gayahidup';
import Otomotif from './pages/otomotif';
import NotFound from './pages/NotFound';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasional" element={<Nasional />} />
        <Route path="/internasional" element={<Internasional />} />
        <Route path="/ekonomi" element={<Ekonomi />} />
        <Route path="/olahraga" element={<Olahraga />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/hiburan" element={<Hiburan />} />
        <Route path="/gaya-hidup" element={<GayaHidup />} />
        <Route path="/otomotif" element={<Otomotif />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

