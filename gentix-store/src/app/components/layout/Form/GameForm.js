import React, { useState, useEffect } from 'react';
import styles from "./gameForm.module.css";

export function GameForm({ marks, categories, onSubmit, onFormChange }) {
  const [gameData, setGameData] = useState({
    title: '',
    description: '',
    price: 0,
    mark: { id: 0, name: '' },
    category: { id: 0, name: '' },
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onFormChange({
      ...gameData,
      image: previewImage,
    });
  }, [gameData, previewImage, onFormChange]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
        setGameData(prev => ({
          ...prev,
          image: file
        }));
      }
      return;
    }

    if (name === "price") {
      const numericValue = parseFloat(value.replace(',', '.'));
      setGameData(prev => ({
        ...prev,
        [name]: isNaN(numericValue) ? 0 : numericValue,
      }));
      return;
    }

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setGameData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setGameData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const [type] = name.split('.');
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = parseInt(value);
    const selectedName = selectedOption.text;
    
    setGameData(prev => ({
      ...prev,
      [type]: { id, name: selectedName }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      // Primeiro, enviar os dados do jogo para criar o registro
      const gamePayload = {
        title: gameData.title,
        description: gameData.description,
        price: gameData.price,
        mark: { id: gameData.mark.id },
        category: { id: gameData.category.id }
      };
  
      // Criar o jogo primeiro
      const gameResponse = await fetch('https://pjct-e-commerce-back.onrender.com/api/game/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gamePayload),
      });
  
      if (!gameResponse.ok) {
        const errorData = await gameResponse.json();
        throw new Error(`Erro ao cadastrar jogo: ${errorData.message || 'Erro desconhecido'}`);
      }else{
        console.log("deu certo porra")
      }
  
      const createdGame = await gameResponse.json();
      console.log('ID do jogo criado:', createdGame.id);
  
      // Agora, enviar a imagem com o ID do jogo
      if (gameData.image) {
        const formData = new FormData();
        formData.append('file', gameData.image);
        console.log('Dados do FormData:', formData.get('file'));

        const imageResponse = await fetch(
          `https://pjct-e-commerce-back.onrender.com/api/gameimage/?game=${createdGame.id}`,
          {
            method: 'POST',
            body: formData,
          }
        );
  
        if (!imageResponse.ok) {
          const errorData = await imageResponse.json();
          throw new Error(`Erro ao cadastrar imagem: ${errorData.message || 'Erro desconhecido'}`);
        }
      }
  
      // Limpar o formulário após sucesso
      setGameData({
        title: '',
        description: '',
        price: 0,
        mark: { id: 0, name: '' },
        category: { id: 0, name: '' },
        image: null,
      });
      setPreviewImage(null);
  
      // Chamar o callback de sucesso
      onSubmit && onSubmit({ ...createdGame, image: gameData.image });
  
    } catch (err) {
      setError(err.message);
      console.error('Erro ao cadastrar:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <div className={styles.inputField}>
            <label htmlFor="image" className={styles.label}>
              Adicionar uma imagem
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputField}>
            <label htmlFor="title" className={styles.label}>
              Título do Jogo
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={gameData.title}
              onChange={handleInputChange}
              required
              maxLength={150}
              className={styles.input}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="price" className={styles.label}>
              Preço
            </label>
            <div className={styles.priceWrapper}>
              <span className={styles.priceCurrency}>R$</span>
              <input
                type="number"
                id="price"
                name="price"
                value={gameData.price}
                onChange={handleInputChange}
                required
                step="0.01"
                min="0"
                className={styles.priceInput}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputField}>
          <label htmlFor="description" className={styles.label}>
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={gameData.description}
            onChange={handleInputChange}
            required
            className={styles.textarea}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <div className={styles.inputField}>
            <label htmlFor="mark.id" className={styles.label}>
              Marca
            </label>
            <select
              id="mark.id"
              name="mark.id"
              value={gameData.mark.id}
              onChange={handleSelectChange}
              required
              className={styles.select}
            >
              <option value="">Selecione uma marca</option>
              {marks.map(mark => (
                <option key={mark.id} value={mark.id}>{mark.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="category.id" className={styles.label}>
              Categoria
            </label>
            <select
              id="category.id"
              name="category.id"
              value={gameData.category.id}
              onChange={handleSelectChange}
              required
              className={styles.select}
            >
              <option value="">Selecione uma categoria</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button 
        type="submit" 
        className={styles.primaryButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Jogo'}
      </button>
    </form>
  );
}