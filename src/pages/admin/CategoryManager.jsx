import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Move } from 'lucide-react';
import { categoryService } from '../../services/categoryService';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCategory = async (data) => {
    try {
      await categoryService.createCategory(data);
      fetchCategories();
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Categories</h1>
        <button 
          onClick={() => setEditingCategory({})}
          className="flex items-center gap-2 px-4 py-2 bg-[#4A4A4A] text-white rounded-lg hover:bg-gray-700"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Category List */}
      <div className="bg-white rounded-xl shadow-sm">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="flex items-center justify-between p-4 border-b last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${category.color}`} />
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setEditingCategory(category)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-move">
                <Move className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Category Edit Modal */}
      {editingCategory && (
        <CategoryEditModal
          category={editingCategory}
          onSave={handleCreateCategory}
          onClose={() => setEditingCategory(null)}
        />
      )}
    </div>
  );
};

export default CategoryManager;