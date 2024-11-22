// services/api.js
const BASE_URL = 'https://pjct-e-commerce-back.onrender.com';

export const categoryService = {
  async addCategory(categoryData) {
    try {
      const response = await fetch(`${BASE_URL}/api/category/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao adicionar categoria');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
      throw error;
    }
  },

  async getAllCategories() {
    try {
      const response = await fetch(`${BASE_URL}/api/category/`);
      if (!response.ok) throw new Error('Falha ao buscar categorias');
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      throw error;
    }
  }
};