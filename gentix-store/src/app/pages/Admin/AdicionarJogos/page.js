"use client";

import { useState, useCallback } from "react";
import styles from "./addJogo.module.css";
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { useGames } from "@/app/context/GamesContext";
import { useEntityData } from "@/app/hooks/useEntidadeData";
import { GameForm } from "@/app/components/layout/Form/GameForm";

export default function AddJogos() {
  const [previewData, setPreviewData] = useState({
    title: 'Nome do Jogo',
    price: 0,
    category: { name: 'Categoria' },
    image: null
  });

  const { updateGames } = useGames();
  const { data: marks, loading: marksLoading, error: marksError } = useEntityData('mark');
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useEntityData('category');

  const handleFormChange = useCallback((data) => {
    setPreviewData({
      title: data.title || 'Nome do Jogo',
      price: data.price || 0,
      category: data.category,
      image: data.image
    });
  }, []);

  const handleGameSubmit = async (gameData) => {
    try {

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
        console.error("Detalhes do erro:", errorData);
        throw new Error('Erro ao cadastrar jogo');
      }
  
      alert('Jogo cadastrado com sucesso!');
      await updateGames();
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar o jogo. Tente novamente.');
    }
  };

  if (marksLoading || categoriesLoading) {
    return <div className={styles.pageLoading}>
      <img src="/assets/Loading.gif" alt="" />
      <p>CARREGANDO</p>
    </div>;
  }

  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.page}>
        <div className={styles.previewGameContainer}>
          <h1>Pré View</h1>
          <div className={styles.gamePreview}>
            <div className={styles.previewImage}
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
              <h2>R$ {previewData.price.toFixed(2).replace('.', ',')}</h2>
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
