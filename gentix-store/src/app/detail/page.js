'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Styles from './datail.module.css';
import NavBar from '../components/layout/NavBar/Navbar';
import Footer from '../components/layout/Footer/Footer';

const DetailPageContent = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  if (!id) {
    return <p>Carregando informações...</p>;
  }

  const handleBuy = () => {
    const purchasedDate = new Date().toLocaleDateString();

    const existingGames = JSON.parse(localStorage.getItem('library')) || [];

   
    const newGame = { id, title, description, price, purchasedDate };
    const updatedGames = [...existingGames, newGame];

   
    localStorage.setItem('library', JSON.stringify(updatedGames));

    
    alert(`${title} foi adicionado à sua biblioteca!`);
  };

  return (
    <div className={Styles.body}>
      <NavBar />
      <div className={Styles.Games}>
        <div className={Styles.detalhe} id="img">
          <div className={Styles.img}>
            <img src="https://th.bing.com/th/id/OIP.PLXmY8mpQyX55a01i3SMEgHaEo?w=277&h=180&c=7&r=0&o=5&pid=1.7  " className={Styles.gameIMG}></img>
          </div>
        </div>

        <div className={Styles.detalhe}>
          <div className={Styles.itens}>
            <h1 className={Styles.txtTl}>{title}</h1>
            <p className={Styles.txt}>{description}</p>
            <p className={Styles.txt}>
              <strong>Preço:</strong>{' '}
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(price))}
            </p>
            <div className={Styles.btn}>
              <button className={Styles.button} onClick={handleBuy}>
                Adiquirir
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const DetailPage = () => (
  <Suspense fallback={<p>Carregando página...</p>}>
    <DetailPageContent />
  </Suspense>
);

export default DetailPage;
