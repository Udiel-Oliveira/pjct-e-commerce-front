import { useState, useEffect } from 'react';
import styles from "../Form/gameForm.module.css";

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

  useEffect(() => {
    onFormChange({
      title: gameData.title,
      description: gameData.description,
      price: gameData.price,
      mark: gameData.mark,
      category: gameData.category,
      image: previewImage,  // Passar apenas a URL da imagem
    });
  }, [gameData.title, gameData.description, gameData.price, gameData.mark, gameData.category, previewImage]);

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

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setGameData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setGameData(prev => ({
        ...prev,
        [name]: name === 'price' ? parseFloat(value) : value
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
    await onSubmit({
      ...gameData,
      creationDate: new Date().toISOString(),
      updateDate: new Date().toISOString()
    });
    setGameData({
      title: '',
      description: '',
      price: 0,
      mark: { id: 0, name: '' },
      category: { id: 0, name: '' }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        
        <div className={styles.formGroup}>
          <div className={styles.inputField}>
            <label htmlFor="image" className={styles.label}>
              Adiconar uma imagem
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
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

      <button type="submit" className={styles.primaryButton}>
        Cadastrar Jogo
      </button>
    </form>
  );
}
