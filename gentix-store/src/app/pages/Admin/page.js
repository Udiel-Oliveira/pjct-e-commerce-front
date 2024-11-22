'use client';

import { useGames } from '../../context/GamesContext';
import NavBar from "@/app/components/layout/NavBar/Navbar";
import Footer from "@/app/components/layout/Footer/Footer";
import { GameForm } from '../../components/layout/Form/GameForm';
import { EntityForm } from '../../components/layout/Form/EntidadeForm';
import { EntityTable } from '../../components/layout/Tables/EntidadeTable';
import { useEntityData } from '../../hooks/useEntidadeData';

import styles from "./admin.module.css"

export default function ManagementPage() {
  const { updateGames } = useGames();
  const { 
    data: marks, 
    loading: marksLoading, 
    error: marksError, 
    addEntity: addMark 
  } = useEntityData('mark');
  
  const { 
    data: categories, 
    loading: categoriesLoading, 
    error: categoriesError, 
    addEntity: addCategory 
  } = useEntityData('category');

  const handleGameSubmit = async (gameData) => {
    try {
      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/game/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameData)
      });

      if (!response.ok) throw new Error('Erro ao cadastrar jogo');
      
      alert('Jogo cadastrado com sucesso!');
      await updateGames();
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar o jogo. Tente novamente.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (marksLoading || categoriesLoading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <NavBar />
      
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Gerenciamento de Jogos</h1>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Cadastrar Novo Jogo</h2>
          {(marksError || categoriesError) && (
            <div className={styles.error}>{marksError || categoriesError}</div>
          )}
          <GameForm 
            marks={marks} 
            categories={categories} 
            onSubmit={handleGameSubmit} 
          />
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Gerenciar Marcas</h2>
          <EntityForm 
            entityName="Marca" 
            onSubmit={addMark} 
            styles={styles}
          />
          <EntityTable 
            data={marks} 
            formatDate={formatDate}
            styles={styles}
          />
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Gerenciar Categorias</h2>
          <EntityForm 
            entityName="Categoria" 
            onSubmit={addCategory}
            styles={styles}
          />
          <EntityTable 
            data={categories} 
            formatDate={formatDate}
            styles={styles}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}