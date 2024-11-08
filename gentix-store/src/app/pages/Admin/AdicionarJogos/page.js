"use client"

import styles from "./addJogo.module.css"
import SideBar from '@/app/components/layout/SideBar/SideBar';
import { useGames } from "@/app/context/GamesContext";
import { useEntityData } from "@/app/hooks/useEntidadeData";
import Link from 'next/link';
import { GameForm } from "@/app/components/layout/Form/GameForm";

export default function AddJogos(){
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
      return <div className={styles.pageLoading}>
        <img src="/assets/Loading.gif" alt="" />
        <p>CARREGANDO</p>
      </div>;
    }

    return (
        <div className={styles.body} >
        <SideBar/>
        <div className={styles.page}>
            <div className={styles.previewGameContainer}>

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
                        />
                    </section>
                </div>
            </div>
        </div>
      </div>
    )
}