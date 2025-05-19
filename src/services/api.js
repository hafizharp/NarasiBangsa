import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/', // Update this URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true // Penting untuk authentication dengan Laravel Sanctum
});

// Request interceptor - menambahkan headers atau token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handling errors & refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {
          refresh_token: refreshToken
        });

        const { token } = response.data;
        localStorage.setItem('token', token);
        
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (error) {
        // If refresh fails, redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }

    // Handle other errors
    const errorMessage = error.response?.data?.message || 'Terjadi kesalahan';
    
    // You can integrate with your toast/notification system here
    console.error('API Error:', errorMessage);

    return Promise.reject(error);
  }
);

// API Response wrapper
const handleResponse = (promise) => {
  return promise
    .then((response) => [null, response.data])
    .catch((error) => [error, null]);
};

// API Methods
export const apiService = {
  // Auth endpoints
  login: (credentials) => handleResponse(api.post('/auth/login', credentials)),
  register: (userData) => handleResponse(api.post('/auth/register', userData)),
  logout: () => handleResponse(api.post('/auth/logout')),
  
  // Article endpoints
  getArticles: (params) => handleResponse(api.get('/articles', { params })),
  getArticle: (slug) => handleResponse(api.get(`/articles/${slug}`)),
  createArticle: (data) => handleResponse(api.post('/articles', data)),
  updateArticle: (slug, data) => handleResponse(api.put(`/articles/${slug}`, data)),
  deleteArticle: (slug) => handleResponse(api.delete(`/articles/${slug}`)),

  // Category endpoints
  getCategories: () => handleResponse(api.get('/categories')),
  getSubcategories: (categoryId) => handleResponse(api.get(`/categories/${categoryId}/subcategories`)),

  // Comment endpoints
  getComments: (articleId) => handleResponse(api.get(`/articles/${articleId}/comments`)),
  createComment: (articleId, data) => handleResponse(api.post(`/articles/${articleId}/comments`, data)),
  
  // User endpoints
  getUserProfile: () => handleResponse(api.get('/user/profile')),
  updateUserProfile: (data) => handleResponse(api.put('/user/profile', data)),
};

export default api;

// Menggunakan error handling wrapper
const [error, data] = await apiService.getArticles({ category: 'nasional' });
if (error) {
  console.error('Error fetching articles:', error);
  return;
}

// Data available here
console.log(data);