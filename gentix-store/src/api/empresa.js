// services/api.js
const BASE_URL = 'https://pjct-e-commerce-back.onrender.com';

export const empresaService = {
  async addEmpresa(empresaData) {
    try {
      const response = await fetch(`${BASE_URL}/api/mark/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresaData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao adicionar Empresa');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao adicionar Empresa:', error);
      throw error;
    }
  },

  async getAllEmpresas() {
    try {
      const response = await fetch(`${BASE_URL}/api/mark/`);
      if (!response.ok) throw new Error('Falha ao buscar Empresas');
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar Empresas:', error);
      throw error;
    }
  }
};