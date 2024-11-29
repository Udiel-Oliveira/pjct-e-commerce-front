'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/app/components/layout/NavBar/Navbar';
import Footer from '@/app/components/layout/Footer/Footer';
import styles from '../Biblioteca/biblioteca.module.css';

export default function Home() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    setLibrary(storedLibrary);
  }, []);

  const handleDelete = (index) => {
    // Remove o jogo da lista
    const updatedLibrary = library.filter((_, i) => i !== index);

    // Atualiza o Local Storage com a lista sem o jogo removido
    localStorage.setItem('library', JSON.stringify(updatedLibrary));

    // Atualiza o estado para refletir a mudança na UI
    setLibrary(updatedLibrary);
  };

  return (
    <div className={styles.corpo}>
      <NavBar />
      <div className={styles.page}>
        <h4 className={styles.title}>Meus Jogos</h4>
        <div className={styles.library}>
          {library.length > 0 ? (
            library.map((game, index) => (
              <div key={index} className={styles.game}>
                <h5 className={styles.gtl}>{game.title}</h5>
                <div className={styles.date}>
                  <p className={styles.txtp}>
                    <strong>Adquirido em:</strong> {game.purchasedDate}
                  </p>
                </div>
                <button 
                  className={styles.deleteBtn} 
                  onClick={() => handleDelete(index)}
                >
                  Apagar
                </button>
              </div>
            ))
          ) : (
            <p>Nenhum jogo na biblioteca ainda.</p>
          )}
        </div>
      </div>
  
    </div>
  );
}
