"use client";

import { useState, useCallback } from "react";
import styles from "./addJogo.module.css";
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { useGames } from "@/app/context/GamesContext";
import { useEntityData } from "@/app/hooks/useEntidadeData";
import { GameForm } from "@/app/components/layout/Form/GameForm";
import Loading from "@/app/components/Load";

export default function AddJogos() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [previewData, setPreviewData] = useState({
    title: 'Nome do Jogo',
    price: 0,
    category: { name: 'Categoria' },
    image: File
  });

  const { updateGames } = useGames();
  const { data: marks, loading: marksLoading, error: marksError } = useEntityData('mark');
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useEntityData('category');

  const handleImageSubmit = async (gameData) => {
    try {
      const formData = new FormData();
      formData.append("file", gameData.image); // Arquivo da imagem.

      const response = await fetch(`https://pjct-e-commerce-back.onrender.com/api/gameimage/?game=${gameData.id}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro no cadastro da imagem:", errorData);
        throw new Error('Erro ao cadastrar imagem');
      }

      await updateGames(); // Atualiza os dados do contexto global.
    } catch (error) {
      console.error('Erro ao cadastrar imagem:', error);
      alert('Erro ao cadastrar a imagem. Tente novamente.');
    }

    console.log('Dados do jogo antes do envio:', gameData);
    console.log('ID do jogo criado:', gameData.id);
    console.log('Imagem do jogo:', gameData.image);
  };

  const handleFormChange = useCallback((data) => {
    const formattedPrice = parseFloat(data.price || 0).toFixed(2).replace('.', ',');

    setPreviewData({
      title: data.title || 'Nome do Jogo',
      price: data.price,
      category: data.category,
      image: data.image
    });
  }, []);

  const handleGameSubmit = async (gameData) => {
    try {
      // Envia os dados do jogo
      const data = {
        title: gameData.title,
        description: gameData.description,
        price: gameData.price,
        mark: { id: gameData.mark.id },
        category: { id: gameData.category.id },
        creationDate: new Date().toISOString(),
        updateDate: new Date().toISOString(),
      };

      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/game/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao cadastrar jogo:", errorData);
        throw new Error('Erro ao cadastrar jogo');
      }

      // Após cadastrar o jogo, envia a imagem
      if (gameData.image) {
        await handleImageSubmit(gameData);
      }

      setShowSuccess(true); // Exibe o sucesso após cadastrar
      setTimeout(() => setShowSuccess(false), 3000); // Esconde o sucesso após 3 segundos

      await updateGames(); // Atualiza os dados do contexto global
    } catch (error) {
      console.error('Erro ao cadastrar jogo:', error);
      alert('Erro ao cadastrar o jogo. Tente novamente.');
    }
  };

  if (marksLoading || categoriesLoading) {
    return <Loading />;
  }

  if (showSuccess) {
    return (
      <div className={styles.boa}>
        <img src="/assets/SuccessCadastro-ezgif.com-optimize.gif" alt="Success" />
        <h1>Jogo cadastrado com sucesso</h1>
      </div>
    );
  }

  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.page}>
        <div className={styles.previewGameContainer}>
          <h1>Pré-visualização</h1>
          <div className={styles.gamePreview}>
            <div
              className={styles.previewImage}
              style={{
                backgroundImage: previewData.image ? `url(${previewData.image})` : 'none'
              }}
            >
              <span className={styles.tag}>
                {previewData.category?.name || 'Categoria'}
              </span>
            </div>
            <div className={styles.previewText}>
              <h1>{previewData.title}</h1>
              <h2>R$ {previewData.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contentForm}>
            <section className={styles.card}>
              <h2 className={styles.sectionTitle}>Cadastrar Novo Jogo</h2>
              {(marksError || categoriesError) && (
                <div className={styles.error}>{marksError || categoriesError}</div>
              )}
              <GameForm
                marks={marks}
                categories={categories}
                onSubmit={handleGameSubmit}
                onFormChange={handleFormChange}
              />
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
