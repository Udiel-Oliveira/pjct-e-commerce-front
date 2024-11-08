// components/AddCategoryForm.js
"use client";
import { useState } from 'react';
import { categoryService } from '@/api/categorias'; 
import styles from './addCategoryForm.module.css';

export default function AddCategoryForm({ onCategoryAdded }) {
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const newCategory = await categoryService.addCategory({ name: categoryName });
      onCategoryAdded(newCategory);
      setCategoryName('');
      alert('Categoria adicionada com sucesso!');
    } catch (error) {
      setError(error.message);
      alert(`Erro ao adicionar categoria: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Adicionar Nova Categoria</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="categoryName">Nome da Categoria</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
          placeholder="Ex: Ação, Aventura, RPG..."
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? 'Adicionando...' : 'Adicionar Categoria'}
      </button>
    </form>
  );
}