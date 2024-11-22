// services/api.js
const BASE_URL = 'https://pjct-e-commerce-back.onrender.com';

export const gameService = {
  // ... funções anteriores ...

  // Adicionar novo jogo
  async addGame(gameData) {
    try {
      const response = await fetch(`${BASE_URL}/api/game/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: gameData.name,
          description: gameData.description,
          price: gameData.price,
          imageUrl: gameData.imageUrl,
          categories: gameData.categories
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao adicionar jogo');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao adicionar jogo:', error);
      throw error;
    }
  },

  // Upload de imagem
  async uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Falha ao fazer upload da imagem');
      return await response.json();
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      throw error;
    }
  }
};