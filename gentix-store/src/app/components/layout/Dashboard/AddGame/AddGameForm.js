// components/AddGameForm.js
"use client";
import { useState, useEffect } from 'react';
import { gameService } from '@/api/games';
import styles from './addGame.module.css';

export default function AddGameForm({ onGameAdded }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    categories: [] // Mudado de categoryIds para categories
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await gameService.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    };

    loadCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedCategories = selectedOptions.map(option => ({
      id: parseInt(option.value),
      name: option.text
    }));
    
    setFormData(prev => ({
      ...prev,
      categories: selectedCategories
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = formData.imageUrl;

      if (imageFile) {
        const uploadResponse = await gameService.uploadImage(imageFile);
        imageUrl = uploadResponse.url;
      }

      // Prepare the data in the format expected by the API
      const gameData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        imageUrl: imageUrl || null,
        categories: formData.categories.map(cat => ({
          id: cat.id,
          name: cat.name
        }))
      };

      console.log('Sending game data:', gameData); // Para debug

      const newGame = await gameService.addGame(gameData);
      onGameAdded(newGame);
      
      // Limpar formulário
      setFormData({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        categories: []
      });
      setImageFile(null);
      setPreviewUrl('');

      alert('Jogo adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar jogo:', error);
      alert(`Erro ao adicionar jogo: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome do Jogo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price">Preço</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          step="0.01"
          min="0"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="categories">Categorias (Segure Ctrl para selecionar múltiplas)</label>
        <select
          id="categories"
          name="categories"
          multiple
          value={formData.categories.map(cat => cat.id)}
          onChange={handleCategoryChange}
          required
          className={styles.categorySelect}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className={styles.selectedCategories}>
          Categorias selecionadas: {formData.categories.map(cat => cat.name).join(', ')}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="image">Imagem do Jogo</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {previewUrl && (
          <div className={styles.imagePreview}>
            <img src={previewUrl} alt="Preview" />
          </div>
        )}
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? 'Adicionando...' : 'Adicionar Jogo'}
      </button>
    </form>
  );
}