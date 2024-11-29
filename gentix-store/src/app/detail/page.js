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
  const image = searchParams.get('image');  // Pegando a URL da imagem

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

    const fileUrl = "/uploads/Mochi's_Quest.exe"; 
    const fileName = "MochisQuest";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={Styles.body}>
      <NavBar />
      <div className={Styles.Games}>
        <div className={Styles.detalhe}>
          <div className={Styles.img}>
            <img src={image} className={Styles.gameIMG} id="img" alt={title} />  {/* Exibindo a imagem */}
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
                Adquirir
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
