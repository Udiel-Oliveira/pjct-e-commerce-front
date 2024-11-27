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
                  <strong>Adiquirido em:</strong> {game.purchasedDate}
                </p>
                </div>
               
              </div>
            ))
          ) : (
            <p>Nenhum jogo na biblioteca ainda </p>
          )}
        </div>
      </div>
     
    </div>
  );
}