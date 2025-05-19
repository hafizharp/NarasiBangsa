import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
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
import Login from './pages/login';
import Register from './pages/register';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MainLayout>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nasional" element={<Nasional />} />
            <Route path="/nasional/:subcategory" element={<Nasional />} />
            <Route path="/nasional/page/:page" element={<Nasional />} />
            <Route path="/nasional/:subcategory/page/:page" element={<Nasional />} />
            <Route path="/internasional" element={<Internasional />} />
            <Route path="/ekonomi" element={<Ekonomi />} />
            <Route path="/olahraga" element={<Olahraga />} />
            <Route path="/teknologi" element={<Teknologi />} />
            <Route path="/hiburan" element={<Hiburan />} />
            <Route path="/gaya-hidup" element={<GayaHidup />} />
            <Route path="/otomotif" element={<Otomotif />} />

            {/* Protected User Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute>
                  <UserBookmarks />
                </ProtectedRoute>
              }
            />

            {/* Protected Editor Routes */}
            <Route
              path="/editor/*"
              element={
                <ProtectedRoute allowedRoles={['editor', 'admin']}>
                  <Routes>
                    <Route path="/" element={<EditorDashboard />} />
                    <Route path="articles" element={<EditorArticles />} />
                    <Route path="articles/new" element={<CreateArticle />} />
                    <Route path="articles/:slug/edit" element={<EditArticle />} />
                  </Routes>
                </ProtectedRoute>
              }
            />

            {/* Protected Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="categories" element={<AdminCategories />} />
                    <Route path="settings" element={<AdminSettings />} />
                  </Routes>
                </ProtectedRoute>
              }
            />

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MainLayout>
    </AuthProvider>
  );
}

export default App;

