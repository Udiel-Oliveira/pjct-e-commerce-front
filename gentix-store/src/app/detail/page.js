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

    // Recuperar os jogos existentes da biblioteca
    const existingGames = JSON.parse(localStorage.getItem('library')) || [];

    // Criar o novo jogo
    const newGame = { id, title, description, price, purchasedDate };
    const updatedGames = [...existingGames, newGame];

    // Atualizar o localStorage
    localStorage.setItem('library', JSON.stringify(updatedGames));

    // Exibir mensagem de sucesso
    alert(`${title} foi adicionado à sua biblioteca!`);

    // Lógica para o download do arquivo
    const fileUrl = "/uploads/Mochi's_Quest.exe"; // Substituir pelo caminho correto
    const fileName = "MochisQuest";

    // Criar elemento <a> dinamicamente
    const link = document.createElement("a");
    link.href = fileUrl; // URL do arquivo
    link.download = fileName; // Nome do arquivo para salvar
    link.style.display = "none";

    // Adicionar ao DOM, clicar e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={Styles.body}>
      <NavBar />
      <div className={Styles.Games}>
        <div className={Styles.detalhe} id="img">
          <div className={Styles.img}></div>
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
