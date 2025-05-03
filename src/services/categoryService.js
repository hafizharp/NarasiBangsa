import api from './api';

export const categoryService = {
  // Get all categories
  getAllCategories: () => api.get('/categories'),
  
  // Get subcategories by parent category (e.g., "nasional")
  getSubcategories: (parentId) => api.get(`/categories/${parentId}/subcategories`),
  
  // Admin/Editor operations
  createCategory: (data) => api.post('/admin/categories', data),
  updateCategory: (id, data) => api.put(`/admin/categories/${id}`, data),
  deleteCategory: (id) => api.delete(`/admin/categories/${id}`),
  reorderCategories: (data) => api.put('/admin/categories/reorder', data),
};